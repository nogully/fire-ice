import * as actions from './actions.js'

describe('actions', () => {
  describe('populateHouses', () => {
    it('should create an action object with a payload of house data', () => {
      const mockHouses = [
        { name: "House Dayne of Starfall"}, 
        { name: "House Lannister of Casterly Rock"}
      ]
      const expected = {
        type: 'POPULATE_HOUSES', 
        houses: [
          { name: "House Dayne of Starfall"}, 
          { name: "House Lannister of Casterly Rock"}
        ]
      }
      const action = actions.populateHouses(mockHouses)
      expect(action).toEqual(expected)
    })
  })
})