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

const key = '3fb280c7'
// const query = 'interstellar'
// const query = 'interstellar'

function App({tempWatchedData}) {
    const [tempMovieData, setTempMovieData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState('')
    const [query, setQuery] = useState('')

    useEffect(
        function () {
            async function fetchMovies() {
                console.log(query)
                try {
                    setIsLoaded(true)
                    setError('')

                    const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=${query}`)
                    if (!res.ok) {
                        throw new Error('Something went wrong with fetching  movies')
                    }
                    const data = await res.json()
                    console.log(data)
                    if (data.Response === 'False') {
                        throw new Error('Move not found')
                    }
                    setTempMovieData(data.Search)
                    console.log(data)
                    // setIsLoaded(false)
                } catch (err) {
                    console.error(err)
                    setError(err.message)
                } finally {

                    setIsLoaded(false)
                }
            }

            if(query.length < 3){
                setError('')
                setTempMovieData([])
                return;
            }

            fetchMovies()
        }, [query]
    )
    // fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=interstellar`).then(res=>res.json()).then(data=> setTempMovieData(data.Search))

    return (
        <div className="App">
            <Header>
                <Logo/>
                <Search query={query} setQuery={setQuery}/>
                <NumResults numListMoves={tempMovieData.length}/>
            </Header>
            <main>
                <ListComponent>
                    {/* {isLoaded? <Loader/> : <div>*/}
                    {/*    {*/}
                    {/*        tempMovieData.map(item => {*/}
                    {/*            return <MoveItem key={item.imdbID} item={item}/>*/}
                    {/*        })*/}
                    {/*    }*/}
                    {/*</div>}*/}

                    {isLoaded && <Loader/>}
                    {!isLoaded && !error && tempMovieData.map(item => {
                        return <MoveItem key={item.imdbID} item={item}/>
                    })}
                    {
                        error && <ErrorMessage message={error}/>
                    }

                </ListComponent>
                <ListComponent
                    bgc='#293134'>
                    <WatchedMovisStatistics
                        tempWatchedData={tempWatchedData}
                    />
                    {
                        tempWatchedData.map(item => {
                            return <WatchedMoveItem
                                key={item.id}
                                item={item}
                            />
                        })
                    }

                </ListComponent>
            </main>
        </div>
    );
}

export default App;
