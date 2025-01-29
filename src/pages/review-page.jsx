import { useEffect, useState } from "react";
import {
  fetchComments,
  addComment,
  updateComment,
  deleteComment,
} from "../utils/api";
import CommentCard from "../components/comment-card";
import Navbar from "../components/navbar";
import Button from "../components/button";

export default function ReviewPage() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingComment, setEditingComment] = useState(null);

  useEffect(() => {
    loadComments();
  }, []);

  async function loadComments() {
    try {
      const data = await fetchComments();
      setComments(data.slice(0, 10));
    } catch (error) {
      console.error(error);
    }
  }

  async function handleAddComment() {
    if (!newComment.trim()) return;
    const createdComment = await addComment({
      body: newComment,
      email: "user@example.com",
    });
    setComments([...comments, { ...createdComment, user: { name: "You" } }]);
    setNewComment("");
  }

  async function handleUpdateComment(id, updatedText) {
    await updateComment(id, { body: updatedText });
    setComments(
      comments.map((c) => (c.id === id ? { ...c, body: updatedText } : c))
    );
    setEditingComment(null);
  }

  async function handleDeleteComment(id) {
    await deleteComment(id);
    setComments(comments.filter((c) => c.id !== id));
  }

  return (
    <div className="min-h-screen px-4">
      <Navbar />
      <h1 className="text-3xl font-bold text-center mb-8">Reviews</h1>
      <div className="flex justify-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Add a comment..."
          className="border rounded px-4 text-black"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button onClick={handleAddComment}>Add</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            onEdit={() => setEditingComment(comment.id)}
            onUpdate={handleUpdateComment}
            onDelete={handleDeleteComment}
            isEditing={editingComment === comment.id}
          />
        ))}
      </div>
    </div>
  );
}
