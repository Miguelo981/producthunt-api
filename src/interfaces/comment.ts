/**
 * Represents the structure of a ProductHunt discussion post.
 */
export interface Comment {
    /**
     * The unique identifier for the post.
     * @type {string}
     */
    id: string;

    /**
     * The URL of the post.
     * @type {string}
     */
    url: string;

    /**
     * The timestamp when the post was created.
     * @type {string} ISO 8601 format
     */
    createdAt: string;

    /**
     * The body content of the post.
     * @type {string}
     */
    body: string;

    /**
     * Details about the replies to the post.
     */
    replies: {
        /**
         * The total number of replies.
         * @type {number}
         */
        totalCount: number;

        /**
         * The nodes of the replies (array of reply objects).
         * @type {any[]} Currently unspecified structure.
         */
        nodes: Comment[];
    };

    /**
     * Details about the votes for the post.
     */
    votes: {
        /**
         * The total number of votes.
         * @type {number}
         */
        totalCount: number;
    };

    /**
     * The identifier of the parent post, if applicable.
     * @type {string}
     */
    parentId: string;
}
