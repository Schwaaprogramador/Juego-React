import styles from './App.module.css';
import { useDispatch, useSelector } from "react-redux";
import {Carta} from './Cartas/Carta';


function App() {

  const dispatch = useDispatch();
  const cartas = useSelector( state => state.cartasSlice);

  return (

    <div className={styles.container}>


     {cartas.cartas.map(carta => <Carta  id={carta.id}
                                  key={carta.id}
                                  name={carta.name}
                                  attackprop={carta.attack}
                                  health={carta.health}
                                  selected={carta.selected}
                                  />)}

      
    </div>
  )
}

export default App
