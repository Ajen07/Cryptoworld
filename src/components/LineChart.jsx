import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography, Spin } from "antd";
import { useGetCryptoHistoryQuery } from "../services/cryptoApi";

const { Title } = Typography;

const LineChart = ({ currentPrice, coinName, coinId, timeperiod }) => {
  const { data: coinHistory, isFetching } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });
  const coinPrice = [];
  const coinTimestamp = [];
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }


  const data = {
    labels:coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice ,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
        tension: 0.1,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        ticks: {
          stepSize: 50,
        },
      },
    },
  };
  if (isFetching) {
    return <Spin />;
  }

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
