
import { createSlice } from "@reduxjs/toolkit"; 



const chatslicer = createSlice({  
     name : "slice1",  
     initialState: {showBot:false}, 
     reducers:{   
        setShowbot:(state)=>{  
            state.showBot = !(state.showBot) ;   
        },  
     }
})

export default chatslicer.reducer; 


export const {setShowbot} = chatslicer.actions;
