import './App.css';
import First from './components/basics/First'
import FirstWithParameters from './components/basics/FirstWithParameters'

function App() {
  return (
    <div className="App">
        <div className="ComponentContainer">
            <FirstWithParameters
                lastName="Silva"
                firstName="Igor"
            />
        </div>
        <div className="ComponentContainer">
            <First/>
        </div>
    </div>
  );
}

export default App;
