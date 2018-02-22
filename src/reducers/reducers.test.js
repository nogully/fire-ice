/* eslint-disable */
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

    it('should expand the value of houses in the Redux store via EXPAND_HOUSE action', () => {
      const mockStore = [ { name: "Christie's House of Badass" }]
      const mockAction = {
        type: 'EXPAND_HOUSE', 
        houseName: "Christie's House of Badass",
        swornMembers: [
          { name: "Jhun",
           status: "Died of why tho" }
        ]
      }
      const expected = [ { name: "Christie's House of Badass", 
                           swornMembers: [
                          { name: "Jhun",
                           status: "Died of why tho" }
                          ] }
                      ]
      expect(houses(mockStore, mockAction)).toEqual(expected)
    })

  })
})