import type { Maker, User } from "../interfaces/user.ts";
import type { Media, PageInfo, Thumbnail } from "../interfaces/shared.ts";
import type { ProductLink } from "../interfaces/product.ts";
import type { Topic } from "../interfaces/topic.ts";
import { Comment } from "../interfaces/comment.ts";

export type PostOrder = "VOTES" | "FEATURED_AT" | "RANKING" | "NEWEST"

/**
 * Represents the response object for a ProductHunt post.
 */
/* export interface ProductHuntPostResponse {
    data?: PostData
} */
export type ProductHuntPostResponse = PostData

/**
 * Represents the data object within the ProductHunt post response.
 */
export interface PostData {
    post?: Post
}

/**
 * Represents the post object within the ProductHunt post data.
 */
export interface Post {
    /**
     * The number of comments on the post.
     * @type {number}
     */
    commentsCount?: number;

    /**
     * The timestamp when the post was created.
     * @type {Date}
     */
    createdAt?: Date;

    /**
     * The timestamp when the post was featured.
     * @type {Date}
     */
    featuredAt?: Date;

    /**
     * The description of the post.
     * @type {string}
     */
    description: string;

    /**
     * Indicates whether the post has been collected.
     * @type {boolean}
     */
    isCollected?: boolean;

    /**
     * The unique identifier of the post.
     * @type {string}
     */
    id?: string;

    /**
     * The name or title of the post.
     * @type {string}
     */
    name?: string;

    /**
     * Indicates whether the user has voted on the post.
     * @type {boolean}
     */
    isVoted?: boolean;

    /**
     * The rating given to the post in reviews.
     * @type {number}
     */
    reviewsRating?: number;

    /**
     * The number of reviews for the post.
     * @type {number}
     */
    reviewsCount?: number;

    /**
     * The tagline associated with the post.
     * @type {string}
     */
    tagline?: string;

    /**
     * The slug (short URL) of the post.
     * @type {string}
     */
    slug?: string;

    /**
     * The unique identifier of the user who created the post.
     * @type {string}
     */
    userId?: string;

    /**
     * The URL associated with the post.
     * @type {string}
     */
    url?: string;

    /**
     * The website URL associated with the post.
     * @type {string}
     */
    website?: string;

    /**
     * The number of votes received by the post.
     * @type {number}
     */
    votesCount?: number;

    /**
     * Information about collections associated with the post.
     * @type {CollectionInfo}
     */
    collections?: {
        /**
         * The total number of collections associated with the post.
         * @type {number}
         */
        totalCount?: number;
    };

    /**
     * Information about comments on the post.
     * @type {CommentInfo}
     */
    comments?: {
        /**
         * The total number of comments on the post.
         * @type {number}
         */
        totalCount?: number;


        /**
         * The pagination information for the comments.
         * @type {PageInfo}
         */
        pageInfo?: PageInfo

        /**
         * The nodes of the comments (array of comment objects).
         * @type {any[]} Currently unspecified structure.
         */
        nodes?: Comment[];
    };

    /**
     * Information about makers associated with the post.
     * @type {Maker[]}
     */
    makers?: Maker[];

    /**
     * Information about media content associated with the post.
     * @type {MediaInfo[]}
     */
    media?: Media[];

    /**
     * Information about product links associated with the post.
     * @type {ProductLinkInfo[]}
     */
    productLinks?: ProductLink[];

    /**
     * Information about the post's thumbnail.
     * @type {Thumbnail}
     */
    thumbnail?: Thumbnail;

    /**
     * Information about topics associated with the post.
     * @type {Topic[]}
     */
    topics?: Topic[];

    /**
     * Information about the user who created the post.
     * @type {User}
     */
    user?: User;

    /**
     * Information about votes received by the post.
     * @type {VoteInfo}
     */
    votes?: {
        /**
         * The total number of votes received by the post.
         * @type {number}
         */
        totalCount?: number;
    };
}

/**
* Represents the response object for a ProductHunt post.
*/
/* export interface ProductHuntPostsResponse {
    data?: PostsData
} */
export type ProductHuntPostsResponse = PostsData

/**
 * Represents the data object within the ProductHunt post response.
 */
export interface PostsData {
    posts?: Posts
}

/**
 * Represents the posts object within the ProductHunt post data.
 */
export interface Posts {
    /**
     * The total count value of the posts.
     * @type {number}
     * @memberof Posts
     */
    totalCount?: number

    /**
     * The page info object of the posts.
     * @type {PageInfo}
     * @memberof Posts
     */
    pageInfo?: PageInfo

    /**
     * The edges object of the posts.
     * @type {PostEdge[]}
     * @memberof Posts
     */
    edges?: PostEdge[]
}

/**
 * Represents an edge object within the posts data.
 */
export interface PostEdge {
    /**
     * The cursor value of the edge.
     * @type {string}
     * @memberof PostEdge
     */
    cursor?: string

    /**
     * The node object within the edge.
     * @type {PostNode}
     * @memberof PostEdge
     */
    node?: PostNode
}

/**
 * Represents a node object within the posts data.
 */
export interface PostNode {
    /**
     * The ID of the node.
     * @type {string}
     * @memberof PostNode
     */
    id?: string

    /**
     * The name of the node.
     * @type {string}
     * @memberof PostNode
     */
    name?: string

    /**
     * The tagline of the node.
     * @type {string}
     * @memberof PostNode
     */
    tagline?: string

    /**
     * The description of the node.
     * @type {string}
     * @memberof PostNode
     */
    description?: string

    /**
     * The URL of the node.
     * @type {string}
     * @memberof PostNode
     */
    url?: string

    /**
     * The slug of the node.
     * @type {string}
     * @memberof PostNode
     */
    slug?: string

    /**
     * The number of votes for the node.
     * @type {number}
     * @memberof PostNode
     */
    votesCount?: number

    /**
     * The thumbnail object of the node.
     * @type {Thumbnail}
     * @memberof PostNode
     */
    thumbnail?: Thumbnail

    /**
     * The website URL of the node.
     * @type {string}
     * @memberof PostNode
     */
    website?: string

    /**
     * The rating of the reviews for the node.
     * @type {number}
     * @memberof PostNode
     */
    reviewsRating?: number

    /**
     * The number of reviews for the node.
     * @type {number}
     * @memberof PostNode
     */
    reviewsCount?: number

    /**
     * The creation date of the node.
     * @type {Date}
     * @memberof PostNode
     */
    createdAt?: Date

    /**
     * The makers associated with the node.
     * @type {Maker[]}
     * @memberof PostNode
     */
    makers?: Maker[]

    /**
     * The product links associated with the node.
     * @type {Thumbnail[]}
     * @memberof PostNode
     */
    productLinks?: Thumbnail[]

    /**
     * The user object associated with the node.
     * @type {User}
     * @memberof PostNode
     */
    user?: User

    /**
     * The number of comments for the node.
     * @type {number}
     * @memberof PostNode
     */
    commentsCount?: number

    /**
     * The featured date of the node.
     * @type {Date}
     * @memberof PostNode
     */
    featuredAt?: Date

    /**
     * Indicates if the node is collected.
     * @type {boolean}
     * @memberof PostNode
     */
    isCollected?: boolean

    /**
     * Indicates if the node is voted.
     * @type {boolean}
     * @memberof PostNode
     */
    isVoted?: boolean

    /**
     * The ID of the user associated with the node.
     * @type {string}
     * @memberof PostNode
     */
    userId?: string
}