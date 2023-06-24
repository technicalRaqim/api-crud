import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const EmpCreate = () => {
  const [id, idChange] = useState();
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState();
  const [active, activeChange] = useState(true);

  const navigate = useNavigate();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {}
    axios
      .post("http://localhost:8000/students/",{
        name,email,phone,active
      })
      .then((res) => {
        console.log(res.data);
        alert("Data Added Successfuly");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="conatiner">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="card-title">
            <h1>New Employee Add</h1>
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
                  <input required
                    value={name}
                    onChange={(e) => nameChange(e.target.value)}
                    className="form-control"
                  ></input>
                  {name.length==0 && <span className="text-danger">Enter the Name</span>}
                </div>
              </div>

              <div className="col">
                <div className="form-group">
                  <label>Email</label>
                  <input required
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
  );
};

export default EmpCreate;
