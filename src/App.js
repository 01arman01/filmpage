import './App.css';
import Header from "./components/Header/Header";
import ListComponent from "./components/ListComponent/ListComponent";
import MoveItem from "./components/MoveItem/MoveItem";
import WatchedMoveItem from "./components/WatchedMoveItem/WatchedMoveItem";
import WatchedMovisStatistics from "./components/WatchedMovisStatistics/WatchedMovesStatistics";
import {useState} from "react";

function App({tempMovieData, tempWatchedData}) {
    const [isOpenMoves, setIsOpenMoves] = useState(true)
    const [isOpenMovieUser, setIsOpenMovieUser] = useState(true)

    const onchangeMoves = () => {
        setIsOpenMoves(!isOpenMoves)
    }
    const onchangeUserMoveList = () => {
        setIsOpenMovieUser(!isOpenMovieUser)
    }

    return (
        <div className="App">
            <Header/>
            <main>

                <ListComponent
                    status={isOpenMoves}
                    onChange={onchangeMoves}
                >
                    {
                        tempMovieData.map(item => {
                            return <MoveItem key={item.id} item={item}/>
                        })
                    }
                </ListComponent>
                <ListComponent
                    onChange={onchangeUserMoveList}
                    status={isOpenMovieUser}
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
