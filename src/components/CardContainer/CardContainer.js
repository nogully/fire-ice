import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card'

export class CardContainer extends Component {

  cardElements = () => {
    const { houses } = this.props;
    return houses.map((house, index) => {
      return <Card house={house} key={index} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
