import authdata from "./Products/DataAuth"

import { createSlice } from '@reduxjs/toolkit'

const dataAuthSlice = createSlice(
  {
    name: 'oneBlockData',
    initialState: {
        authdataMassive: authdata,
    },
    reducers: {

      // что-то пока хз
    }
    
  }
)

export const {} = dataAuthSlice.actions
export default dataAuthSlice.reducer  






