import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Spin } from "antd";
import { ClearOutlined } from "@ant-design/icons";
import { useGetCryptosQuery } from "../services/cryptoApi";

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 50;
  const { data, isLoading, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredData = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    setCryptos(filteredData);
  }, [search,data]);

  if (isFetching) {
    return <Spin />;
  }
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search cryptocurrencies"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => {
          return (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={currency.uuid}
            >
              <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={
                    <img className="crypto-image" src={currency.iconUrl} />
                  }
                  hoverable
                  bordered
                >
                  <p>Price: {millify(Number(currency.price))}</p>
                  <p>Market Cap: {millify(Number(currency.marketCap))}</p>
                  <p>Daily Change: {currency.change}%</p>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default CryptoCurrencies;
