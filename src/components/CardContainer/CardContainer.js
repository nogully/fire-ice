import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card'

export class CardContainer extends Component {

  cardElements = () => {
    console.log(this.props)
    const { houses } = this.props;
    return houses.map(house => {
      return <Card house={house} />
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
