
import React from 'react';


// The component includes Smiley Icon, "Type a message" field and Send button


function MessageCompose(props) {
    return (
        <div className="message-compose">
            <div className="input-field">
                <div className="smiley">
                    <i className="zmdi zmdi-mood"></i>
                </div>

                <div className="message-type">
                    <span>Type a message</span>
                </div>

                <div className="camera-icon">
                    <i className="zmdi zmdi-camera"></i>
                </div>
            </div>

            <div className="send-button" onClick={props.onSend}>
                <i className="zmdi zmdi-mail-send"></i>
            </div>

        </div>
    );
}

export default MessageCompose;