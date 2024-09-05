import React, { useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleCreatePost = async (postData) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/posts', postData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setShowForm(false); // Hide form after successful post creation
      navigate(0);
    } catch (error) {
      console.error('Error creating post:', error.response ? error.response.data : error.message);
      alert('Failed to create post. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center	">Dashboard</h1>
      <button 
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Cancel' : 'New Post'}
      </button>
      {showForm && <PostForm onSubmit={handleCreatePost} />}
      <PostList />
    </div>
  );
}

export default DashboardPage;
