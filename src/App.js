import React from "react";
import {Route,Link} from 'react-router-dom'
import {Switch,Layout,Typography,Space} from "antd";
import {Navbar,Homepage, Exchanges, CryptoCurrencies, CryptoDetails, News} from './components'
const App = () =>{
    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Homepage/>
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges/>
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <CryptoCurrencies/>
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails/>
                            </Route>
                            <Route exact path="/news">
                                <News/>
                            </Route>
                        </Switch>
                    </div>
                </Layout>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default App