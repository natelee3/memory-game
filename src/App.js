import MemoryCard from './components/MemoryCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Memory Game</h1>
        <h4 className="subtitle">Match Cards to Win</h4>
      </header>
      <div>
        <MemoryCard /><MemoryCard /><MemoryCard /><MemoryCard />
      </div>
      <div>
        <MemoryCard /><MemoryCard /><MemoryCard /><MemoryCard />
      </div>
      <div>
        <MemoryCard /><MemoryCard /><MemoryCard /><MemoryCard />
      </div>
      <div>
        <MemoryCard /><MemoryCard /><MemoryCard /><MemoryCard />
      </div>
    </div>
  );
}

export default App;
