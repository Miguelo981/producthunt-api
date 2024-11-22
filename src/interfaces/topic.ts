import type { PageInfo } from "@/interfaces/shared.ts";

export type TopicOrder = "FOLLOWERS_COUNT" | "NEWEST"

/**
 * Represents the data object within the ProductHunt topic response.
 */
export interface TopicData {
    topics?: Topics
}

/**
 * Represents the topics object within the ProductHunt topic data.
 */
export interface Topics {
    /**
     * The total count value of the topics.
     * @type {number}
     * @memberof Topics
     */
    totalCount?: number

    /**
     * The page info object of the topics.
     * @type {PageInfo}
     * @memberof Topics
     */
    pageInfo?: PageInfo

    /**
     * The edges object of the topics.
     * @type {PostEdge[]}
     * @memberof Topics
     */
    nodes?: Topic[]
}

/**
 * Represents a Topic object within the topics data.
 * @interface Topic
 */
export interface Topic {
    /**
     * The name of the topic.
     * @type {string}
     * @memberof Topic
     */
    name?: string

    /**
     * The creation date of the topic.
     * @type {Date}
     * @memberof Topic
     */
    createdAt?: Date

    /**
     * The description of the topic.
     * @type {string}
     * @memberof Topic
     */
    description?: string

    /**
     * The number of followers of the topic.
     * @type {number}
     * @memberof Topic
     */
    followersCount?: number

    /**
     * The unique identifier of the topic.
     * @type {string}
     * @memberof Topic
     */
    id?: string

    /**
     * The image associated with the topic.
     * @type {string}
     * @memberof Topic
     */
    image?: string

    /**
     * Indicates if the user is following the topic.
     * @type {boolean}
     * @memberof Topic
     */
    isFollowing?: boolean

    /**
     * The number of posts related to the topic.
     * @type {number}
     * @memberof Topic
     */
    postsCount?: number

    /**
     * The slug of the topic.
     * @type {string}
     * @memberof Topic
     */
    slug?: string

    /**
     * The URL associated with the topic.
     * @type {string}
     * @memberof Topic
     */
    url?: string
}