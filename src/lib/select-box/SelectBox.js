import React from 'react';
import "./SelectBox.css"

function SelectBox(props) {
    // state = {
    //     name: props.name,
    //     items: props.items || [],
    //     showItems: false,
    //     selectedItem: props.defaultValue ? props.defaultValue : props.items[0],
    // }
    // dropDown = () => {
    //     this.setState({
    //         showItems: !this.state.showItems
    //     })
    // }

    // selectItem = item => this.setState({
    //     selectedItem: item,
    //     showItems: false

    // })
    // render() {
    return <div className="select-box-box"
        style={{ marginBottom: props.showItems ? props.items.length * 30 : "25px" }}>

        <div
            className="select-box-container"
            onClick={props.handleDropDown}>
            <div className="select-box-selected">
                <label>Product</label>
                <div className="select-box-selected-item">
                    {props.selectedItem ? props.selectedItem.name : "nothing selected"}

                </div>

                <div
                    className="select-box-arrow"
                    onClick={props.handleDropDown}>
                    <span
                        className={`${props.showItems ? "select-box-arrow-up" : "select-box-arrow-down"}`}
                    />
                    <div
                    >

                    </div>
                </div>
            </div>
            <div
                style={{ display: props.showItems ? "block" : "none" }}
                className="select-box-items"
            >

                {
                    props.items.map((item, index) =>
                        <div key={index}
                            onClick={() => props.handleSelect(item)}
                            className={props.selectedItem === item ? "selected" : ""}>
                            {item.name}

                        </div>)
                }
            </div>
        </div>
        <input
            type="hidden"
            value={props.selectedItem.name}
            name={props.name}
        />
    </div >

}
// }

export default SelectBox