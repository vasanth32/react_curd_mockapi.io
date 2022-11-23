import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route ,Link, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
       <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
          <div>
                <Link to="/create">create</Link> <br/>
          </div>
            <div style={{ marginTop: 20 }}>
                <Link to="/read">read</Link>
            </div>
            <div style={{ marginTop: 20 }}>
                <Link to="/update">update</Link>
            </div>
      </div>
      <Routes>
          <Route  exact path='/create' element={<Create/>} />
          <Route exact path='/read' element={<Read/>} />
          <Route path='/update' element={<Update/>} />
     
      </Routes>
    </Router>
  );
}

export default App;