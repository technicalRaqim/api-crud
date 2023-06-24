import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
const EmpDetail = () => {
  const {id}= useParams()
  console.log("hgdwyegfywefhwebfw",id)
  const[empdata, empdataChange]=useState([])
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState();
  useEffect(() => {
    axios.get(`http://localhost:8000/students/${id}`)
      .then((res) => {
        console.log(res.data)
        empdataChange(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    (empdata &&
    <div> 
    
      <h1>The Employee name is : {empdata.name} ({empdata.id}) </h1>
      <h3>Contact Details</h3>
    <h5>Email is :{empdata.email}</h5>
    <h5>Phone is :{empdata.phone}</h5>
    <Link className='btn btn-danger' to="/" >Back to EmpListing</Link>
     
    </div>
    )
  )
}

export default EmpDetail
