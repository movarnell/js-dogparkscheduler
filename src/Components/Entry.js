// Importing the useState hook from the React library
import { useState } from "react";
import print from '../img/pawprint.png';

// Declaring and exporting the Entry component as the default export
export default function Entry({users, fetchUsers, createUser}) {
    
    // Logging the users prop value to the console for debugging
    console.log({users});

    // Using the useState hook to declare a state variable for the checkbox value
    const [isChecked, setIsChecked] = useState(false);

    // Function that handles the form submission
    const handleSubmit= (event) => {
        
        // Preventing the default form submission behavior that refreshes the page
        event.preventDefault();

        // Creating a new user object with the form field values
        const anotherUser = {
            name: document.getElementById('userName').value,
            dogName: document.getElementById('dogName').value,
            date: document.getElementById('appointDate').value,
            friendly: document.getElementById('flexCheckDefault').checked,
        }

        // Logging the new user object and the users prop value to the console for debugging
        console.log(anotherUser);  
        console.log(users)

        // Calling the createUser function with the new user object as an argument, 
        // and then calling fetchUsers function to update the users list after the new user is added
        createUser({...anotherUser}).then(console.log(users)).then(fetchUsers());
       
        document.getElementById('userName').value ="";
        document.getElementById('dogName').value = "";
        document.getElementById('appointDate').value = "";
        document.getElementById('flexCheckDefault').checked = false;
    }

    // Function that handles the checkbox value change
    function handleCheckboxChange(event) {
        setIsChecked(event.target.checked);
    }

    // Rendering the Entry component JSX with the form fields and the button
    return (
        <div className='col  border border-3 border-dark shadow rounded-3 textFormat formWidth mb-5'>
            <form onSubmit={handleSubmit} className='form p-3  m-4 '>

                <input type="text" id='userName'  placeholder='Your Name' className='form-control'></input><br />

                <input type="text" id="dogName"   placeholder="Your Dog's Name" className='form-control' /><br />
                <label type="datetime-local" >When are you planning on going?</label>
                <input type="datetime-local" id="appointDate"   className='form-contol mb-2' ></input> <br />
                <input className="form-check-input me-2" checked={isChecked}  onChange={handleCheckboxChange} type="checkbox" id="flexCheckDefault"></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    My dog is NOT "dog friendly".</label><br />

                <button type='submit' className='btn btn-primary p-2 mt-3'><img src={print} className="buttonIcon  ps-1 pe-1"></img>Submit</button>
            </form>
        </div>
    );
}
