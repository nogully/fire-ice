import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { populateHouses } from '../../actions/actions';
import * as api from '../../apiCalls'
class App extends Component {

  componentDidMount = async () => {
    const houseData = await api.resolveEndpoint('http://localhost:3001/api/v1/houses')
    this.props.populateHouses(houseData)
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  populateHouses: func.isRequired
};

const mapStateToProps = ({ houses }) => ({ houses });
const mapDispatchToProps = dispatch => ({ 
  populateHouses: (houses) => dispatch(populateHouses(houses))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
