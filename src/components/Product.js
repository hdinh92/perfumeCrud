import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Link } from 'react-router-dom'
import ReviewProductModal from '../pages/ReviewProductModal';

class Product extends Component {
    state = {
        show: false,
        isDisplayModal: false
    }

     format_curency = (price) => {
       return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    render() {
        var { product, index } = this.props
        var statusClass = product.status ? 'text-success font-weight-bold' : 'text-danger font-weight-bold'
        var statusName = product.status ? 'Còn hàng' : 'Hết hàng'
        return (
            <React.Fragment>
                <tr>
                    <th scope="row">{index + 1} 
                    <ReviewProductModal onShowModal={this.state.isDisplayModal}
                    onCloseModal={this.onCloseModal}
                    product={product}
                />
                    </th>
                    <td>{product.name}</td>
                    <td>{product.code}</td>
                    <td className='text-center' >
                        <span className={statusClass}>{statusName}</span>
                    </td>
                    <td className='text-center'>
                        <span className='text-danger font-weight-bold'>{this.format_curency(product.price)} VNĐ</span>
                    </td>
                    <td>
                        <Link
                            to={{
                                pathname: `product/${product.id}/edit`,
                            }}
                            className="btn btn-outline-primary itembutton"
                            data-toggle="tooltip" data-placement="top" title="Sửa">
                            <i className="material-icons">create</i>
                        </Link>

                        <button
                            onClick={this.onToggleModal}
                            className="btn btn-outline-primary itembutton"
                            data-toggle="tooltip" data-placement="top" title="Xem">
                            <i className="material-icons"> remove_red_eye</i>
                        </button>

                        <button onClick={() => this.setState({ show: true })}
                            className="btn btn-outline-primary itembutton"
                            data-toggle="tooltip" data-placement="top" title="Xóa">
                            <i className="material-icons">clear</i>
                        </button>
                        <SweetAlert
                            show={this.state.show}
                            warning
                            showCancel
                            confirmBtnText="Vâng! Tôi đồng ý "
                            confirmBtnBsStyle="danger"
                            cancelBtnBsStyle="info"
                            title= {`Bạn đang xóa sản phẩm  ${product.name}`}
                            onConfirm={() => this.onDelete(product.id)}
                            onCancel={() => {
                                this.setState({ show: false });
                            }}
                        >
                            Bạn có thật sự muốn xóa ?
                    </SweetAlert>
                    
                    </td>
                </tr>
                <tr>
                   
               
                </tr>
                
            </React.Fragment>
        );
    }
    onToggleModal = () => {
        this.setState({
            isDisplayModal: !this.state.isDisplayModal
        });
    }
    onCloseModal = () => {
        this.setState({
            isDisplayModal: false
        });
    }
    onOpenModal = () => {
        this.setState({
            isDisplayModal: true
        });
    }
    onDelete = id => {
        this.props.onDelete(id)
        this.setState({
            show: false
        });
    }

}

export default Product;