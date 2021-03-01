import './App.css';
import PlayerBoard from './Components/PlayerBoard/PlayerBoard';
import { Button } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import backImage from '../src/backImage.jpg';

function App() {
  
  return (
    <div className="App"  style={{ backgroundImage: `url(${backImage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
      <PlayerBoard></PlayerBoard>
    </div>
  );
}

export default App;
