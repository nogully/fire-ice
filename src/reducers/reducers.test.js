import { houses } from './houseReducer'

describe('reducers', () => {
  describe('houses', () => {
    it('should return current value of house key by default', () => {
      const mockStore = [ {name: "House Corbray of Hearts Home" } ]
      const mockAction = {};
      expect(houses(mockStore, mockAction)).toEqual(mockStore)
    })

    it('should redefine the value of houses in the Redux store via POPULATE_HOUSES action', () => {
      const mockStore = []
      const mockAction = {
        type: 'POPULATE_HOUSES', 
        houses: [{name: "House Corbray of Hearts Home" }]
      };
      const expected = [ {name: "House Corbray of Hearts Home" } ]
      expect(houses(mockStore, mockAction)).toEqual(expected)
    })
  })
})