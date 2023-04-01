import { deleteUser } from "./API"

export default function Schedule(users) {

    return (
        <div className="row lead fw-bold">
            {users.map(user => (
                <div key={user.id} className="m-3 p-3">
                    Owner: {user.name}, Dog: {user.dogName}<br />
                    Planning on going at: {user.date} {user.time} <button type="button" className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}