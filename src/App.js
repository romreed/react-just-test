import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



import NewForm from './NewForm';
import RemoveItem from './RemoveItem';
import UpdateItem from './UpdateItem';
import About from './About';
import Inbox from './Inbox';

import * as firebase from  'firebase';
import { Link } from 'react-router';

var config ={
 
};
firebase.initializeApp(config);




class App extends Component {

  constructor(props){
      super();
      this.state = {
          new:'',
          variable:55,
          test:0,
          array:[],
      };
      this.dbItems = firebase.database().ref().child('react');
      this.speedRef = this.dbItems.child('variable');

  }


    componentDidMount() {

        var  rootRef = firebase.database().ref().child('react');
        var  speedRef = rootRef.child('variable');

        speedRef.on('value', snap => {
            this.setState({
                test: snap.val()
            });
            this.setState({
                variable: snap.val()
            });
        });

        this.dbItems = firebase.database().ref().child('react');
        this.speedRef = this.dbItems.child('data');
        var needDo = [];
        this.speedRef.on('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            // console.log('key',childSnapshot.key);
            // console.log('val',childSnapshot.val());
            var item = {
              key : childSnapshot.key,
              text : childSnapshot.val().text
            }
            needDo = needDo.concat(item);
          });
          // console.log(needDo);
            this.setState({
                array: needDo
            });
        }.bind(this));


        this.dbItems = firebase.database().ref().child('react');
        this.speedRef = this.dbItems.child('data');
        speedRef.on('value', snap => {
            //console.log('data',snap.val());
            this.setState({
                test: snap.val()
            });
            this.setState({
                variable: snap.val()
            });
        });
    }

    componentWillUnmount() {
        this.dbItems.off();
    }


    btnClick(event){
      // console.log(event.target.value);
      var text = event.target.value;
      this.speedRef = this.dbItems.child('data');
      this.speedRef.push({
          text: text
      });
      this.setState({
              new :''
      })


    }

    h1Text(event){
      var newText = event.target.value;
      console.log('newText',newText);
      this.setState({
              new : newText
      });
    }

  render() {
    return (
      <div className="App">
        <div className="Links">
          <Link to="/about">About</Link>
          <Link to="/inbox">Inbox</Link>
        </div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="Content">
          {this.props.children}
        </div>
        <p>{this.props.text}</p>
        <button onClick={this.btnClick.bind(this)} value={this.state.new}>Add</button><br/>
        <input type="text" onChange={this.h1Text.bind(this)} value={this.state.new}/>
        <ul>
          {
            this.state.array.map(function(el,ind){
              return (
                <li key={ind}>{el.text}
                    <RemoveItem name={el}/>
                    <UpdateItem name={el}/>
                </li>
              )
            })
          }
        </ul>
        <h1>{this.state.new}</h1>
          <NewForm/>
          <h3>{this.state.variable}</h3>
          <h3>{this.state.test}</h3>
      </div>
    );
  }
}


App.propTypes={
  //new : React.PropTypes.string.isRequired,
}
export default App;
