import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App.js';
import { shallow } from 'enzyme'

describe('App', () => {

  describe('what it looks like', () => {

    it('should match snapshot', () => {
      const wrapper = shallow( <App houses={[]} populateHouses={jest.fn()} />, 
        { disableLifeCycleMethods: true } )
      expect(wrapper).toMatchSnapshot();
    })

  })
})