import React from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const navigate = useNavigate();

  const handleCreatePost = async (postData) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/posts', postData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate(0);
    } catch (error) {
      console.error('Error creating post:', error.response ? error.response.data : error.message);
      alert('Failed to create post. Please try again.');
    }
  };
  

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <h2 className="text-xl mt-4">Create New Post</h2>
      <PostForm onSubmit={handleCreatePost} />
      <PostList />
    </div>
  );
}

export default DashboardPage;
