import { useState, useEffect } from 'react'
import { API } from './API';
import Entry from './Entry';
import Schedule from './Schedule';

export default function Mainpage(){

  // Set the initial state for users as an empty array
  const [users, setUsers] = useState([]);

  // Fetch the list of users from the API when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Define a function to fetch the list of users from the API
  const fetchUsers = async () => {
    const addUser = await API.getUser();
    console.log(addUser);
    // Update the state of users with the fetched list of users
    setUsers(addUser);
    console.log(addUser)
  };

  // Define a function to create a new user and update the list of users
  const createUser = async (user) => {
    await API.postUser(user);
    fetchUsers();
  }

  // Define a function to update a user and update the list of users
  const updateUsers = async (users) => {
    await API.putUser(users);
    fetchUsers();
  }

  // Define a function to delete a user and update the list of users
  const deleteUser = async (id) => {
    await API.deleteUser(id)
    fetchUsers();
  }

  console.log(users);
  // Render the Entry and Schedule components, passing them necessary props
  return(
    <div className="row">
      <div className="col">
        <Entry user={users} setUser={setUsers} fetchUsers={fetchUsers} createUser={createUser}/>
      </div>
      <div className='col'>
        <Schedule updateUsers={updateUsers} deleteUser={deleteUser} users={users} fetchUsers={fetchUsers} />
      </div>
    </div>
  )
}
