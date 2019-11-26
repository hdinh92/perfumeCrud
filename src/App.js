import React, { Component } from 'react';
import SideBar from './components/SideBar';
import { Switch , Route, BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'
import Loading from './components/Loading';
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Loading />
                    <header>
                        <SideBar />
                    </header>
                    <main className="pt-5 mx-lg-5">
                        <div className="container-fluid ">
                            <Switch>
                                {this.showContent(routes)}
                            </Switch>
                        </div>
                    </main>
                </div>
            </Router>
        );
    }
    showContent = routes => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route  path={route.path} key={index} component={route.main} exact={route.exact}></Route>
                )
            })
        }
        return result
    }
    
}

export default App;

