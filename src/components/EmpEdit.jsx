import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const EmpEdit = () => {
  const {id} =useParams()
  // const [id, idChange] = useState();
  
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState();
  const [active, activeChange] = useState(true);
  

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://users-data-chrj.onrender.com/data/${id}`)
      .then((res) => {
       console.log(res.data)
      //  idChange(res.id)
       nameChange(res.data.name)
       phoneChange(res.data.phone)
       emailChange(res.data.email)
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    const body={}
    axios
      .put(`http://localhost:8000/students/${id}`,{name,email,phone}
      )
      .then((res) => {
        console.log(res.data);
        alert("Data updated Successfuly");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="conatiner">
    <div className="card">
      <form onSubmit={handleEdit}>
        <div className="card-title">
          <h1>Edit Employee Details</h1>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label>ID</label>
                <input
                  value={id}
                  disabled="disabled"
                  className="form-control"
                ></input>
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Name</label>
                <input 
                  value={name}
                  onChange={(e) => nameChange(e.target.value)}
                  className="form-control"
                ></input>
                { <span className="text-danger">Edit the Name</span>}
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Email</label>
                <input
                  value={email}
                  onChange={(e) => emailChange(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Phone</label>
                <input
                  value={phone}
                  onChange={(e) => phoneChange(e.target.value)}
                  className="form-control"
                  ></input>
                </div>
              </div>

              <div className="col">
                <div className="form-check">
                  <input
                    checked={active}
                    onChange={(e) => activeChange(e.target.checked)}
                    type="checkbox"
                    className="form-check-input"
                  ></input>
                  <label className="form-check-label">Is Active</label>
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <button className="btn btn-success" type="submit">
                    Save
                  </button>
                  <Link to="/" className="btn btn-danger">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmpEdit
