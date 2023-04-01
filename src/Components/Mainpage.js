import { useState, useEffect } from 'react'
import { API } from './API';
import Entry from './Entry';
import Schedule from './Schedule';

export default function Mainpage(){
const [users, setUsers] = useState([]);

useEffect(() => {
        fetchUsers();
      }, []);

      const fetchUsers = async () => {
        const addUser = await API.getUser();
        console.log(addUser);
        setUsers(addUser);
        console.log(addUser)
      };

      const createUser=async (user) =>{
        await API.postUser(user);
        fetchUsers();
}

const updateUsers = async (updateUsers) => {
        await API.putUser(updateUsers);
        fetchUsers();
}


const deleteUser= async (id) => {
        await API.deleteUser(id)
        fetchUsers();
}

console.log(users);
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