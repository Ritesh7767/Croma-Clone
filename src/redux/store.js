import { configureStore } from "@reduxjs/toolkit";
import onePlusReducer from './onePlusProvider'

const store = configureStore({
    reducer : {
        onePlusReducer,
    }
})

console.log(store)
console.log(store.getState())

export default store