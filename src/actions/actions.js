export const populateHouses = (houses) => ({
  type: 'POPULATE_HOUSES', 
  houses
});

export const expandHouse = (houseName, swornMembers) => ({
  type: 'EXPAND_HOUSE', 
  houseName, 
  swornMembers
});
