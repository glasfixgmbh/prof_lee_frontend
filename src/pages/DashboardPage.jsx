import React, { Fragment } from "react";
import UserItemsWithPicture from "../components/UserItemsWithPicture";

function DashboardPage() {
  const testApi = () => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then(console.log);
  };
  return (
    <Fragment>
      <div className="bg-white shadow-md rounded-md overflow-hidden max-w-lg mx-auto mt-16">
        <div className="bg-gray-100 py-2 px-4">
          <h2 class="text-xl font-semibold text-gray-800">Top Users</h2>
        </div>
        <ul className="divide-y divide-gray-200">
          <UserItemsWithPicture
            imgsrc="https://randomuser.me/api/portraits/women/72.jpg"
            id="1"
            points="89898"
            name="Julia Klammer"
          />
        </ul>
        <button onClick={testApi()}> click </button>
      </div>
    </Fragment>
  );
}

export default DashboardPage;
