import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class TaskButtonAdd extends Component {
    render() {
        return (
            <div className="col-md-6">
            <Link to={'/product/add'} className="btn btn-warning btnadd rounded w-100 ">Thêm sản phẩm</Link>
        </div>
        );
    }
}

export default TaskButtonAdd;