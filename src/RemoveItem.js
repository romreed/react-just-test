import React, { Component } from 'react';
import * as firebase from  'firebase';



class RemoveItem extends Component {
  constructor(props){
      super();
  }
  RemoveItem(item){
      console.log('item remove',item.target.value);
      this.dbItems = firebase.database().ref().child('react');
      this.speedRef = this.dbItems.child('data');
      this.speedRef.child(item.target.value).remove();
  }
  render() {
    return(
      <button onClick={this.RemoveItem.bind(this)} value={this.props.name.key}>Dell
      </button>
    )
  }
}
export default RemoveItem;
