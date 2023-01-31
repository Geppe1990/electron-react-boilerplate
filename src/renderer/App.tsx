import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './App.css';
import Main from './components/Main/Main';

const Index = () => {
  return (
    <div className="container-fluid">
      <h1 className="title has-text-white">Photomanager</h1>
      <Main />
    </div>
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
