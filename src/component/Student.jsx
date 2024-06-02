import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Student = () => {
  const [studentList, setStudentList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          setStudentList(result.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:3000/delete/student/" + id)
      .then((result) => {
        if (result.status === 200) {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-white">
      <div className="shadow w-50 bg-white rounded p-3">
        <Link to={"/create-student"} className="btn btn-success">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {studentList?.map((data, i) => {
              return (
                <>
                  <tr key={i}>
                    <th scope="row">{data.name}</th>
                    <td>{data.email}</td>
                    <td className="d-flex justify-content-between">
                      <Link
                        to={`/update-student/${data.id}`}
                        className="btn btn-primary"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
