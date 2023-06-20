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
    ],
    seleccionados: [],
    error: '',
}



export const cartasSlice = createSlice({

    name: "cartas",
    initialState,
    reducers: {
    
        seleccionar: (state, action) => {

            const id = action.payload;
            
            for (let i = 0; i < state.cartas.length ; i++) {

                if (state.cartas[i].id === id) {
                    state.cartas[i].selected = true;
                    state.seleccionados.push(state.cartas[i])
                }
                
              }
            
        },

        attackSingle: (state, action)=>{

            const { attackprop } = action.payload;

            if(state.seleccionados.length > 1) {

                state.error = 'Solo un objetivo';
             }

            if(state.seleccionados.length  === 1){

                for (let i = 0; i < state.cartas.length ; i++) {
                    if(state.cartas[i].selected === true) {
                            state.cartas[i].health = state.cartas[i].health - attackprop;
                    }  
                  }
            }
                   
        }
    }
})




export const { seleccionar, attack } = cartasSlice.actions;

export default cartasSlice.reducer;
