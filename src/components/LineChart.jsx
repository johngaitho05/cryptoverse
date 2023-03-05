import React from 'react';
import {Line} from 'react-chartjs-2'
import {Col, Row, Typography} from "antd";
import {CategoryScale, Chart, LinearScale, LineElement, PointElement} from 'chart.js';
import moment from "moment";
Chart.register(CategoryScale,LinearScale,PointElement,LineElement);

const {Title} = Typography

const LineChart = ({coinHistory, currentPrice,coinName}) => {
    const coinPrice = []
    const coinTimeStamp = []
    for(let i = 0; i < coinHistory?.data?.history?.length; i++){
        coinPrice.push(coinHistory.data.history[i].price)
        let date_string = new Date(coinHistory.data.history[i].timestamp*1000).toLocaleDateString()
        coinTimeStamp.push(moment(date_string, 'MM/DD/YYYY').format('DD/MM/YYYY'))
    }
    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: "#0071bd",
                borderColor: "#0071bd"
            }
        ]
    }
    const options = {
        scales: {
            y:
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
        }
    }
    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">{coinName} Price Chart</Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>
                    <Title level={5} className="current-price">Current {coinName} price: $ {currentPrice}</Title>
                </Col>
            </Row>
            <Line data={data} options={options}/>
        </>
    );
};

export default LineChart;
