import axios from "axios";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
    const navigate = useNavigate()
    const[name, setName] = useState(null)
    const [email, setEmail]= useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email)
        axios.post("http://localhost:3000/create/student",{name, email}).then((result) => {
            console.log(result)
            if(result.status === 200){
                navigate("/")
            }
        }).catch((error) => {
            console.log(error)
        })
    }
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-white">
      <div className="shadow w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Student</h2>
          <div className="mb-3">
            <label className="form-label" htmlFor="">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              onChange={(e)=> {setName(e.target.value)}}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="">
              Email
            </label>
            <input type="email" placeholder="Enter email" className="form-control" 
            onChange={(e)=> {setEmail(e.target.value)}}
            />
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
