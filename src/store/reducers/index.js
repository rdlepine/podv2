
export function drivers(state = [], action) {
    switch(action.type) {      
        case c.GET_DRIVERS,
         
        default:
        return state;
    }
}

const rootReducer = combineReducers( {
    drivers,
})