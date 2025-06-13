import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectsDetail from './pages/ProjectsDetail';

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectsDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
