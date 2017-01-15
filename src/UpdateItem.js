import React, { Component } from 'react';
import * as firebase from  'firebase';



class UpdateItem extends Component {
  constructor(props){
      super();
      this.state=({
        inputVal:''
      })
  }
  UpdateItem(item){
      console.log('update item',item.target.value);
      console.log('update value',this.state.inputVal);

      this.dbItems = firebase.database().ref().child('react');
      this.speedRef = this.dbItems.child('data');
      var data = {
        text : this.state.inputVal
      }
      this.speedRef.child(item.target.value).update(data);
      this.setState({
        inputVal:''
      })
  }
  inputVal(item){
    console.log('update item',item.target.value);
    var value = item.target.value;
    this.setState({
      inputVal:value
    })
  }
  render() {
    return(
      <div>
        <input type="text" onChange={this.inputVal.bind(this)} value={this.state.inputVal}/>
        <button onClick={this.UpdateItem.bind(this)} value={this.props.name.key}>Update
        </button>
      </div>
    )
  }
}
export default UpdateItem;
