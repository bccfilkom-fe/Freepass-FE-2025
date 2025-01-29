import { useState } from "react";
import PropTypes from "prop-types";

export default function CommentCard({
  comment,
  onEdit,
  onUpdate,
  onDelete,
  isEditing,
}) {
  const [editText, setEditText] = useState(comment.body);

  return (
    <div className="border p-4 rounded-md shadow space-y-1">
      <p className="text-lg">{comment.user?.name || "Anonymous"}</p>
      {isEditing ? (
        <div className="flex gap-2">
          <input
            type="text"
            className="border p-1 flex-grow text-black"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            className=" bg-white text-black rounded-full py-1 px-4"
            onClick={() => onUpdate(comment.id, editText)}
          >
            Save
          </button>
        </div>
      ) : (
        <p className="font-lao text-sm text-white/60">{comment.body}</p>
      )}
      <div className="flex gap-2">
        {!isEditing && (
          <button
            className="bg-white text-black rounded-full py-1 px-4"
            onClick={onEdit}
          >
            Edit
          </button>
        )}
        <button
          className="bg-white text-black rounded-full py-1 px-4"
          onClick={() => onDelete(comment.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

CommentCard.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
};
