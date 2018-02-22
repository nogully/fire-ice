import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App.js';
import { CardContainer } from '../CardContainer/CardContainer'
import { shallow } from 'enzyme'

describe('App', () => {

  describe('what it looks like', () => {
    // beforeAll(() => {
    //   const mockHouses = [
    //     { name: "House Dayne of Starfall"}, 
    //     { name: "House Lannister of Casterly Rock"}
    //   ]
    //   let wrapper = shallow( <App houses={mockHouses} populateHouses={jest.fn()} /> )
    // })
    
    it('should match snapshot', () => {
      
      // expect(wrapper).toMatchSnapshot();
    })

  })
})