import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartas: [
        {
            id: 'carta1',
            name: 'GOKU',
            attack: 15,
            health: 100,
            selected: false,
    
        },{
            id: 'carta2',
            name: 'VEGETA',
            attack: 15,
            health: 100,
            selected: false,
    
          }, {
            
            id: 'carta3',
            name: 'PICOLO PIZZA',
            attack: 15,
            health: 100,
            selected: false,
          }
    ]
}



export const cartasSlice = createSlice({

    name: "cartas",
    initialState,
    reducers: {
    
        seleccionar: (state, action) => {
            const id = action.payload;
            
            for (let i = 0; i < state.cartas.length ; i++) {

                if (state.cartas[i].id === id) state.cartas[i].selected = true;

              }
            
        },
        attack: (state, action)=>{

            const dmg = action.payload;
            console.log('el danho' + dmg)
            
            for (let i = 0; i < state.cartas.length ; i++) {

                if (state.cartas[i].selected === true) state.cartas[i].health = state.cartas[i].health - dmg;

              }
        }
    }
})

export const { seleccionar, attack } = cartasSlice.actions;

export default cartasSlice.reducer;
