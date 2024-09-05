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
      await axios.put(`https://backend-api-ze9x.onrender.com/api/posts/${id}`, postData, {
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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Edit Post</h1>
      <PostForm postId={id} onSubmit={handleUpdatePost} />
      <div className="mt-8">
        <CommentList postId={id} />
      </div>
    </div>
  );
}

export default EditPostPage;
