import React from 'react';
import "./ProductDetail.css"


export default class ProductDetail extends React.Component {
    state = {
        modalDisplay: false
    }
    handleClick = (e) => {
        this.setState({ modalDisplay: true });
    }
    handleClose = (e) => {
        this.setState({ modalDisplay: false })
    }
    render() {
        return (
            <div>

                <div className="product-detail">
                    <img onClick={this.handleClick} src={this.props.img} />
                    <a href={`/Order?type=${this.props.type}&id=${this.props.id}`}>Order</a>
                </div>

                <div id="myModal" class="modal" style={{ display: this.state.modalDisplay ? "block" : "none" }}>
                    <span onClick={this.handleClose} class="close">&times;</span>
                    <img class="modal-content" id="img01" src={this.props.img} />
                    <div id="caption"></div>
                </div>
            </div>
        )
    }
}