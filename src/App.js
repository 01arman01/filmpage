import './App.css';
import Header from "./components/Header/Header";
import ListComponent from "./components/ListComponent/ListComponent";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <ListComponent>

                </ListComponent>
                <ListComponent>

                </ListComponent>
            </main>
        </div>
    );
}

export default App;
