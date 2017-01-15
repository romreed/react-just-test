import React, { Component } from 'react';





class About extends Component {

  constructor(props){
      super();
      this.state = ({
        id:''
      })
  }

  componentWillReceiveProps(nextProps) {
        const { messageId: prevId } = this.props.params;
        const { messageId: nextId } = nextProps.params;
        console.log(this.props.params);
        // if (prevId !== nextId) {
            this.setState({
                id: this.props.params.id
            });
        // }
    }

  render() {
    return (
      <div>
        Inboxs
        {this.state.id}
      </div>
    );
  }
}

export default About;
