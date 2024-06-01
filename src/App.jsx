import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Student from "./component/Student"
import AddStudent from "./component/AddStudent"

function App() {

  return (
    <Router >
      <Routes>
        <Route path="/" element={<Student />}></Route>
        <Route path="/create-student" element={<AddStudent />}></Route>
      </Routes>
    </Router >
  )
}

export default App
