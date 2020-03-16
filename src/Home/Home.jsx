import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import Navigation from '../Navigation/Navigation';
import Messages from '../Messages/Messages';
import './Home.css';

const URL = 'ws://localhost:3000/ws';
// var ws = new WebSocket("ws://localhost:3000/ws");
// WEBSOCKETS - transfers data through transmission control proticol (TCP)


// REDUX - mapStateToProps is a function that holds whole store state

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      ws: null,
    };

    // this.loadResponse = this.loadResponse.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount() {

    this.ws = new WebSocket(URL);

    this.ws.onopen = () => {
      console.log('is connected');
    }

    this.ws.onmessage = msg => {
      const message = JSON.parse(msg.data);
      // add to list of message
      this.setState(state => ({ messages: [message, ...state.messages]}));
    }
    this.ws.onclose = () => {
      // when its disconnected, reconnect
      this.setState({ ws: new WebSocket(URL)})
    }
  }

  submitMessage(messageString) {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { messages: messageString };

    const conn = new WebSocket(URL);
    conn.onmessage = function(e){ console.log(e.data); };
    conn.onopen = () => conn.send(JSON.stringify(message));
    this.setState(state => ({ messages : [message, ...state.messages] }));
  }
  // if(window.location.pathname == "/foodblog.html") {
  // 	var feed = new Instafeed({
  // 	  get: 'user',
  // 	  userId: 1665792495,
  // 	  target: 'foodpicture',
  // 	  accessToken: '1665792495.fa1fbde.80d35431a95843bdbd779a1ce9498694',
  // 	  resolution: 'standard_resolution',
  // 	  template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
  // 	  limit: '10',
  // 	  after: function() {
  // 		var el = document.getElementById('foodpicture');
  // 		if (el.classList) {
  // 			el.classList.add('show');
  // 		} else
  // 			el.className += ' ' + 'show';
  // 		}
  // 	});
  // 	feed.run();
  // }
  // this.setState( state => ({ messages: [message, ...state.messages ] } ))

  // async loadResponse() {
  //   const token = '1665792495.9a6fcf8.7f3773a120884ae190265dfd3829089d';
  //   let response =
  //       await fetch(`https://api.instagram.com/v1/bonappechubs/media/recent?access_token=${token}`);
  //   if (response.status === 200) {
  //     let json = await response.json(); // (3)
  //     console.log('hello');
  //     return json;
  //   }
  // }
  render() {
    //       <Navigation />
    const messages = [];
    Object.keys(this.state.messages).forEach((msg, index) => {
      messages.push(
        <p key={index}>
          <em>{this.state.messages[msg].messages}</em>
        </p>
      );
    })
    return (
      <div>
        <Messages
          ws={this.ws}
          submitMessage={this.submitMessage}
        />
        {messages}
      </div>
    );
  }
}

export default MyApp;
