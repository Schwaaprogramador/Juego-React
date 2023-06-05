import React from 'react'
import styles from './Carta.module.css';
import { seleccionar, attack } from '../redux/cartasSlice';
import { useDispatch } from "react-redux";




export  function Carta ({id, name, attackprop, health, selected }) {


    const dispatch = useDispatch();


    const selectionar = () => {
        dispatch(seleccionar(id));
      };

      const attackdmg = () => {
        dispatch(attack(attackprop));
      };


  return (

    <div>

         <div className={styles.carta}>

            <p>Name: {name}</p>
            <p>Attack: {attackprop}</p>
            <p>Health: {health}</p>
            { selected ? <p> Seleccionado </p> : null }

            <div className={styles.botones}>

                <button onClick = { attackdmg }> Attack </button>

                <button onClick = { selectionar }> Select </button>

            </div>


            </div>
      
    </div>
  )
}


