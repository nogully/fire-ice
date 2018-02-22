import React, { Component } from 'react';
import PropTypes, { shape, func, string, array } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { populateHouses } from '../../actions/actions';
import CardContainer from '../CardContainer/CardContainer'
import * as api from '../../apiCalls'

export class App extends Component {

  componentDidMount = async () => {
    const houseData = await api.resolveEndpoint('http://localhost:3001/api/v1/houses')
    this.props.populateHouses(houseData);
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          { this.props.houses.length ? 
            <CardContainer /> : 
            <img src={'./wolf.gif'} id='wolf' alt='wolf' />}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  houses: array.isRequired,
  populateHouses: func.isRequired
};

export const mapStateToProps = ({ houses }) => ({ houses });

export const mapDispatchToProps = dispatch => ({ 
  populateHouses: (houses) => dispatch(populateHouses(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
