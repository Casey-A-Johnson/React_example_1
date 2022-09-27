import './App.css';
import Layout from './views/Layout';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div className="main">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/About"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/Portfolio"
          element={
            <Layout>
              <Portfolio />
            </Layout>
          }
        />
        <Route
          path="/Contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/Resume"
          element={
            <Layout>
              <Resume />
            </Layout>
          }
        />
      </Routes>
      ;
    </div>
  );
}

export default App;
