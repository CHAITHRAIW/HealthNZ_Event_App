import './App.css';
import CreateEvent from './components/Event/CreateEvent';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Common/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/show-event" element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
