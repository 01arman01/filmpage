import './App.css';
import Header from "./components/Header/Header";
import ListComponent from "./components/ListComponent/ListComponent";
import MoveItem from "./components/MoveItem/MoveItem";
import WatchedMoveItem from "./components/WatchedMoveItem/WatchedMoveItem";
import WatchedMovisStatistics from "./components/WatchedMovisStatistics/WatchedMovesStatistics";
import Logo from "./components/Header/Logo";
import Search from "./components/Header/Saerch";
import NumResults from "./components/Header/NumResults";
import {useEffect, useState} from "react";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import MovieDetails from "./components/MovieDetails/MovieDetails";

const key = '3fb280c7'


function App() {
    const [tempMovieData, setTempMovieData] = useState([])
    const [watched, setWatched] = useState([])

    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState('')
    const [query, setQuery] = useState('')
    const [selectedId, setSelectedId] = useState(null)

    const handleMovieSelect = (id) => {
        setSelectedId(id === selectedId ? null : id)
    }
    const handleCloseMove = () => {
        setSelectedId(null)
    }

    const handleAddWadchedMovie = (movie) => {
        setWatched(watched => [...watched, movie])
    }

    const handleDeletteWatchedMovie = (id) => {
        setWatched(moves => {
            return moves.filter(item => item.imdbID !== id)
        })
    }


    useEffect(
        function () {
            const controller = new AbortController();


            async function fetchMovies() {

                try {
                    setIsLoaded(true)
                    setError('')

                    const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=${query}`, {signal: controller.signal})
                    if (!res.ok) {
                        throw new Error('Something went wrong with fetching  movies')
                    }
                    const data = await res.json()
                    if (data.Response === 'False') {
                        throw new Error('Move not found')
                    }
                    setTempMovieData(data.Search)
                    setError("")
                    // setIsLoaded(false)
                } catch (err) {
                    console.error(err)
                    if (err.name !== "AbortError") {
                        setError(err.message)

                    }
                } finally {

                    setIsLoaded(false)
                }
            }

            if (query.length < 3) {
                setError('')
                setTempMovieData([])
                return;
            }
            handleCloseMove()
            fetchMovies()
            return function () {
                controller.abort()
            }
        }, [query]
    )

    useEffect(function () {
        function callBack(e) {
            if (e.code === "Escape") {
                handleCloseMove()
            }
        }

        document.addEventListener("keydown", callBack)

        return function () {
            document.removeEventListener('keydown', callBack)
        }
    }, [])


    return (
        <div className="App">
            <Header>
                <Logo/>
                <Search query={query} setQuery={setQuery}/>
                <NumResults numListMoves={tempMovieData.length}/>
            </Header>
            <main>
                <ListComponent>


                    {isLoaded && <Loader/>}
                    {!isLoaded && !error && tempMovieData.map(item => {

                        return <MoveItem key={item.imdbID} item={item} onSelectMovie={handleMovieSelect}/>
                    })}
                    {
                        error && <ErrorMessage message={error}/>
                    }

                </ListComponent>
                <ListComponent
                    bgc='#293134'>
                    {selectedId ?
                        <MovieDetails
                            selectedId={selectedId}
                            onCloseSelectedMove={handleCloseMove}
                            onAddWatchedMovie={handleAddWadchedMovie}
                            watched={watched}
                        /> :


                        <>
                            <WatchedMovisStatistics
                                watched={watched}
                            />
                            {
                                watched.map(item => {
                                    return <WatchedMoveItem
                                        key={item.id}
                                        item={item}
                                        onDeletteMovie={handleDeletteWatchedMovie}
                                    />
                                })
                            }
                        </>


                    }

                </ListComponent>
            </main>
        </div>
    );
}

export default App;
