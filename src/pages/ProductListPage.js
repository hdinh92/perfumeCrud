import React, { Component } from 'react';
import Product from './../components/Product';
import TaskControl from './../components/TaskControl';
import ProductList from '../components/ProductList';
import { connect } from 'react-redux'
import * as Actions from './../actions/index'
import PropTypes from 'prop-types';
import {Redirect,Link} from 'react-router-dom'
class ProductListPage extends Component {
    state = {
        currentPage: 1,
        productsPerPage: 5,

    }
    componentDidMount() {
        this.props.onShowProducts()
    }

    onfilterTable = filter => {
        this.props.onfilterTable(filter)
    }


    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    showProduct = currentProducts => {
        var result = null;
        if (currentProducts.length > 0) {
            result = currentProducts.map((product, index) => {
                return (
                    <Product key={index}
                        index={index}
                        product={product}
                        onDelete={this.onDelete}
                    />
                )
            })
        }
        return result
    }
    render() {
        var loggedInUser = sessionStorage.getItem('users')
        if(loggedInUser === null) {
            return <Redirect to='/login'> </Redirect>
        }
        var { products, filterTable, sort } = this.props
        var { currentPage, productsPerPage } = this.state;
        var indexOfLastProduct = currentPage * productsPerPage;
        var indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        var currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

       
        if (filterTable.name) {
            currentProducts = products.filter((product) => {
                return product.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1
            })
        }
        if (filterTable.code) {
            currentProducts = products.filter((product) => {
                return product.code.toLowerCase().indexOf(filterTable.code.toLowerCase()) !== -1
            })
        }
        currentProducts = currentProducts.filter((product) => {
            if (filterTable.status === -1) {
                return product;
            } else {
                return product.status === (filterTable.status === 1 ? true : false);
            }
        });

        if (sort.by === 'name') {
            currentProducts.sort((a, b) => {
                if (a.price > b.price) return sort.value;
                else if (a.price < b.price) return -sort.value;
                else return 0;
            });
        } else {
            currentProducts.sort((a, b) => {
                if (a.name > b.name) return -sort.value;
                else if (a.name < b.name) return sort.value;
                else return 0;
            });
        }

        var pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            if (this.state.currentPage === number) {
                return (
                    <li key={number}
                        className='page-item active'
                        id={number}>
                        <a className="page-link"
                            href='# '
                            id={number}>
                            {number}
                        </a>
                    </li>
                )
            } else {
                return (
                    <li key={number}
                        className='page-item'
                        id={number}>
                        <a className="page-link"
                            href='# '
                            id={number}
                            onClick={this.handleClick}>
                            {number}
                        </a>
                    </li>
                )
            }
        });
        
        return (
            <div className="row wow fadeIn">
                  <div className="col-md-12 float-right">
                  {/* <Link to='/login' onClick ={this.logout} className={loggedInUser===null?'d-none':'text-warning d-block float-right'}>Thoát</Link> */}
                   </div>
                <div className="col-md-12">
                    {/*Card*/}
                    <div className="card mt-5">
                        <div className="card-body">
                            <TaskControl />

                            {/* ProductList */}
                            <ProductList onChange={this.onfilterTable}>
                                {this.showProduct(currentProducts)}
                            </ProductList>

                            <div className="float-right">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination pg-blue text-center">
                                        {renderPageNumbers}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onDelete = id => {
        this.props.onDeleteProduct(id);
    }
}

// Check PropsType
ProductListPage.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.string.isRequired,
            name : PropTypes.string.isRequired,
            code : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            status : PropTypes.bool.isRequired,
            image : PropTypes.string.isRequired,
            price: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]).isRequired,
        })
    ).isRequired,
    filterTable : PropTypes.object.isRequired,
    sortProduct : PropTypes.object
}

const mapStateToProps = state => {
    return {
        products: state.products,
        itemEditing: state.itemEditing,
        filterTable: state.filterTable,
        sort: state.sortProduct,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onShowProducts: () => {
            dispatch(Actions.actFecthProductsRequest())
        },
        onDeleteProduct: id => {
            dispatch(Actions.actDeleteProductRequest(id))
        },
        onEditProduct: id => {
            dispatch(Actions.actGetProductRequest(id))
        },
        onfilterTable: (filter) => {
            dispatch(Actions.actFilter(filter))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);