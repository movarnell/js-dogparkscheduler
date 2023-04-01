import { useState, useEffect } from 'react'
import { API } from './API';
import Entry from './Entry';
import Schedule from './Schedule';

export default function Mainpage(){
const [users, setUsers] = useState([]);

useEffect(() => {
        getUsers();
      }, []);

      const getUsers = async () => {
        const addUser = await API.getUser();
        console.log(addUser);
        setUsers(addUser);
      };

      const createUser=async (user) =>{
        await API.postUser(user);
        getUsers();
}

const updateUsers = async (updateUsers) => {
        await API.putUser(updateUsers);
        getUsers();
}


const deleteUser= async (id) => {
        await API.deleteUser(id)
        getUsers();
}

console.log(users);
return(
        <div className="row">
                <div className="col">
                        <Entry user={users} setUser={setUsers} getUsers={getUsers} />
                </div>
                <div className='col'>
                        <Schedule updateUsers={updateUsers} deleteUser={deleteUser} users={users} getUsers={getUsers} />
                </div>
        </div>
)

}