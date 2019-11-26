import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBIcon } from 'mdbreact';
import {Link} from 'react-router-dom'
import logo from "../assets/mdb-react.png";

class NotFoundPage extends Component {
  render() {
      return (
        <React.Fragment>
          <div className="full">
            <MDBRow className="bad-gateway-row">
              <MDBCol md="8">
                <img alt="Error 404" className="img-fluid" hieght="20px" src={logo} />
                <h2 className="h2-responsive mt-3 mb-2">404. Lỗi rồi</h2>
                <h4>Không tìm thấy trang</h4>
              </MDBCol>
              <MDBCol md="4">
                <img alt="Error 404" className="img-fluid" src="https://mdbootstrap.com/img/Others/grafika404-bf.png" />
              </MDBCol>
              <MDBCol md="12">
                <MDBRow>
                  <MDBCol md='4'>
                  <Link to ='/' className='text-white bg-primary rounded'>Quay lại
                  <MDBIcon icon="refresh" spin size="1x" fixed />
                  <span className="sr-only ml-1">Loading...</span>
                    </Link>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </div>
        </React.Fragment>
      )
  }
}

export default NotFoundPage;