/**
 * Represents a media object.
 */
export interface Media {
    /**
     * The type of the media.
     * @type {string}
     * @memberof Media
     */
    type?: string

    /**
     * The url of the media.
     * @type {string}
     * @memberof Media
     */
    url?: string

    /**
     * The video url of the media.
     * @type {string}
     * @memberof Media
     */
    videoUrl?: string
}

/**
* Represents a thumbnail object.
*/
export interface Thumbnail {
    /**
     * The type of the thumbnail.
     * @type {string}
     * @memberof Thumbnail
     */
    type?: string

    /**
     * The URL of the thumbnail.
     * @type {string}
     * @memberof Thumbnail
     */
    url?: string

    /**
     * The video URL of the thumbnail.
     * @type {string}
     * @memberof Thumbnail
     */
    videoUrl?: string
}

/**
 * Represents the posts object within the ProductHunt post data.
 */
export interface PageInfo {
    /**
     * The end cursor value of the posts.
     * @type {string}
     * @memberof PageInfo
     */
    endCursor?: string

    /**
     * If there is a next page of posts.
     * @type {boolean}
     * @memberof PageInfo
     */
    hasNextPage?: boolean

    /**
     * If there is a previous page of posts.
     * @type {boolean}
     * @memberof PageInfo
     */
    hasPreviousPage?: boolean

    /**
     * The start cursor value of the posts.
     * @type {string}
     * @memberof PageInfo
     */
    startCursor?: string
}