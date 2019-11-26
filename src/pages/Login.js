import React, { Component } from 'react';
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBIcon,
    MDBTooltip 
} from "mdbreact";
import {Redirect} from 'react-router-dom'
class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    submitHandler = (event) => {
        event.preventDefault();
        var { username, password } = this.state
        var{history} = this.props
        event.target.className += " was-validated";
        if (event.target.checkValidity()) {
            if(username === 'admin@cp.com' && password  === 'admin'){
                sessionStorage.setItem('users',JSON.stringify({
                    username : username,
                    password : password
                }))
                // history.push('/product-list')
                window.location.reload()
            }else{
                if((username !== 'admin@cp.com' && password  === 'admin') || (username === 'admin@cp.com' && password  !== 'admin')){
                    alert('Sai tài khoản hoặc mật khẩu')
                }else{
                    alert('Tài khoản không tồn tại')
                }
            }
        }
    }

    changeHandler = event => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        });
    };
    render() {
        var { username, password } = this.state
        var loggedInUser = sessionStorage.getItem('users')
        if(loggedInUser !== null) {
            return <Redirect to='/product-list'> </Redirect>
        }
        const style = { display: "inline-block", maxWidth: "50vh" };
        return (
            <MDBRow className='mt-5' >
                <MDBCol md="1"></MDBCol>
                <MDBCol md="7">
                    <form className="needs-validation"
                        onSubmit={this.submitHandler}
                        noValidate>
                        <p className="h5 text-center mb-4">Đăng nhập 
                     
                        <span>
                                <a data-toggle="tooltip" data-placement="top" title="user: admin@cp.com | pass: admin" className="btn btn-outline-primary itembutton"><MDBIcon icon="exclamation-circle" /></a>
                            </span>
           
                           
                        </p>
                        
                        <div className="grey-text">
                            <MDBInput
                                label="User: admin@cp.com"
                                icon="envelope"
                                group
                                type="email"
                                validate
                                error="Lỗi"
                                success="Hợp lệ"
                                name="username"
                                onChange={this.changeHandler}
                                id="username"
                                value={username}
                                required
                            />
                            <MDBInput
                                label="Password: admin"
                                icon="lock"
                                group type="password"
                                success="Hợp lệ"
                                validate
                                required
                                name="password"
                                onChange={this.changeHandler}
                                id="password"
                                value={password}
                                maxLength="5"
                                minLength="5" />
                        </div>
                        <div className="text-center">
                            <MDBBtn color="primary" size="md" outline type="submit">
                                Đồng ý
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
                <MDBCol md="2"></MDBCol>
            </MDBRow>
        );
    }
}

export default Login;


