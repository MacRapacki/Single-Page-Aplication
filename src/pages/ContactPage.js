import React, { useState, } from 'react';
import '../style/ContactPage.css';
import { Prompt } from 'react-router-dom';

const ContactPage = () => {

    const [text, setText] = useState("")

    const handleTextArea = (event) => {
        setText(event.target.value)
    }

    const handleSubmitBtn = (e) => {
        e.preventDefault();
        setText("")
    }


    return (
        <>
            <form action="submit">
                <p className="contactTitle">Contact us</p>
                <textarea
                    className="textField"
                    placeholder="type a message..."
                    onChange={handleTextArea}
                    value={text}>
                </textarea>
                <button
                    type="submit"
                    className="submitBtn"
                    onClick={handleSubmitBtn}
                >SEND</button>
            </form>
            <Prompt
                when={text}
                message="are You sure?"
            />
        </>
    );
}

export default ContactPage;