import type { Topic, TopicData, TopicOrder } from "@/interfaces/topic.ts";
import type { PostOrder, ProductHuntPostResponse, ProductHuntPostsResponse } from "@/interfaces/post.ts";
import { ProductHuntResponse } from "@/types.ts";

/**
 * @export
 * @interface GetPostsRequestVariables
 */
export interface GetPostsRequestVariables {
    featured?: boolean
    postedBefore?: Date
    postedAfter?: Date
    topic?: string
    order?: PostOrder
    after?: string
    before?: string
    first?: number
    twitterUrl?: string
    url?: string
}

/**
 *
 * @export
 * @interface GetPostsRequest
 */
export interface GetPostsRequest {
    query?: string
    variables?: GetPostsRequestVariables
}

/**
 * @export
 * @interface GetPostRequestVariables
 */
export interface GetPostRequestVariables {
    id?: string
    slug?: string
    commentsAfter?: string
}

/**
 *
 * @export
 * @interface GetPostRequest
 */
export interface GetPostRequest {
    query?: string
    variables?: GetPostRequestVariables
}

/**
 * Represents the response object for a ProductHunt topic.
 */
/* export interface ProductHuntTopicResponse {
    data?: TopicData
} */
export type ProductHuntTopicsResponse = TopicData

/**
 * @export
 * @interface GetTopicsRequestVariables
 */
export interface GetTopicsRequestVariables {
    followedByUserid?: string
    query?: string
    order?: TopicOrder
    after?: string
    before?: string
    first?: number
    last?: number
}

/**
 *
 * @export
 * @interface GetTopicsRequest
 */
export interface GetTopicsRequest {
    query?: string
    variables?: GetTopicsRequestVariables
}

/**
 * @export
 * @interface GetTopicRequestVariables
 */
export interface GetTopicRequestVariables {
    id?: string
    slug?: string
}

/**
 *
 * @export
 * @interface GetTopicRequest
 */
export interface GetTopicRequest {
    query?: string
    variables?: GetTopicRequestVariables
}

export type ProductHuntTopicResponse = { topic: Topic }

export interface IProductHuntAPI {
    getPosts(params?: GetPostsRequest): Promise<ProductHuntResponse<ProductHuntPostsResponse>>;
    getPost(params?: GetPostRequest): Promise<ProductHuntResponse<ProductHuntPostResponse>>;
    getTopics(params?: GetTopicsRequest): Promise<ProductHuntResponse<ProductHuntTopicsResponse>>
    getTopic(params?: GetTopicRequest): Promise<ProductHuntResponse<ProductHuntTopicResponse>>
}