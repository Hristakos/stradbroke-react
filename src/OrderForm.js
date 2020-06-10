import React from 'react'
import axios from 'axios'
import "./OrderForm.css"
import productsBusiness from './lib/productBusiness';

export default class OrderForm extends React.Component {
    state = {
        company: "",
        name: "",
        email: "",
        phone: "",
        product: "",
        quantity: "",
        message: ""
    }
    handleCompanyChange = (e) => {
        this.setState({ company: e.target.value });
    }
    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }
    handleEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }
    handlePhoneChange = (e) => {
        this.setState({ phone: e.target.value });
    }
    handleProductChange = (e) => {
        this.setState({ product: e.target.value });
    }
    handleQuantityChange = (e) => {
        this.setState({ quantity: e.target.value });
    }
    handleMessageChange = (e) => {
        this.setState({ message: e.target.value });
    }


    handleSubmit = async (e) => {
        console.log(this.state);
        e.preventDefault();

        const { email, subject, text } = this.state
        let params = {
            email,
            subject: "test",
            text: "text test"
        }

        let res = await axios.post('http://localhost:8080/email/', params);

        console.log(res.data);

    }
    render() {
        console.log(this.props.id)
        return (
            // <div>

            //     <h1>Order Form</h1>
            //     <form>
            //         <input onChange={this.handleEmailChange} type="email" placeholder="email" />
            //         <input onChange={this.handleSubjectChange} type="text" placeholder="Subject" />
            //         <textarea onChange={this.handleTextChange} type="text" placeholder="Enter order info" />
            //         <button onClick={this.handleSubmit}>Submit</button>
            //     </form>
            // </div>
            <div className="form-style-3">
                <form>
                    <fieldset>
                        <label htmlFor="company">
                            <span>Company<span className="required">*</span></span>
                            <input onChange={this.handleCompanyChange} type="text" className="input-field" name="company" />
                        </label>
                        <label htmlFor="name">
                            <span>Name <span className="required">*</span></span>
                            <input onChange={this.handleNameChange} type="text" className="input-field" name="name" />
                        </label>
                        <label htmlFor="email">
                            <span>Email <span className="required">*</span></span>
                            <input onChange={this.handleEmailChange} type="email" className="input-field" name="email" />
                        </label>
                        <label htmlFor="phone">
                            <span>Phone <span className="required">*</span></span>
                            <input onChange={this.handlePhoneChange} type="text" className="input-field" name="phone" />
                        </label>
                        <label htmlFor="product"><span>Product<span className="required">*</span></span>
                            <select onChange={this.handleProductChange} name="product" className="select-field" value={this.props.id}>
                                {productsBusiness.map(product => (
                                    <option key={product.id} value={product.id}>{product.name}</option>
                                ))}
                            </select>
                        </label>
                        <label htmlFor="quantity">
                            <span>Quantity <span className="required">*</span></span>
                            <input onChange={this.handleQuantityChange} type="number" className="input-field" name="quantity" />
                        </label>
                        <label htmlFor="message">
                            <span>Message <span className="required">*</span></span>
                            <textarea onChange={this.handleMessageChange} name="message" className="textarea-field"></textarea>
                        </label>
                        <label><span> </span><input onClick={this.handleSubmit} type="submit" value="Submit" /></label>
                    </fieldset>
                </form>
            </div>
        )
    }
} 
