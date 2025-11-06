import React from "react";
import type { UserProfileCardProps } from "../../types";

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "250px",
        textAlign: "center",
      }}
    >
      {user.avatarUrl && (
        <img
          src={user.avatarUrl}
          alt={user.name}
          style={{ width: "80px", height: "80px", borderRadius: "50%" }}
        />
      )}
      <h2>{user.name}</h2>
      {showEmail && <p>{user.email}</p>}
      {showRole && <p>{user.role}</p>}

      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          style={{
            marginTop: "8px",
            padding: "4px 8px",
            cursor: "pointer",
          }}
        >
          Edit
        </button>
      )}

      {children}
    </div>
  );
};

export default UserProfileCard;
