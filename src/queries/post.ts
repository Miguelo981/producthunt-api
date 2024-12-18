export const POSTS_QUERY = `
query Post ($first: Int, $order: PostsOrder, $featured: Boolean, $postedBefore: DateTime, $postedAfter: DateTime, $topic: String, $after: String, $before: String, $twitterUrl: String, $url: String) {
    posts(
        featured: $featured
        postedBefore: $postedBefore
        postedAfter: $postedAfter
        topic: $topic
        order: $order
        after: $after
        first: $first
        before: $before
        twitterUrl: $twitterUrl
        url: $url
    ) {
        totalCount
        pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
        }
        edges {
            cursor
            node {
                commentsCount
                createdAt
                description
                featuredAt
                id
                isCollected
                isVoted
                name
                reviewsCount
                reviewsRating
                slug
                tagline
                url
                userId
                votesCount
                website
                collections {
                    totalCount
                }
                comments {
                    totalCount
                    nodes {
                        createdAt
                        id
                        body
                        userId
                        replies {
                            totalCount
                        }
                    }
                }
                makers {
                    coverImage
                    createdAt
                    headline
                    id
                    isFollowing
                    isMaker
                    isViewer
                    name
                    profileImage
                    twitterUsername
                    url
                    username
                    websiteUrl
                }
                media {
                    type
                    url
                    videoUrl
                }
                productLinks {
                    type
                    url
                }
                thumbnail {
                    type
                    url
                    videoUrl
                }
                topics {
                    totalCount
                }
                user {
                    coverImage
                    createdAt
                    headline
                    id
                    isFollowing
                    isMaker
                    isViewer
                    name
                    profileImage
                    twitterUsername
                    url
                    username
                    websiteUrl
                }
                votes {
                    totalCount
                }
            }
        }
    }
}
`

export const POST_QUERY = `
query Post ($id: ID, $slug: String, $commentsAfter: String) {
    post(
        id: $id
        slug: $slug
    ) {
        commentsCount
        createdAt
        featuredAt
        description
        isCollected
        id
        name
        isVoted
        reviewsRating
        reviewsCount
        tagline
        slug
        userId
        url
        website
        votesCount
        collections {
            totalCount
        }
        comments (
            after: $commentsAfter
        ) {
            pageInfo {
                startCursor
                hasPreviousPage
                hasNextPage
                endCursor
            }
            nodes {
                createdAt
                id
                body
                userId
                replies {
                    totalCount
                    nodes {
                        id
                        body
                        createdAt
                        votesCount
                        replies {
                            totalCount
                            nodes {
                                id
                                body
                                createdAt
                                votesCount
                            }
                        }
                    }
                }
            }
            totalCount
        }
        makers {
            coverImage
            headline
            createdAt
            isFollowing
            id
            isViewer
            isMaker
            profileImage
            name
            url
            twitterUsername
            websiteUrl
            username
        }
        media {
            type
            url
            videoUrl
        }
        productLinks {
            type
            url
        }
        thumbnail {
            type
            videoUrl
            url
        }
        topics {
            totalCount
        }
        user {
            coverImage
            headline
            createdAt
            isFollowing
            id
            isViewer
            isMaker
            profileImage
            name
            url
            twitterUsername
            websiteUrl
            username
        }
        votes {
            totalCount
        }
    }
}
`
