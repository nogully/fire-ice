/* eslint-disable */
import * as actions from './actions.js';

describe('actions', () => {
  describe('populateHouses', () => {
    it('should create an action object with a payload of house data', () => {
      const mockHouses = [
        { name: "House Dayne of Starfall"}, 
        { name: "House Lannister of Casterly Rock"}
      ];
      const expected = {
        type: 'POPULATE_HOUSES', 
        houses: [
          { name: "House Dayne of Starfall"}, 
          { name: "House Lannister of Casterly Rock"}
        ]
      };
      const action = actions.populateHouses(mockHouses)
      expect(action).toEqual(expected);
    })
  })

  describe('expandHouse', () => {
    it('should create an action object with a payload of houseName and swornMembers', () => {
      const mockHouseName = "Christie's House of Badass"
      const mockMembers = [
          'Jhun',
          'Will'
        ]
      const expected = {
        type: 'EXPAND_HOUSE', 
        houseName: "Christie's House of Badass",
        swornMembers: [
          'Jhun',
          'Will'
        ]
      }
      const action = actions.expandHouse(mockHouseName, mockMembers)
      expect(action).toEqual(expected)
    })
  })
})