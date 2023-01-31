import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

const Index = () => {
  return (
    <>
      <Header />
      <div className="is-flex is-flex-direction-column is-justify-content-center is-fullheight">
        <div className="section">
          <div className="container-fluid">
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}
