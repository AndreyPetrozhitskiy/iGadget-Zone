import authdata from "./Products/DataAuth"

import { createSlice } from '@reduxjs/toolkit'

const dataAuthSlice = createSlice(
  {
    name: 'oneBlockData',
    initialState: {
        authdataMassive: authdata,
    },
    reducers: {
        login: ( state, action) => {
        
        },
      // что-то пока хз
    }
    
  }
)

export const {login} = dataAuthSlice.actions

export default dataAuthSlice.reducer  






