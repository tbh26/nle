import './App.css';
import NotesSteward from "./notes/NotesSteward";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h4><strong>N</strong>otes, <strong>L</strong>inks, <strong>E</strong>t cetera</h4>
            </header>
            <hr />
            <NotesSteward/>
        </div>
    );
}

export default App;
