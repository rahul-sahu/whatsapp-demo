import React, { Component } from 'react';
import './Whatsapp.css';
import TopBar from './components/topbar';
import ChatContainer from './components/chatcontainer';

// Structure of the Whatsapp Component

//     Whatsapp
//        ↳TopBar
//            ↳BackIcon
//            ↳Profile Picture
//            ↳Display Name
//            ↳More Setting Icon
//        ↳ChatContainer
//            ↳TextContainer
//                ↳Messages
//            ↳Message Compose
//                ↳Smiley Icon
//                ↳Type a message Field
//                ↳Camera Icon
//                ↳Send Button

class Whatsapp extends Component {
    constructor(props) {
        super(props)
        this.state = { messages: [] }
    }

    componentDidMount() {
        for (let i = 0; i < this.props.messages.length; i++) {
            setTimeout(() => {
                var messages = this.state.messages.concat(this.props.messages[i]);
                this.setState({ messages });

            }, i * 1500);
        }

    }


    render() {
        return (
            <div className="phoneMockup">
                <div className="container">
                    <TopBar client={this.props.client} />
                    <ChatContainer messages={this.state.messages} />
                </div>
            </div>
        );

    }
}

export default Whatsapp;