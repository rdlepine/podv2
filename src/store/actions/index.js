import * as api from '../utils/api';
import * as c from './storeActions.js';

export function postsHasErrors(bool) {
     return {
        type: c.POSTS_IS_ERRORED,
        hasErrored: bool
    };
}

export function getDrivers() {
     return (dispatch) => {
        api.getDrivers()
         .then((drivers) =>  { 
              dispatch(setDriverList(drivers))
          })
          .catch((err) => {
              dispatch(postsHasErrors(true))
           });
  };
}

export function setDriverList(drivers) {
    return {
       type: c.GET_DRIVERS,
       drivers: drivers
   };
}

