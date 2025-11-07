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
    <div className="bg-white border border-gray-200 rounded-md py-2 px-4 text-center max-w-sm w-full shadow-md">
      <div className="flex items-center">
        {user.avatarUrl && (
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-24 h-24 rounded-full mx-auto object-cover"
          />
        )}
        <div className="pr-10 pt-2">
          <h2 className="text-xl font-medium text-gray-900 mb-1">
            {user.name}
          </h2>
          {showRole && (
            <p className="text-sm text-gray-500 mb-2">{user.role}</p>
          )}
          {showEmail && <p className="text-sm text-gray-600">{user.email}</p>}
        </div>
      </div>
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="w-full inline-block px-6 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
        >
          Edit Profile
        </button>
      )}
      {children && <div className="mt-2 text-xs text-gray-500">{children}</div>}
    </div>
  );
};

export default UserProfileCard;
