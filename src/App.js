import React from 'react';
import Navbar from './components/Navbar';
import Users from './pages/Users';
import Home from './pages/Home';
import Home from './pages/Movies';
import {
    BrowserRouter as Router,
    Switch,
    Route, Routes,
} from 'react-router-dom';

function App() {

    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="container">
                <Routes>
                    {/*요즘에는 이렇게 사용안하는데 일단 이렇게 해서 완강해봐 알려줄게 나중에
                      - 알겟숨미다*/}
                    <Route path="/movies" element={
                        <>
                            <Movies />
                        </>
                    }>
                    </Route>
                    <Route path="/users" element={
                        <>
                            <Users />
                        </>
                    }>
                    </Route>
                    <Route path="/" element={
                        <>
                            <Home />
                        </>
                    }>
                    </Route>

                </Routes>
                </div>
            </div>
        </Router>
    );
}


export default App;