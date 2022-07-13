import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navigation />
      <Homepage />
    </div>
  );
}

export default App;
