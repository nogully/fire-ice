import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App.js';
import { CardContainer } from '../CardContainer/CardContainer'
import { shallow } from 'enzyme'

describe('App', () => {

  describe('what it looks like', () => {
    beforeAll(() => {
      const mockHouses = [
        { name: "House Dayne of Starfall"}, 
        { name: "House Lannister of Casterly Rock"}
      ]
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve( {
          status: 200, 
          json: () => { Promise.resolve( mockHouses )}
        })
      })
    })

    it('should match snapshot', () => {
      const mockHouses = [
        { name: "House Dayne of Starfall"}, 
        { name: "House Lannister of Casterly Rock"}
      ]
      const wrapper = shallow( <App houses={mockHouses} populateHouses={jest.fn()} /> )
      expect(wrapper).toMatchSnapshot();
    })
  })

  describe('mapStateToProps', () => {
    it('should define value of houses prop for the App container via Redux store', () => {
      const mockStore = { houses: [
              { name: "House Dayne of Starfall"}, 
              { name: "House Lannister of Casterly Rock"}
            ]}
      const expected = { houses: [
        { name: "House Dayne of Starfall"}, 
        { name: "House Lannister of Casterly Rock"}
      ]}
      const mapped = mapStateToProps(mockStore)
      expect(mapped).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call the Redux method dispatch in order to send a populateHouses action to update the store', () => {
      const mockHouses = [
        { name: "House Dayne of Starfall"}, 
        { name: "House Lannister of Casterly Rock"}
      ]
      const mockDispatch = jest.fn()
      const mapped = mapDispatchToProps(mockDispatch)
      mapped.populateHouses(mockHouses);
      expect(mockDispatch).toHaveBeenCalled()
    })
  })
})