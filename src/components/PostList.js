import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/posts', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handlePublish = async (id, isPublished) => {
    try {
      const token = localStorage.getItem('token');
      const endpoint = isPublished ? 'unpublish' : 'publish';
      await axios.put(`http://localhost:5000/api/posts/${id}/${endpoint}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPosts(posts.map(post => 
        post.id === id ? {...post, published: !isPublished} : post
      ));
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">All Posts</h2>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id} className="p-4 bg-white shadow-md rounded-lg">
            <Link to={`/edit/${post.id}`} className="text-lg font-medium text-blue-500 hover:underline">
              {post.title}
            </Link>
            <button
              className="ml-4 bg-green-500 text-white px-2 py-1 rounded-md"
              onClick={() => handlePublish(post.id, post.published)}
            >
              {post.published ? 'Unpublish' : 'Publish'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
