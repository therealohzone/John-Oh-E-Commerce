import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../utils/GlobalState';
import { useQuery } from '@apollo/client';
import { QUERY_BLOGS } from "../utils/queries";
import { UPDATE_BLOGS } from '../utils/actions';
import spinner from '../assets/spinner.gif';
import { idbPromise } from '../utils/helpers';

// useEffect(() => {
//     BlogPage()
// }, [data])

function BlogPage() {
    const [state, dispatch] = useStoreContext();
    const { loading, data } = useQuery(QUERY_BLOGS);

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_BLOGS,
                blogs: data.blogs,
            });
            data.blogs.forEach((post) => {
                idbPromise('blogs', 'put', post);
            });
        } else if (!loading) {
            idbPromise("blogs", 'get').then((blogs) => {
                dispatch({
                    type: UPDATE_BLOGS,
                    blogs: blogs,
                });
            });
        }
    }, [data, loading, dispatch])
    console.log(data);
    console.log(state);
    return (
        <div className="container my-1">
            <Link to="/">← Back to Products</Link>
            <h2>Blog Posts!</h2>

            {state.blogs.length ? (
                state.blogs.map((post) => {
                    return (
                        <div key={post._id} className="my-2">
                            <h3>
                                <Link to={`/blogs/${post._id}`}>{post.title}</Link>
                            </h3>
                            <h4>
                                {new Date(parseInt(post.date)).toLocaleDateString()}
                            </h4>
                            <div className="flex-row">
                                <img alt={`blog_id:${post._id}`} src={`images/${post.image}`} />
                            </div>
                            <text>{post.text}</text>
                        </div>
                    )
                })) : (
                <h4> no blogs added yet </h4>
            )}
            {loading ? <img src={spinner} alt="loading" /> : null}

        </div>
    );
}

export default BlogPage;