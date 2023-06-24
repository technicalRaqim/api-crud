import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const EmpListing = () => {
  const [empdata, setEmpdata] = useState(null);
 
  const navigate= useNavigate()

  const LoadEdit=(id)=>{
navigate(`/edit/${id}`)
  }
  const RemoveFunction= (id)=>{
    const conf= window.confirm('do you want to delete')
    if(conf){
  axios.delete(`http://localhost:8000/students/${id}`)
    .then((res) => {
      alert('Recod has been deleted')
      navigate("/")
      // setStatus(true)
      console.log("dbwyedbwebdwehfvewgf",res)
      // var resd = empdata.filter
      
    
    })
    .catch((err) => {
      console.log(err.message);
    });
  }
  }
  const LoadDetail=(id)=>{
    navigate(`/detail/${id}`)
  }
  useEffect(() => {
    axios.get("http://localhost:8000/students/")
      .then((res) => {
        console.log(res.data)
        setEmpdata(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

 
  return (
    <div className="conatiner">
      <div className="card">
        <div className="card-title">
          <h1>Employee Data</h1>
        </div>
        <div className="card-body">
          <div>
            <Link to="/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            {
              empdata?.length >0?<>
              <tbody>
              {empdata&&
                empdata?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a onClick={()=>{LoadEdit(item.id)}} className="btn btn-sm btn-success">Edit</a>
                      <a onClick={()=>{RemoveFunction(item.id)}} className="btn btn-sm btn-danger">Remove</a>
                      <a onClick={()=>{LoadDetail(item.id)}}className="btn btn-sm btn-primary">Details</a>
                    </td>
                  </tr>
                ))}
            </tbody>
              </>:<h1>No Data Found</h1>
            }
          </table>
        </div>
      </div>
    </div>
  );
};
export default EmpListing;
