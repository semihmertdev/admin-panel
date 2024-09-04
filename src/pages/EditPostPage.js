// src/pages/EditPostPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import CommentList from '../components/CommentList';
import axios from 'axios';

function EditPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleUpdatePost = async (postData) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/posts/${id}`, postData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Post updated successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Failed to update post. Please try again.');
    }
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <PostForm postId={id} onSubmit={handleUpdatePost} />
      <CommentList postId={id} />
    </div>
  );
}

export default EditPostPage;