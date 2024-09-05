import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/api/comments/post/${postId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [postId]);

  const handleDeleteComment = async (commentId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setComments(comments.filter(comment => comment.id !== commentId));
    } catch (error) {
      console.error('Error deleting comment:', error);
      alert('Failed to delete comment. Please try again.');
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Comments</h3>
      <ul className="space-y-4">
        {comments.map(comment => (
          <li key={comment.id} className="p-4 bg-gray-100 rounded-md">
            <p className="mb-2">{comment.content}</p>
            <small className="block text-sm text-gray-600">By: {comment.user.username}</small>
            <button
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded-md"
              onClick={() => handleDeleteComment(comment.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
