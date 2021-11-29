import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_BLOGS } from "../utils/queries";


function BlogPage() {
    const { data } = useQuery(QUERY_BLOGS);

    return (
        <div className="container my-1">
            <Link to="/">← Back to Products</Link>

            <h2>Blog Posts!</h2>
            {console.log(data)}
            {/* {data.map((post) => (
                <div key={post._id} className="my-2">
                    <h3>
                        <Link to={`/blogs/${post._id}`}>{post.title}</Link>
                    </h3>
                    <h4>
                        {new Date(parseInt(post.date)).toLocaleDateString()}
                    </h4>
                    <div className="flex-row">
                        <img alt={`blog_id:${post._id}`} src={`images/${post.image}`}/>
                        <text>{post.text}</text>
                    </div>
                </div>
            ))} */}

        </div>
    );
}

export default BlogPage;