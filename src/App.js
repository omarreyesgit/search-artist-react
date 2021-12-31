import "./App.css";
import SongForm from "./components/SongForm";

function App() {
  return (
    <div className="App">
      <div
        className="test"
        style={{ backgroundImage: "url('/img/concert.jpg')" }}
      >
        <div className="form-container">
          <SongForm />
        </div>
      </div>
    </div>
  );
}

export default App;
