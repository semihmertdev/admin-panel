// src/components/PostList.js

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
    <div>
      <h2>All Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/edit/${post.id}`}>{post.title}</Link>
            <button onClick={() => handlePublish(post.id, post.published)}>
              {post.published ? 'Unpublish' : 'Publish'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;