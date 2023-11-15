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

const key = '3fb280c7'

function App({tempWatchedData}) {
    const [tempMovieData, setTempMovieData] = useState([])

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=interstellar`)
            .then(res => res.json())
            .then(data => setTempMovieData(data.Search))
    },[])

    // fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=interstellar`).then(res=>res.json()).then(data=> setTempMovieData(data.Search))

    return (
        <div className="App">
            <Header>
                <Logo/>
                <Search/>
                <NumResults numListMoves={tempMovieData.length}/>
            </Header>
            <main>
                <ListComponent>
                    {
                        tempMovieData.map(item => {
                            return <MoveItem key={item.imdbID} item={item}/>
                        })
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
