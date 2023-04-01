import { useState } from "react";

export default function Schedule({users, deleteUser, updateUsers}) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedDate, setUpdatedDate] = useState("");

  
    const handleEdit = () => {
      setIsEditing(!isEditing);
    };
  
    const handleSave = (user) => {
        const anotherUser ={
            id: user.id,
            name: user.namme,
            dogName: user.dogName,
            date: document.getElementById('updatedDate').value,
            friendly: user.friendly,
           }
      updateUsers(anotherUser);
      console.log(user.id)
      console.log(updatedDate)
      setIsEditing(false);
    };
  
    const handleDateChange = (e) => {
      setUpdatedDate(e.target.value);
    };
  

    
  
    return (
      <div className="row lead fw-bold">
        {users.map((user) => (
          <div key={user.id} className="m-3 p-3">
            Owner: {user.name}, Dog: {user.dogName}<br />
            Planning on going at: {user.date} {user.time} <br />
            My dog is <span className="fw-bold text-warning bg-dark">{user.friendly ? "NOT" : ""}</span> friendly.
            {isEditing && (
              <>
                <br />
                <label htmlFor="updatedDate">New Date & Time:</label>
                <input type="datetime-local" id="updatedDate" value={updatedDate} onChange={handleDateChange} />
                <br />
            
                <button type="button" onClick={() => handleSave(user)} className="btn btn-outline-primary m-1">Save</button>
              </>
            )}
            <br />
            <button type="button" onClick={handleEdit} className="btn btn-outline-primary m-1">{isEditing ? "Cancel" : "Edit Time"}</button>
            <button type="button" className="btn btn-danger m-1" onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    )
            };
  