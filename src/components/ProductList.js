import React, { Component } from 'react';
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterCode: '',
            filterStatus: -1
        };
    }
    onChange = e => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        var filter = {
            name: name === 'filterName' ? value : this.state.filterName,
            code: name === 'filterCode' ? value : this.state.filterCode,
            status: name === 'filterStatus' ? value : this.state.filterStatus
        }
        this.setState({
            [name]: value
        });
        this.props.onChange(filter)
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered table-hover ">
                        <thead className="blue white-text">
                            <tr>
                                <th width='05%' scope="col">STT</th>
                                <th width='30%' scope="col">Tên sản phẩm</th>
                                <th width='20%' scope="col">Mã sản phẩm</th>
                                <th width='15%' scope="col">Tình trạng</th>
                                <th width='15%' scope="col">Giá</th>
                                <th width='15%'></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td />
                                <td>
                                    <input type="text"
                                        className="form-control"
                                        name="filterName"
                                        onChange={this.onChange}
                                        value={this.state.filterName}
                                    />
                                </td>
                                <td>
                                    <input type="text"
                                        className="form-control"
                                        name="filterCode"
                                        onChange={this.onChange}
                                        value={this.state.filterCode}
                                    />
                                </td>
                                <td>
                                    <select className="form-control"
                                        name="filterStatus"
                                        onChange={this.onChange}
                                        value={this.state.filterStatus}
                                    >
                                        <option value={-1}>Tất Cả</option>
                                        <option value={0}>Hết hàng</option>
                                        <option value={1}>Còn hàng</option>
                                    </select>
                                </td>
                                <td />
                                <td />
                            </tr>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>

            </div>

        );
    }
}

export default ProductList;