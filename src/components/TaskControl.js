import React, { Component } from 'react';
import TaskButtonAdd from './TaskButtonAdd';
import { connect } from 'react-redux'
import * as Actions from './../actions/index'
class TaskControl extends Component {
    onClick = (sortBy, sortValue) => {
        this.props.onSort({
            by: sortBy,
            value: sortValue
        });
    }
    render() {
        return (
            <fieldset className="mb-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <TaskButtonAdd />
                            <div className="col-md-6">
                                <button className="dropdown-toggle btn btn-warning mr-4 btnadd rounded w-100" type="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Sắp xếp
                                 </button>
                                <div className="dropdown-menu">
                                    <li onClick={() => this.onClick('name', 1)}>
                                        <a href="# " className={(this.props.sort.by === 'name' && this.props.sort.value === 1) ? 'dropdown-item active' : 'dropdown-item'}>
                                            Giá tăng dần
                                        </a>
                                    </li>
                                    <li onClick={() => this.onClick('name', -1)}>
                                        <a href="# " className={(this.props.sort.by === 'name' && this.props.sort.value === -1) ? 'dropdown-item active' : 'dropdown-item'}>
                                            Giá giảm dần
                                        </a>
                                    </li>

                                    <div className="dropdown-divider"></div>

                                    <li onClick={() => this.onClick('status', 1)}>
                                        <a href="# " className={(this.props.sort.by === 'status' && this.props.sort.value === 1) ? 'dropdown-item active' : 'dropdown-item'}>
                                            Tên A->Z
                                        </a>
                                    </li>
                                    <li onClick={() => this.onClick('status', -1)}>
                                        <a href="# " className={(this.props.sort.by === 'status' && this.props.sort.value === -1) ? 'dropdown-item active' : 'dropdown-item'}>
                                            Tên Z->A
                                        </a>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        );
    }
}


const mapStateToProps = state => {
    return {
        sort: state.sortProduct
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: sort => {
            dispatch(Actions.actSortProduct(sort))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskControl);