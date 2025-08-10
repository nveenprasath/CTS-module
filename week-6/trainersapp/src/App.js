import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TrainerList from './TrainerList';
import TrainerDetails from './TrainerDetails';
import trainers from './TrainersMock';
import './App.css';
function App() {
    return (
        <BrowserRouter>
            <div>
                <h1> My Academy Trainers App</h1>
                <nav>
                    <Link to="/">Home</Link> | <Link to="/trainers">Show Trainers</Link>
                </nav>
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/trainers" element={<TrainerList trainers={trainers} />} />
                    <Route path="/trainer/:id" element={<TrainerDetails />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
