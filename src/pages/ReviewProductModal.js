import React, { Component } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBIcon,
    MDBRow,
    MDBCol,
} from "mdbreact";
class ReviewProductModal extends Component {
    state = {
        imageLoadError: true,
    }
    format_curency = (price) => {
        return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
     }
    onError = (e) => {
        if (this.state.imageLoadError) {
            this.setState({
                imageLoadError: false
            });
            e.target.src = 'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg';
        }
    }
    render() {
        var { onCloseModal, onShowModal, product } = this.props
        return (
            <MDBModal size="md" isOpen={onShowModal} toggle={onCloseModal} backdrop={false} className="cascading-modal" flexCenter >
                <div className="modal-header primary-color white-text">
                    <h4 className="title">
                        <MDBIcon far icon="eye" /> Xem trước sản phẩm
              </h4>
                    <button type="button" className="close" onClick={onCloseModal}>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>

                <MDBModalBody >
                    <MDBRow className='text-center'>
                        <MDBCol size="12" className='mb-3'>
                            <h3 className='text-danger '>
                                <strong>{product.name}</strong>
                            </h3>
                        </MDBCol>
                        <MDBCol size="12">
                            <img
                                src={product.image}
                                className="img-fluid"
                                alt=""
                                onError={this.onError}
                            />
                        </MDBCol>

                        <MDBCol size="12" className='mt-3'>
                            <h3 className='text-danger '>
                                <strong>{this.format_curency(product.price)} VNĐ</strong>
                            </h3>
                        </MDBCol>

                        <MDBCol size="12" >
                            <p> {product.description}</p>
                        </MDBCol>
                        <MDBCol size="12" >
                            <MDBBtn color="primary" size="md" outline onClick={onCloseModal}>
                                Đóng
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBModalBody>
            </MDBModal>

        );
    }
}

export default ReviewProductModal;