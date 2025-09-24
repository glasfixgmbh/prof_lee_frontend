import React from "react";

function UserItemsWithPicture(props) {
  return (
    <li className="flex items-center py-4 px-6">
      <span className="text-gray-700 text-lg font-medium mr-4">{props.id}.</span>
      <img
        class="w-12 h-12 rounded-full object-cover mr-4"
        src={props.imgsrc}
        alt="User avatar"
      />
      <div className="flex-1">
        <h3 className="text-lg font-medium text-gray-800">{props.name}</h3>
        <p className="text-gray-600 text-base">{props.points} points</p>
      </div>
    </li>
  );
}

export default UserItemsWithPicture;
