export const populateHouses = (houses) => ({
  type: 'POPULATE_HOUSES', 
  houses
});

export const expandHouse = (houseName) => {
  type: 'EXPAND_HOUSE', 
  houseName
}
