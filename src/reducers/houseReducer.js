import * as apiCalls from '../apiCalls'

export const houses = (state=[], action) => {
  switch (action.type) {
    case 'POPULATE_HOUSES': 
      return action.houses;
    case 'EXPAND_HOUSE': 
      const newState = state.map( house => {
        if (house.name === action.houseName) {
          house.swornMembers = await apiCalls.
          return house
        } else { 
          return house }
      })
      return newState;
    default:
      return state;
  }
};
