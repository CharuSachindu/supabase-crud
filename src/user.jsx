import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Users () {
    const [users, setUser] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3005')
        .then(result => setUser(result.data))
        .catch(err => console.log(err))
    },[])

const handleDelete = (id) => {
    axios.delete('http://localhost:3005/delete/'+id)
    .then(res => {console.log(res)
        window.location.reload()})
    .catch(err => console.log(err))
}

    return(
        <div>
            <div>
                <Link to='/create'>Add +</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map((user) => {
                        return <tr>
                            <td>{user.name}</td>
                            <td>{user.id}</td>
                            <td>{user.age}</td>
                            <td>
                            <Link to={`/update/${user.id}`}>Update</Link>
                            <button onClick={(e) => handleDelete(user.id)}>delete</button>
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Users;