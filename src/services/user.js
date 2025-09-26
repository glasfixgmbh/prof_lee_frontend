import { get } from "./apiClient";
/**
 * 
 * @param {*} setLoading 
 * @param {*} setUsers 
 * @param {*} limit 
 */
export const getUsers = async (setLoading, setUsers, limit) => {
    const url = "/users?limit=" + limit;
  try {
    const data = await get(url);
    setUsers(data.users);
    console.log(data.users);
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    setLoading(false);
  }
};


export const createUser = async(name, lastname)=>{
  
}