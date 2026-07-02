import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Home from './pages/home/homelink.jsx';
import About from './pages/about/aboutlink.jsx';
import Leader from './pages/leader/leaderlink.jsx';
import Todler from './pages/todler/todlerlink.jsx';
import Primary from './pages/primary/primarylink.jsx';
import Elementary from './pages/elementary/elementarylink.jsx';
import Video from './pages/video/videolink.jsx';
import Picture from './pages/picture/picturelink.jsx';
import Admission from './pages/admission/admissionlink.jsx';
import Bloglink from './pages/blog/bloglink.jsx';
import Contactlink from './pages/contact/contactlink.jsx';


function App() {
  return (
    <Router>
      <div style={{ margin: 0, padding: 0, width: "100vw", overflowX: "hidden", position: "relative" }}>
        <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Leader" element={<Leader />} />
          <Route path="/Todler" element={<Todler />} />
          <Route path="/Elementary" element={<Elementary />} />
          <Route path="/Primary" element={<Primary />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/Picture" element={<Picture />} />
          <Route path="/Admission" element={<Admission />} />
          <Route path="/Blog" element={<Bloglink />} />
          <Route path="/Contact" element={<Contactlink />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
