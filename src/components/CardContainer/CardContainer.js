import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expandHouse } from '../../actions/actions'
import Card from '../Card/Card'
import * as apiCalls from '../../apiCalls'

export class CardContainer extends Component {

  cardElements = () => {
    const { houses, expandHouse } = this.props;
    return houses.map((house, index) => {
      return <Card house={house} key={index} handleClick={this.handleClick} />
    })
  }
  
  handleClick = async (e) => {
    const {houses} = this.props;
    const { id } = e.target;
    const foundHouse = houses.find( house => house.name === id);
    const newMembers = await apiCalls.fetchSwornMembers(foundHouse);
    this.props.expandHouse(id, swornMembers)
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

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
