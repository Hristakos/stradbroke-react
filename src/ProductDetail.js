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
                    <div className="product-name">{this.props.name}</div>
                    <img onClick={this.handleClick} src={this.props.img} />
                    <a href={`/Order?type=${this.props.type}&id=${this.props.id}&image=${this.props.img}`}><div className="order-link">Order</div></a>
                </div>

                <div id="myModal" className="modal" style={{ display: this.state.modalDisplay ? "block" : "none" }}>
                    <span onClick={this.handleClose} className="close">&times;</span>
                    <img className="modal-content" id="img01" src={this.props.img} />
                    <div id="caption"></div>
                </div>
            </div>
        )
    }
}