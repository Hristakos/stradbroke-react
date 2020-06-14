import React from 'react'
import axios from 'axios'
import "./OrderForm.css"
import productsBusiness from './lib/productsBusiness';
import productsPromotions from './lib/productsPromotions';
import productsTradies from './lib/productsTradies';
import productsSchools from './lib/productsSchools';
import { Redirect } from 'react-router-dom';
import SelectBox from './lib/select-box/SelectBox';


export default class OrderForm extends React.Component {
    getProducts = () => {
        if (this.props.products === "Business") {
            return productsBusiness;
        } else if (this.props.products === "Schools") {
            return productsSchools;
        } else if (this.props.products === "Tradies") {
            return productsTradies;
        } else if (this.props.products === "Promotions") {
            return productsPromotions;
        }

    }
    state = {
        company: "",
        name: "",
        email: "",
        phone: "",
        product: this.props.id,
        quantity: "",
        message: "",
        image: this.props.image,
        inputError: "",
        requestError: null,
        responseReceived: false,
        slectedExpanded: false,
        showItems: false,
        selectedItem: this.getProducts().find(product => product.id = this.props.id) || this.getProducts()[0]
    }
    handleCompanyChange = (e) => {
        this.setState({ company: e.target.value, inputError: "" });
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
    handleProductChange = (e) => {
        console.log(e.target.value)
        const product = this.getProducts()
            .find(product => product.id === e.target.value);
        console.log(product)
        this.setState({ product: e.target.value, inputError: "", image: product.img, selectItem: product });
    }
    handleQuantityChange = (e) => {
        this.setState({ quantity: e.target.value, inputError: "" });
    }
    handleMessageChange = (e) => {
        this.setState({ message: e.target.value, inputError: "" });
    }

    buildEmailBody = () => {
        const { company, name, phone, product, quantity, message } = this.state
        let emailBody = "";
        emailBody = `Company: ${company}\nContact Name: ${name}\nPhone: ${phone}\nProduct: ${product}\nQuantity: ${quantity}\nMessage: ${message}`
        return emailBody;
    }

    validateUserInput() {
        console.log("phone length ", this.state.phone.length)
        if (this.state.company.length < 3) {
            this.setState({ inputError: "Company name needs to be at least 3 characters long " })
            return false
        }
        if (this.state.name.length < 3) {
            this.setState({ inputError: "Name needs to be at least 3 characters long" })
            return false
        }
        if (this.state.email.length < 3) {
            this.setState({ inputError: "Email needs to be at least 3 characters long." })
            return false
        }
        if (this.state.phone.length !== 10) {
            this.setState({ inputError: "Phone needs to be 10 characters in length." })
            return false
        }
        if (this.state.product.length <= 0) {
            this.setState({ inputError: "Product needs to be selected" })
            return false
        }
        if (this.state.quantity.length <= 0) {
            this.setState({ inputError: "Quantity needs to be greater than zero." })
            return false
        }
        if (this.state.message.length <= 0) {
            this.setState({ inputError: "Message is empty." })
            return false
        }
        return true
    }

    dropDown = () => {
        this.setState({
            showItems: !this.state.showItems
        })
    }

    selectItem = item => this.setState({
        selectedItem: item,
        showItems: false,
        image: item.img

    })
    handleSubmit = async (e) => {
        e.preventDefault();

        console.log(this.state);
        if (!this.validateUserInput()) {
            return;
        }

        const { company, name, email, phone, product, quantity, message } = this.state
        let emailBody = this.buildEmailBody()
        console.log(emailBody)
        let params = {
            email,
            subject: "order",
            text: emailBody,
            company,
            name,
            phone,
            product,
            quantity,
            message
        }

        axios.post('http://localhost:8080/order', params)
            .then(res => {
                console.log(res.data);
                this.setState({ responseReceived: true })
            }).catch(error => {
                console.log("error = ", error)
                this.setState({ requestError: error })
            })



    }
    render() {
        console.log(this.state.image)
        const products = this.getProducts();
        // const reCapture_SITE_KEY = process.env.REACT_APP_RECAPTURE_SITE_KEY;
        return this.state.requestError ? (<Redirect to="/OrderSomethingWentWrong" />) :
            this.state.responseReceived ? (<Redirect to="/OrderSuccess" />) :
                (
                    <div className="order-form">

                        <form>
                            <div>

                                <img src={this.state.image} />
                            </div>
                            <div className="input-container">
                                <input onChange={this.handleCompanyChange} type="text" name="company" required autoFocus />
                                <label>Company Name</label>
                            </div>
                            <div className="input-container">
                                <input onChange={this.handleNameChange} type="text" name="name" required />
                                <label>Contact Name</label>
                            </div>
                            <div className="input-container">
                                <input onChange={this.handleEmailChange} type="text" name="email" required />
                                <label>Email</label>
                            </div>
                            <div className="input-container">
                                <input onChange={this.handlePhoneChange} type="text" name="phone" required />
                                <label>Phone</label>
                            </div>
                            <div className="input-select-container">

                                <SelectBox
                                    items={products}
                                    name="product"
                                    selectedItem={this.state.selectedItem}
                                    handleDropDown={this.dropDown}
                                    handleSelect={this.selectItem}
                                    showItems={this.state.showItems}
                                />

                            </div>
                            <div className="input-container">

                                <input onChange={this.handleQuantityChange} type="number" name="quantity" required />
                                <label>Quantity</label>
                            </div>
                            <div className="input-textarea-container">
                                <textarea onChange={this.handleMessageChange} name="message" placeholder="Leave a message" required></textarea>
                            </div>

                            <div>

                                <label className="required">{this.state.inputError}</label>
                            </div>


                            <input onClick={this.handleSubmit} type="submit" value="Submit" className="submit-btn" />

                            {/*




                            <div className="g-recaptcha" data-sitekey={reCapture_SITE_KEY}></div> */}

                        </form>
                    </div>
                )
    }
} 
