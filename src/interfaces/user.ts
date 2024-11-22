/**
 * Represents a user object.
 */
export interface User {
    /**
     * The cover image URL of the user.
     * @type {(string | null)}
     * @memberof User
     */
    coverImage?: string | null

    /**
     * The creation date of the user.
     * @type {Date}
     * @memberof User
     */
    createdAt?: Date

    /**
     * The headline of the user.
     * @type {(string | null)}
     * @memberof User
     */
    headline?: string | null

    /**
     * Indicates if the user is being followed.
     * @type {boolean}
     * @memberof User
     */
    isFollowing?: boolean

    /**
     * Indicates if the user is a maker.
     * @type {boolean}
     * @memberof User
     */
    isMaker?: boolean

    /**
     * Indicates if the user is the viewer.
     * @type {boolean}
     * @memberof User
     */
    isViewer?: boolean

    /**
     * The profile image URL of the user.
     * @type {(string | null)}
     * @memberof User
     */
    profileImage?: string | null

    /**
     * The Twitter username of the user.
     * @type {(string | null)}
     * @memberof User
     */
    twitterUsername?: string | null

    /**
     * The URL of the user.
     * @type {string}
     * @memberof User
     */
    url?: string

    /**
     * The username of the user.
     * @type {string}
     * @memberof User
     */
    username?: string

    /**
     * The website URL of the user.
     * @type {null}
     * @memberof User
     */
    websiteUrl?: null

    /**
     * The ID of the user.
     * @type {string}
     * @memberof User
     */
    id?: string

    /**
     * The name of the user.
     * @type {string}
     * @memberof User
     */
    name?: string
}

/**
* Represents a maker object.
*/
export interface Maker {
    /**
     * The ID of the maker.
     * @type {string}
     * @memberof Maker
     */
    id?: string

    /**
     * The name of the maker.
     * @type {string}
     * @memberof Maker
     */
    name?: string
}