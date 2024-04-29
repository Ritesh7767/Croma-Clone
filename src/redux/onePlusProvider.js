import onePlus from '../../Data/OnePlus'
import {createSlice} from '@reduxjs/toolkit'

const initialState = onePlus

let OnePlusSlice = createSlice({
    name : 'onePlus',
    initialState,
    reducers : {
        GET_DATA(state, action){
            return action.payload
        }
    }
})

console.log(OnePlusSlice)

export const {} = OnePlusSlice.actions
export default OnePlusSlice.reducer