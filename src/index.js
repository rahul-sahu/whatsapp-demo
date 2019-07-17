import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Whatsapp from './Whatsapp';



// Client 

var client = {
    "name": "OnlineSales.ai",
    "displayPicture": "https://res.cloudinary.com/onlinesales/image/upload/w_32,f_auto,q_auto/logos/OnlineSales.ai_Logo.svg"
}

// The Message array 

var messages = [
    {
        "source": "receiver",
        "message": "Hello",
        "type": "text"
    },
    {
        "source": "sender",
        "message": `Thank your for showing interest in "Term Insurance". 

        Please reply with one of the below options -
        1 to "Get Quote" 
        2 to "Get List of Plans"
        3 to "Know Why you should have a Term Insurance"`,

        "type": "text"
    },

    {
        "source": "receiver",
        "message": "1",
        "type": "text"
    },

    {
        "source": "sender",
        "message": `Great! 

        How much should be the Sum Assured?
        Please reply with one of the option:
        
        1 for 0.5 Cr to 1 Cr
        2 for 1 Cr to 2 Cr
        3 for 2 Cr and above
        
        You can reply with "HELP" anytime more options`,
        "type": "text"
    },

    {
        "source": "receiver",
        "message": "2",
        "type": "text"
    },
    {
        "source": "sender",
        "message": `What is your Annual Income?

        Options - 
        1 for 5 Lacs to 10 Lacs
        2 for 10 Lacs to 20 Lacs
        3 for 20 Lacs and above`,
        "type": "text"

    },
    {
        "source": "receiver",
        "message": "2",
        "type": "text"
    },
    {
        "source": "sender",
        "message": `Enter Your Date for birth in MMDDYYYY format`,
        "type": "text"

    },
    {
        "source": "receiver",
        "message": "30041988",
        "type": "text"
    },
    {
        "source": "sender",
        "message": `Do you Smoke?
        Y for yes and N for no`,
        "type": "text"

    },
    {
        "source": "receiver",
        "message": "N",
        "type": "text"
    },
    {
        "source": "sender",
        "message": `Please reply with your first name and last name`,
        "type": "text"

    },
    {
        "source": "receiver",
        "message": "Devendra Sahu",
        "type": "text"
    },
    {
        "source": "sender",
        "message": `Do you wish to submit documents now?
         
        Y for yes N for no`,
        "type": "text"

    },
    {
        "source": "receiver",
        "message": "Y",
        "type": "text"
    },
    {
        "source": "sender",
        "message": `Ok Great. 
        Please reply to this message with your Last Payslip `,
        "type": "text"

    },
    {
        "source": "receiver",
        "message": "Payslip.pdf",
        "type": "pdf"
    },
    {
        "source": "sender",
        "message": `Thank You. We'll get back to you within 24 hours.`,
        "type": "text"
    }

]


ReactDOM.render(<Whatsapp messages={messages} client={client} />, document.getElementById('root'));

serviceWorker.unregister();
