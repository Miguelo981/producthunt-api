import type { ConfigurationParameters, ProductHuntResponse, ProductHuntResponseLimit, RequestMethod, ConfigurationOptions } from "./types.ts";
import { PRODUCTHUNT_API_URL } from "./constants.ts";
import type { IProductHuntAPI, GetPostsRequest, GetTopicsRequest, ProductHuntTopicResponse, GetTopicRequest, ProductHuntTopicsResponse, GetPostRequest } from "./interfaces/product-hunt.ts";
import { POST_QUERY, POSTS_QUERY } from "./queries/post.ts";
import { TOPIC_QUERY, TOPICS_QUERY } from "./queries/topic.ts";
import type { ProductHuntPostResponse, ProductHuntPostsResponse } from "./interfaces/post.ts";


export class ProductHuntAPI implements IProductHuntAPI {
    private baseUrl: URL = PRODUCTHUNT_API_URL
    /**
   * parameter for grant type
   *
   * @type name security name
   * @memberof ProductHuntAPI
   */
    private apiToken?:
        | string
        | Promise<string>
        | ((name: string) => string)
        | ((name: string) => Promise<string>)
    /**
   * base options for axios calls
   *
   * @type {ConfigurationOptions}
   * @memberof ProductHuntAPI
   */
    private baseOptions?: ConfigurationOptions

    constructor(param: ConfigurationParameters = { apiToken: '' }) {
        this.apiToken = param.apiToken;

        if (!this.baseOptions) {
            this.baseOptions = {}
        }

        this.baseOptions.headers = {
            'User-Agent': `ProductHunt/NodeJS/${/* packageJson.version */ '1.0.4'}`,
            'Authorization': `Bearer ${this.apiToken}`,
            ...this.baseOptions.headers,
        }
    }

    private async request(method: RequestMethod, data = {}, endpoint: string = '/api/graphql') {
        try {
            const url = `${this.baseUrl}${endpoint}`;
            const headers = this.getHeaders();

            if (method !== 'POST') {
                throw new Error('Only POST requests are supported');
            }

            const response = await this.sendRequest(method, url, headers, data);

            return this.processResponse(response)
        } catch (error: any) {
            throw new Error(`Failed to make request: ${error.message}`);
        }
    }

    private post<T>(data = {}): Promise<T> {
        return this.request('POST', data) as Promise<T>;
    }

    private getHeaders(): Headers {
        return new Headers({
            'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'Content-Type': 'application/json',
            ...this.baseOptions!.headers,
        });
    }

    private async sendRequest(method: RequestMethod, url: string, headers: Headers, data = {}) {
        const options: RequestInit = {
            method,
            headers,
        };

        if (method === 'POST' && Object.keys(data).length) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response
    }

    private async processResponse<T>(response: Response): Promise<ProductHuntResponse<T>> {
        let data
        const contentType = response.headers.get('content-type') ?? '';

        if (contentType.includes('application/json')) {
            data = await response.json()
        } else {
            data = await response.text()
        }

        const limit: ProductHuntResponseLimit = {
            limit: Number(response.headers.get('x-rate-limit-limit')),
            remaining: Number(response.headers.get('x-rate-limit-remaining')),
            reset: Number(response.headers.get('x-rate-limit-reset')),
        }

        return {
            data: data.data,
            response,
            limit,
        }
    }

    /**
     *
     * @summary Get posts from Product Hunt for the provided parameters.
     * @param {getPosts} getPosts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPosts(
        params?: GetPostsRequest,
    ): Promise<ProductHuntResponse<ProductHuntPostsResponse>> {
        const body = {
            query: params?.query ?? POSTS_QUERY,
            variables: { ...params?.variables },
        }

        const data = await this.post<ProductHuntResponse<ProductHuntPostsResponse>>(body);

        return data
    }
    /**
     *
     * @summary Get topics from Product Hunt for the provided parameters.
     * @param {GetTopics} GetTopics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTopics(
        params?: GetTopicsRequest,
    ): Promise<ProductHuntResponse<ProductHuntTopicsResponse>> {
        const body = {
            query: params?.query ?? TOPICS_QUERY,
            variables: { ...params?.variables },
        }

        const data = await this.post<ProductHuntResponse<ProductHuntTopicsResponse>>(body);

        return data
    }
    /**
     *
     * @summary Get post from Product Hunt for the provided parameters.
     * @param {GetPost} GetPost
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPost(
        params?: GetPostRequest,
    ): Promise<ProductHuntResponse<ProductHuntPostResponse>> {
        const body = {
            query: params?.query ?? POST_QUERY,
            variables: { ...params?.variables },
        }

        const data = await this.post<ProductHuntResponse<ProductHuntPostResponse>>(body);

        return data
    }

    /**
     *
     * @summary Get post from Product Hunt for the provided parameters.
     * @param {GetTopic} GetTopic
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTopic(
        params?: GetTopicRequest,
    ): Promise<ProductHuntResponse<ProductHuntTopicResponse>> {
        const body = {
            query: params?.query ?? TOPIC_QUERY,
            variables: { ...params?.variables },
        }

        const data = await this.post<ProductHuntResponse<ProductHuntTopicResponse>>(body);

        return data
    }
}
