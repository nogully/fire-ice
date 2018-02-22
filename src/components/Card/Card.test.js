import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card'

describe('Card', () => {
  const mockHouse = { name: "House Dayne of Starfall", 
                      swornMembers: []}

  it('should look like its snapshot', () => {
    const wrapper = shallow(<Card house={mockHouse} />)
    expect(wrapper).toMatchSnapshot();
  })
})