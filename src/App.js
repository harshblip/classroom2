import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className = 'flex md:flex-row sm:flex-col'>
        <Sidebar />
        <Content />
    </div>
  );
}

export default App;
// #C9C9C9