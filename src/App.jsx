import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Student from "./component/Student"

function App() {

  return (
    <Router >
      <Routes>
        <Route path="/" element={<Student />}></Route>
      </Routes>
    </Router >
  )
}

export default App
