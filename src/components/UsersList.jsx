import { useState,useEffect } from "react";
import {getUsers} from "../services/user";
import UserItemsWithPicture from "../components/UserItemsWithPicture";


function UsersList(props) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
      useEffect(() => {
       getUsers(setLoading,setUsers,props.counter)
      }, []);
    
      if (loading) {
        return <p>Loading...</p>;
      }
  return (
      <div className="bg-white shadow-md rounded-md overflow-hidden max-w-lg mx-auto mt-16">
        <div className="bg-gray-100 py-2 px-4">
          <h2 className="text-xl font-semibold text-gray-800">Top Users</h2>
        </div>

        {users.length === 0 ? (
          <p className="p-4 text-gray-500">No users found</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {users.map((user) => {
              const genderFolder = user.gender === "male" ? "men" : "women";
              const avatarID = user.id % 100;
              const imgsrc = `https://randomuser.me/api/portraits/${genderFolder}/${avatarID}.jpg`;

              return (
                <UserItemsWithPicture
                  key={user.id}
                  imgsrc={imgsrc}
                  id={user.id}
                  points={user.address.city}
                  name={`${user.firstName} ${user.lastName}`}
                  email={user.email}
                />
              );
            })}
          </ul>
        )}

        <button
          className="mt-4 mx-auto block px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => console.log("Test button clicked!")}
        >
          Click
        </button>
      </div>
  )
}

export default UsersList