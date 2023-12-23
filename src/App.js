import React, {useState} from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route, Routes,
} from 'react-router-dom';

function App() {
    const [movies, setMovies] = useState([]);

    const removeMovie = (id) => {
        setMovies(movies.filter(movie => {
            return movie.id !== id;
        }));
    };

    const renderMovies = movies.length ? movies.map(movie => {
        return (
            <Movie
                movie={movie}
                key={movie.id}
                removeMovie={removeMovie}
            />
        );
    }) : '추가된 영화가 없습니다';
    const addMovie = (movie) => {
        setMovies([
            ...movies,
            movie
        ]);
    };
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Routes>
                    {/*요즘에는 이렇게 사용안하는데 일단 이렇게 해서 완강해봐 알려줄게 나중에
                      - 알겟숨미다*/}
                    <Route path="/movies" element={
                        <>
                            <h1> Movie list</h1>
                            <MovieForm addMovie={addMovie}/>
                            {renderMovies}
                        </>
                    }>
                    </Route>
                    <Route path="/users" element={
                        <>
                            <h1>Users</h1>
                        </>
                    }>
                    </Route>
                    <Route path="/" element={
                        <>
                            <h1>Home</h1>
                        </>
                    }>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}


export default App;