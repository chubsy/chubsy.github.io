import React, { Component } from "react";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.submitMessage(this.state.message);
    this.setState({ message: '' });
  }

  render() {
    //       <Navigation />
    return (
      <form
        action="."
        onSubmit={this.onSubmit}
      >
      <input
        type="text"
        placeholder={'Enter message...'}
        value={this.state.message}
        onChange={e => this.setState({ message: e.target.value })}
      />
      <input type="submit" value={'Send'} />
    </form>
    );
  }
}

export default Messages;
