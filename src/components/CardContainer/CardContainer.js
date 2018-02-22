import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expandHouse } from '../../actions/actions'
import Card from '../Card/Card'

export class CardContainer extends Component {

  cardElements = () => {
    const { houses, expandHouse } = this.props;
    return houses.map((house, index) => {
      return <Card house={house} key={index} expandHouse={expandHouse} />
    })
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
  expandHouse: house => dispatch(expandHouse(house))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
