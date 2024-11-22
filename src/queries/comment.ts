export const COMMENT_QUERY = `
    query Comment ($id: ID!) {
        comment(
            id: $id
        ) {
            id
            url
            createdAt
            body
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
            votes {
                totalCount
            }
            
        }
    }
`