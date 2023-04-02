// Import useState hook from React library
import { useState } from "react";

// Define Schedule component and pass down props
export default function Schedule({ users, deleteUser, updateUsers }) {
    // Define state hooks to store user input
    const [editingUserId, setEditingUserId] = useState(null);
    const [updatedDate, setUpdatedDate] = useState("");

    // Handle edit button click event
    const handleEdit = (userId) => {
        // Set the state to the current user's ID
        setEditingUserId(userId);
    };

    // Handle save button click event
    const handleSave = (user) => {
        // Create an updated user object with the new date
        const updatedUser = {
            id: user.id,
            name: user.name,
            dogName: user.dogName,
            date: document.getElementById('updatedDate').value, // Get the new date from the input field
            friendly: user.friendly,
        }
        // Call updateUsers function with the updated user object
        updateUsers(updatedUser);
        // Reset the editingUserId state to null to exit edit mode
        setEditingUserId(null);
    };

    // Handle date input change event
    const handleDateChange = (e) => {
        // Set the updatedDate state to the new date value
        setUpdatedDate(e.target.value);
    };

    // Format date string to a readable format
    const formatDate = (dateString) => {
        // Create a new date object from the date string
        const date = new Date(dateString);
        // If the date is in the past, return an empty string
        if (date < new Date()) {
            return "";
        }
        // Define the options for date formatting
        const options = {
            month: 'long',
            weekday: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        // Return the formatted date string
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    // Create a new date object for the current time
    const now = new Date();

    // Sort the users array by the difference between their date and the current time
    const sortedUsers = [...users].sort((a, b) => {
        const timeA = new Date(a.date).getTime();
        const timeB = new Date(b.date).getTime();
        const timeNow = Date.now();
        const diffA = Math.abs(timeA - timeNow);
        const diffB = Math.abs(timeB - timeNow);
        return diffA - diffB;
    });

    return (
        <div className="row ps-4">
            {/* This   part will used the sorted users, then the filter to show just users that have a time that has not passed. Then it will show the users whose time is nearest to now. */}
            {sortedUsers.filter(user => new Date(user.date) > now).map((user) => (
                <div key={user.id} >
                    {/* Then we format the date using the parameters we listed above in the options, and update based off the user id. */}
                    <span className="display-6 fw-bold"> {formatDate(editingUserId === user.id ? updatedDate : user.date)} </ span>< br />
                    <div className="fw-bold">{user.name}<br />
                        Bringing:  {user.dogName}</div>
                    My dog is <span className="fw-bold text-danger">{user.friendly ? "NOT" : ""} </span>dog friendly.
                    {/* The following will show the edit inputs only for the user.id selected.  */}
                    {editingUserId === user.id && (
                        <div className="shadow border border-1 border-dark rounded-3 p-2">
                            <label htmlFor="updatedDate">New Date & Time:</label>
                            <br />
                            <input type="datetime-local" id="updatedDate" value={updatedDate} onChange={handleDateChange} />
                            <br />
                            <button type="button" onClick={() => handleSave(user)} className="btn btn-primary m-1">Save</button>
                            <button type="button" onClick={() => setEditingUserId(null)} className="btn btn-secondary m-1">Cancel</button>
                        </div>
                    )}

                    <br />
                    <button type="button" onClick={() => handleEdit(user.id)} className="btn btn-outline-primary m-1 mt-3">Edit Time</button>
                    <button type="button" className="btn btn-danger m-1 mt-3" onClick={() => deleteUser(user.id)}>Delete</button>
                    <hr />
                </div>
            ))}
        </div>
    );
};
