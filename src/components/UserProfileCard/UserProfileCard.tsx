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
    <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-xs text-center w-full shadow-md">
      {user.avatarUrl && (
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
      )}
      <h2 className="text-xl font-medium text-gray-900 mb-1">{user.name}</h2>
      {showRole && <p className="text-sm text-gray-500 mb-2">{user.role}</p>}
      {showEmail && <p className="text-sm text-gray-600 mb-4">{user.email}</p>}
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="inline-block px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
        >
          Edit
        </button>
      )}
      {children && <div className="mt-4 text-sm text-gray-500">{children}</div>}
    </div>
  );
};

export default UserProfileCard;
