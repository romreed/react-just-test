import React, { Component } from 'react';

class NewForm extends Component{
    constructor(props){
        super();

        this.state = ({
            inputVal : '',
            array:[],
            variable : 15,


        });


    }

    componentDidMount(){
//        let firebaseRef = firebase.database().ref('test/variable');

        //firebaseRef.on('value',snap =>{
            this.setState({
                variable: ''
            });
       // });


    }



    componentWillUnmount() {
       // this.dbItems.off();
    }

    Change(event){
        let val = event.target.value;
        this.setState({
            inputVal :  val
        });
    }

    Submit(event) {
        event.preventDefault();
        let val = this.state.inputVal;

        this.setState({
            array : this.state.array.concat(val)
        });
        this.setState({
            inputVal :  ''
        })
    }

    render(){
        return (
            <div>
                NewFrom<br/>
                <form onSubmit={this.Submit.bind(this)}>
                    <input type="text" onChange={this.Change.bind(this)} value={this.state.inputVal} /><br/>
                    <button>Click</button>
                    <ul>{this.state.array.map(
                        function(el,ind){
                             return <li key={ind}>{el}</li>
                        }
                    )}</ul>
                </form>
                <h1>{this.state.variable}</h1>
            </div>
        );
    }
}

export default NewForm;