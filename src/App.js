import './App.css';
import Header from "./components/Header/Header";
import ListComponent from "./components/ListComponent/ListComponent";
import MoveItem from "./components/MoveItem/MoveItem";
import WatchedMoveItem from "./components/WatchedMoveItem/WatchedMoveItem";
import WatchedMovisStatistics from "./components/WatchedMovisStatistics/WatchedMovesStatistics";

function App({tempMovieData,tempWatchedData}) {
    console.log(tempWatchedData)
    return (
        <div className="App">
            <Header/>
            <main>

                <ListComponent>
                    {
                        tempMovieData.map(item=>{
                              return <MoveItem key={item.id} item={item}/>
                        })
                    }
                </ListComponent>
                <ListComponent  bgc='#293134'>
                    <WatchedMovisStatistics
                        tempWatchedData={tempWatchedData}
                    />
                    {
                        tempWatchedData.map(item=>{
                            return<WatchedMoveItem
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
