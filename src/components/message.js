import React from 'react';


function Tick(props) {
    return (
        <div className="tick-container"><span className="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7" /></svg></span></div>
    )
}

function Message(props) {

    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }

    var ampm = "am";

    if (hr > 12) {
        hr -= 12;
        ampm = "pm";
    }
    var time = hr + ":" + min + " " + ampm;

    // For normal text message

    if (props.message.type === "text") {
        return (
            <div className="message clearfix">
                <div className={props.message.source}>
                    {props.message.message.split('\n').map((item, i) => { return <div className="spacer" key={i}>{item}</div> })}
                    <Tick />
                    <span className="time">{time}</span>
                </div>

            </div>
        )

    }

    // For PDF Messages

    if (props.message.type === "pdf") {
        return (
            <div className={props.message.source}>
                <div className="pdf">
                    <img className="pdf-icon" src="https://image.flaticon.com/icons/svg/179/179483.svg" alt="PDF-ICON"></img>
                    <div className="pdf-name">{props.message.message}</div>
                </div>
                <Tick />
                <span className="time">{time}</span>
            </div>
        )

    }

    // Fail Safe 
    return (
        <div className="message clearfix">
            <div className={props.message.source}>
                <div>{props.message.message}</div>
                <Tick />
                <span className="time">{time}</span>
            </div>

        </div>
    )

}

export default Message;