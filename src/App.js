import './App.css';
import Header from "./components/Header/Header";
import ListComponent from "./components/ListComponent/ListComponent";
import MoveItem from "./components/MoveItem/MoveItem";

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
                <ListComponent>

                </ListComponent>
            </main>
        </div>
    );
}

export default App;
