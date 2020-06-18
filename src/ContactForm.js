import React from 'react'
import axios from 'axios'
import "./ContactForm.css"

import { Redirect } from 'react-router-dom';

export default class ContactForm extends React.Component {
    state = {
        name: "",
        email: "",
        phone: "",
        message: "",
        inputError: "",
        requestError: null,
        responseReceived: false
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value, inputError: "" });
    }
    handleEmailChange = (e) => {
        this.setState({ email: e.target.value, inputError: "" })
    }
    handlePhoneChange = (e) => {
        this.setState({ phone: e.target.value, inputError: "" });
    }
    handleMessageChange = (e) => {
        this.setState({ message: e.target.value, inputError: "" });
    }

    buildEmailBody = () => {
        const { name, phone, message } = this.state
        let emailBody = "";
        emailBody = `Contact Name: ${name}\nPhone: ${phone}\nMessage: ${message}`
        return emailBody;
    }

    validateUserInput() {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (this.state.name.length < 3) {
            this.setState({ inputError: "Name needs to be at least 3 characters long" })
            return false
        }
        if (!this.state.email.match(mailformat)) {
            this.setState({ inputError: "Invalid email address" })
            return false
        }
        if (this.state.phone.length !== 10) {
            this.setState({ inputError: "Phone needs to be 10 characters in length." })
            return false
        }

        if (this.state.message.length <= 0) {
            this.setState({ inputError: "Message is empty." })
            return false
        }
        return true
    }
    handleSubmit = async (e) => {
        e.preventDefault();

        console.log(this.state);
        if (!this.validateUserInput()) {
            return;
        }

        const { name, email, phone, message } = this.state
        let emailBody = this.buildEmailBody()
        console.log(emailBody)
        let params = {
            email,
            subject: "contact",
            text: emailBody,
            name,
            phone,
            message
        }

        axios.post('http://localhost:8080/contact/', params)
            .then(res => {
                console.log(res.data);
                this.setState({ responseReceived: true })
            }).catch(error => {
                console.log("error = ", error)
                this.setState({ requestError: error })
            })



    }
    render() {

        const reCapture_SITE_KEY = process.env.REACT_APP_RECAPTURE_SITE_KEY;
        return this.state.requestError ? (<Redirect to="/OrderSomethingWentWrong" />) :
            this.state.responseReceived ? (<Redirect to="/OrderSuccess" />) :
                (

                    <div className="contact-form-wrapper">


                        <div className="contact-form" autoComplete="off" style={{ display: this.props.navDisplay ? "none" : "block" }}>

                            <form>

                                <div className="input-container">
                                    <input onChange={this.handleNameChange} type="text" name="name" required autoComplete="off" />
                                    <label>Contact Name</label>
                                </div>
                                <div className="input-container">
                                    <input onChange={this.handleEmailChange} type="text" name="email" required autoComplete="off" />
                                    <label>Email</label>
                                </div>
                                <div className="input-container">
                                    <input onChange={this.handlePhoneChange} type="text" name="phone" required autoComplete="off" />
                                    <label>Phone</label>
                                </div>
                                <div className="input-textarea-container">
                                    <textarea onChange={this.handleMessageChange} name="message" placeholder="Leave a message" required autoComplete="off"></textarea>
                                </div>

                                <div>

                                    <label className="required">{this.state.inputError}</label>
                                </div>


                                <input onClick={this.handleSubmit} type="submit" value="Submit" className="submit-btn" />

                                {/* <div className="g-recaptcha" data-sitekey={reCapture_SITE_KEY}></div> */}

                            </form>
                        </div >
                    </div>
                )
    }
} 
