
import { combineReducers } from 'redux'
import * as c from '../actions/reduxActions'

export function employees(state = [], action) {
    switch(action.type) {      
        case c.GET_DRIVERS:
            return state
            
        default:
        return state;
    }
}

const rootReducer = combineReducers( {
    employees,
})

export default rootReducer