import React from 'react';
import millify from "millify";
import {Typography, Row, Col, Statistic} from "antd";
import {Link} from 'react-router-dom'

import {useGetCryptosQuery} from "../services/cryptoApi";
import {CryptoCurrencies, News} from '../components'
import Loader from "./Loader";

const {Title} = Typography

const Homepage = () => {
    const {data, isFetching} = useGetCryptosQuery(10)
    const globalStats = data?.data?.stats
    if(isFetching) return (<Loader/>)
    return (
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row>
                <Col key="cryptocurrencies" span="12"><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
                <Col key="exchanges" span="12"><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
                <Col key="market-cap" span="12"><Statistic title="Total market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
                <Col key="24h-volume" span="12"><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
                <Col key="total-market" span="12"><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
                <Title level={4} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
            </div>
            <CryptoCurrencies simplified/>

            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={4} className="show-more"><Link to="/news">Show More</Link></Title>
            </div>
            <News simplified/>
        </>
    );
};

export default Homepage;
