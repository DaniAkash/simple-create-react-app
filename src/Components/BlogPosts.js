import React from 'react';

const BlogPosts = ({posts}) => {
    return (
        <div>
        {
            posts.map((post, index) => {
                return (
                    <div key={index}>
                        <p>
                            {post.title}
                        </p>
                        <p>
                            {post.body}
                        </p>
                    </div>
                )
            })
        }
        </div>
    )
};

export default BlogPosts;