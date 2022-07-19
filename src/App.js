import logo from './logo.svg';
import './App.css';
import Me from './Me';
import Vandam from './Van_Dam.jpg';

function App() {
  return (
   <div>
   <Me name="Mko"  src="Mko.jpg"/>
   <Me name="Xoren"  src="Xoren.jpg"/>
   <Me name="Jolie"  src="Jolie.jpg"/>
   <Me name="Van Dam"  src={Vandam}/>
   <Me name="Brad Pitt"  src="brad-pitt.jpg"/>
   </div>
  );
}

export default App;