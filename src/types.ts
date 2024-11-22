export type RequestMethod = 'GET' | 'POST';

export type ProductHuntResponseLimit = { limit: number, remaining: number, reset: number }

export type ProductHuntResponse<T> = { data: T, response: Response, limit: ProductHuntResponseLimit }

export interface ConfigurationOptions {
    headers?: Headers | Record<string, string>;
}

export interface ConfigurationParameters {
    apiToken: string
    baseOptions?: ConfigurationOptions
}