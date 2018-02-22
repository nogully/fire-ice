import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expandHouse } from '../../actions/actions';
import Card from '../Card/Card';
import * as apiCalls from '../../apiCalls';
import { func, array } from 'prop-types';

export class CardContainer extends Component {

  cardElements = () => {
    const { houses } = this.props;
    return houses.map((house, index) => {
      return <Card house={house} key={index} handleClick={this.handleClick} />;
    });
  };
  
  handleClick = async (event) => {
    const { houses } = this.props;
    const { id } = event.target;
    const foundHouse = houses.filter(house => house.name === id);
    const newMembers = await apiCalls.fetchSwornMembers(foundHouse);
    this.props.expandHouse(id, newMembers);
  }

  render() {
    return (
      <div className="Container"> 
        { this.cardElements() } 
      </div>
    )
  }
}

export const mapStateToProps = ({ houses }) => ({ houses });

export const mapDispatchToProps = dispatch => ({ 
  expandHouse: (houseName, swornMembers) => dispatch(expandHouse(houseName, swornMembers))
});

CardContainer.propTypes = {
  houses: array.isRequired,
  expandHouse: func
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
