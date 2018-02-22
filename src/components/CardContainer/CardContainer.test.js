import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from './CardContainer'

describe('CardContainer', () => {
  const mockHouses = [
        { name: "House Dayne of Starfall"}, 
        { name: "House Lannister of Casterly Rock"}
      ]

  it('should look like its snapshot', () => {
    const wrapper = shallow(<CardContainer houses={mockHouses}  />)
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    it('should define the value of houses prop for the CardContainer via Redux store', () => {
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


})