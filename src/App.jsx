import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  HomePage,
  CryptoCurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="navbar">
          <Navbar />
        </header>
        <main className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route
                  exact
                  path="/cryptocurrencies"
                  element={<CryptoCurrencies />}
                />
                <Route
                  exact
                  path="/crypto/:coinId"
                  element={<CryptoDetails />}
                />
                <Route exact path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
          <footer className="footer">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              Copyright © 2023
              <Link to="/">CryptoWorld Inc.</Link> <br />
              All Rights Reserved.
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/news">News</Link>
            </Space>
          </footer>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
