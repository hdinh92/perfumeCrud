import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as Actions from './../actions/index'
import PropTypes from 'prop-types';

class ProductActionPage extends React.Component {
    state = {
        id: '',
        txtName: '',
        txtCode: '',
        Img: '',
        txtPrice: '',
        txaDesc: '',
        chkbStatus: false,
    };
    componentDidMount() {
        var { match } = this.props
        if (match) {
            var id = match.params.id
            this.props.onEditProduct(id)
        }
    }
    

    
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status,
                txaDesc: itemEditing.description,
                txtCode: itemEditing.code,
                Img: itemEditing.image
            });
        }
    }

    submitHandler = event => {
        var { id, txtName, txtCode, txtPrice, txaDesc, chkbStatus, Img } = this.state
        var { history } = this.props
        event.preventDefault();
        event.target.className += " was-validated";
        var product = {
            id: id,
            name: txtName,
            code: txtCode,
            price: txtPrice,
            description: txaDesc,
            status: chkbStatus,
            image: Img,

        }
        if (event.target.checkValidity()) {
            if (id) {
                this.props.onUpdateProduct(product)
            } else {
                this.props.onAddProduct(product)
            }
            history.push('/product-list')
        }
    };

    changeHandler = event => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        });
    };

    render() {
       

        var { txtName, txtCode, Img, txtPrice, txaDesc, chkbStatus } = this.state
        var statusLabel = chkbStatus === true ? 'Còn hàng' : 'Hết hàng'
        var statusClass = chkbStatus === true ? "custom-control-label text-success" : "custom-control-label text-danger"
        
        return (
            <div>
                <h3 className='text-danger mb-5'> { !this.state.id ? 'Thêm Sản Phẩm' : 'Cập Nhật Sản Phẩm' }</h3>
                <div className='card'>
                    <div className='card-body'>

                        <form
                            className="needs-validation"
                            onSubmit={this.submitHandler}
                            noValidate
                        >
                            <MDBRow>
                                {/* TÊN SẢN PHẨM */}
                                <MDBCol md="12" className="mb-3">
                                    <label
                                        htmlFor="txtName"
                                        className="grey-text">
                                        Tên sản phẩm
                                    </label>
                                    <input
                                        name="txtName"
                                        onChange={this.changeHandler}
                                        type="text"
                                        id="txtName"
                                        value={txtName}
                                        className="form-control"
                                        placeholder="Nhập tên sản phẩm"
                                        required
                                    />
                                    <div className="valid-feedback">Chính xác rồi</div>
                                    <div className="invalid-feedback">
                                        Nhập vào giúp mình với bạn ơi
                                </div>
                                </MDBCol>

                                {/* MÃ SẢN PHẨM */}
                                <MDBCol md="12" className="mb-3">
                                    <label
                                        htmlFor="txtCode"
                                        className="grey-text"
                                    >
                                        Mã sản phẩm
                                </label>
                                    <input
                                        name="txtCode"
                                        value={txtCode}
                                        onChange={this.changeHandler}
                                        type="text"
                                        id="txtCode"
                                        className="form-control"
                                        placeholder="Nhập mã sản phẩm"
                                        required
                                        maxLength="10"
                                    />
                                    <small id="codHelp" className="form-text text-muted">
                                        Tối đa 10 ký tự
                                </small>
                                    <div className="valid-feedback">Chính xác rồi</div>
                                    <div className="invalid-feedback">
                                        Nhập vào giúp mình với bạn ơi
                                </div>
                                </MDBCol>

                                {/* HÌNH SẢN PHẨM */}
                                <MDBCol md="12" className="mb-3">
                                    <label
                                        htmlFor="defaultFormRegisterConfirmEx3"
                                        className="grey-text"
                                    >
                                        Url hình
                              </label>
                                    <input
                                        onChange={this.changeHandler}
                                        value={Img}
                                        type="url"
                                        id="defaultFormRegisterConfirmEx3"
                                        className="form-control"
                                        name="Img"
                                        placeholder="Nhập Url hình"
                                        required
                                    />
                                    <small id="emailHelp" className="form-text text-muted">
                                        Phiền nhập url hình vào nhé, chưa hoàn thành :(<br />
                                    </small>
                                    <div className="invalid-feedback">
                                        Phải bắt đầu từ http:// hoặc url://
                                </div>
                                    <div className="valid-feedback">Chính xác rồi</div>
                                </MDBCol>

                                {/* GIÁ SẢN PHẨM */}
                                <MDBCol md="12" className="mb-3">
                                    <label
                                        htmlFor="idPrice"
                                        className="grey-text"
                                    >
                                        Nhập giá sản phẩm
                              </label>
                                    <input
                                        onChange={this.changeHandler}
                                        type="number"
                                        id="idPrice"
                                        className="form-control"
                                        name="txtPrice"
                                        value={txtPrice}
                                        placeholder="Nhập Giá"
                                        required
                                    />
                                    <div className="valid-feedback">Chính xác rồi</div>
                                    <div className="invalid-feedback">
                                        Nhập vào giúp mình với bạn ơi
                                </div>
                                </MDBCol>

                                {/* MÔ TẢ */}
                                <MDBCol md="12">
                                    <MDBInput className="form-control"
                                        type="textarea"
                                        label="Mô tả"
                                        cols="30" rows="5" outline
                                        name="txaDesc"
                                        value={txaDesc}
                                        onChange={this.changeHandler}
                                    />
                                </MDBCol>

                                <MDBCol md="4" className="mb-3 ml-5">
                                    <div className="custom-control custom-checkbox pl-3">
                                        <input
                                            className="custom-control-input "
                                            type="checkbox"
                                            value={chkbStatus}
                                            id="invalidCheck"
                                            checked={chkbStatus}
                                            name="chkbStatus"
                                            onChange={this.changeHandler}
                                        />
                                        <label className={statusClass} htmlFor="invalidCheck">
                                            {statusLabel}
                                        </label>
                                    </div>
                                </MDBCol>
                            </MDBRow>   {/* END ROW */}


                            {/* TÌNH TRẠNG */}


                            {/* BUTTON */}
                            <Link to="/product-list">
                                <MDBBtn color="danger" type="button">
                                    Trở lại
                                </MDBBtn>
                            </Link>
                            <MDBBtn color="primary" type="submit">
                                Lưu lại
                            </MDBBtn>
                        </form>
                    </div>
                </div>

            </div>

        );
    }
}


ProductActionPage.propTypes = {
    itemEditing : PropTypes.shape({
        id : PropTypes.string,
        name : PropTypes.string,
        code : PropTypes.string,
        description : PropTypes.string,
        status : PropTypes.bool,
        image : PropTypes.string,
        price: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    })
}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(Actions.actAddProductRequest(product))
        },
        onEditProduct: id => {
            dispatch(Actions.actGetProductRequest(id))
        },
        onUpdateProduct: product => {
            dispatch(Actions.actUpdateProductRequest(product))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);