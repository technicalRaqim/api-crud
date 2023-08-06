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
  axios.delete(`https://users-data-chrj.onrender.com/data/${id}`)
    .then((res) => {
      alert('Record has been deleted')
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
    axios.get("https://users-data-chrj.onrender.com/data")
      .then((res) => {
        console.log(res.data)
        setEmpdata(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

 
  return (
    <div>
    <Link  to ='/login/:id' className="btn btn-danger" >Login</Link>
    <Link to='/signup/:id'className="btn btn-success bg-green">Sign Up</Link>
    
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
                <td><strong>Id</strong></td>
                <td><strong>Name</strong></td>
                <td><strong>Email</strong></td>
                <td><strong>Phone</strong></td>
                <td><strong>Action</strong></td>
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
    </div>
  );
};
export default EmpListing;
