import { useState } from "react";



export default function Entry({users, fetchUsers, createUser}) {
console.log({users});

const[isChecked, setIsChecked] = useState(false);


const handleSubmit= (event) => {
        // event.preventDefault stops the double run issue. 
        event.preventDefault();
       const anotherUser ={
        name: document.getElementById('userName').value,
        dogName: document.getElementById('dogName').value,
        date: document.getElementById('appointDate').value,
        friendly: document.getElementById('flexCheckDefault').checked,
       }

       console.log(anotherUser);  
       console.log(users)
        createUser({...anotherUser}).then(console.log(users)).then(fetchUsers());
       
}

function handleCheckboxChange(event) {
        setIsChecked(event.target.checked);
      }

        return (
                <div className='col-lg-6 col-md-12 col-sm-12 m-5  border border-3 border-dark shadow rounded-3 textFormat formWidth'>
                    <form  onSubmit={handleSubmit} className='form p-3 m-2 '>
        
                        {/* Name input */}
                        <input type="text" id='userName'  placeholder='Your Name' className='m-2'></input><br />
        
                        {/* Dog name input */}
                        <input type="text" id="dogName"   placeholder="Your Dog's Name" className='form-control m-2' /><br />
        
                        {/* Date input */}
                        <input type="datetime-local" id="appointDate"   className='form-contol m-2' ></input> <br />
        
        
                        {/* Checkbox input */}
                        <input className="form-check-input" checked={isChecked}  onChange={handleCheckboxChange} type="checkbox" id="flexCheckDefault"></input>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            My dog is not dog friendly</label><br />
        
                        {/* Submit button */}
                        <button type='submit' className='btn btn-secondary p-2 mt-3'>Submit</button>
                    </form>
                </div>
            )

}