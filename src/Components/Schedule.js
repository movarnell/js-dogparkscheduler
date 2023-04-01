



export default function Schedule({users, deleteUser}) {
console.log('Schedule ran');

console.log(users)
    return (
        <div className="row lead fw-bold">
            {users.map(users => (
                <div key={users.id} className="m-3 p-3">
                    Owner: {users.name}, Dog: {users.dogName}<br />
                    Planning on going at: {users.date} {users.time} 
                    <button type="button" className="btn btn-danger" onClick={() => deleteUser(users.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}