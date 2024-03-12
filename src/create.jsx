import React, {useState} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Createuser () {
    const [name,setName] = useState()
    const [id,setId] = useState()
    const [age,setAge] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3005/create", {name,id,age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <div>
                <form action="" onSubmit={Submit}>
                    <label>Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)}></input>
                    <label>ID</label>
                    <input type="text" onChange={(e) => setId(e.target.value)}></input>
                    <label>Age</label>
                    <input type="text" onChange={(e) => setAge(e.target.value)}></input>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Createuser;