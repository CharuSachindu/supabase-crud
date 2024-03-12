import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Createuser () {
    const {id} = useParams()
    const [name,setName] = useState()
    // const [id,setId] = useState()
    const [age,setAge] = useState()
    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get('http://localhost:3005/'+id)
        .then(result => {console.log(result)
            setName(result.data[0].name)
            setAge(result.data[0].age)
        })
        .catch(err => console.log(err))
    },[])

    const Update = (e) => {
        e.preventDefault()
        axios.put("http://localhost:3005/update/"+id, {name,age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <div>
                <form action="" onSubmit={Update}>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                    {/* <label>Id</label>
                    <input type="text"></input> */}
                    <label>Age</label>
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)}></input>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Createuser;