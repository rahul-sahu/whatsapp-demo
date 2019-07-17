import React, { Component } from 'react';
import Message from './message';
import MessageCompose from './messagecompose';



class ChatContainer extends Component {

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }


    render() {

        return (
            <div className="chat-container">
                <div className="text-container">
                    {
                        this.props.messages.map((m, i) => {
                            return <Message key={i} message={m} />

                        })
                    }
                    <div style={{ float: "left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}></div>
                </div>


                <MessageCompose />


            </div>
        );

    }

}

export default ChatContainer;