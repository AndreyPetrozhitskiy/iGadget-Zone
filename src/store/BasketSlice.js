import dataBasket from "./Products/DataBasket"

import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice(
  {
    name: 'oneBlockData',
    initialState: {
      BasketMassive: dataBasket,
    },
    reducers: {
      newItem: (state, action) => {
        const { Model, Price,Photo,Key } = action.payload;
  
        // Добавление товара в корзину
        state.BasketMassive.push({
        Model,
        Price,
        Photo,
        Key,
        Count: 1,
        get countPrice() { return this.Price * this.Count; },
        });
  
        
      },
      
    }
    
  }
)

export const {newItem} = basketSlice.actions
export default basketSlice.reducer  

