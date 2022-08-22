import { useState } from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <div className="left">
        <div className="logo">
          <a href="#">
            <img
              src="https://www.genesis.com/etc.clientlibs/genesis-p2/global/clientlibs/clientlib-basepage/resources/images/logo.png"
              alt="logo"
            />
          </a>
        </div>
        <div className="main-nav">
          <ul>
            <li className="model">모델</li>
            <li className="buy">구매</li>
            <li className="experience">체험</li>
            <li className="members">멤버스</li>
            <li className="genesis">제네시스</li>
          </ul>
        </div>
      </div>
      <div className="util-nav">
        <div className="depth1">
          <img
            src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/gnb-footer/genesis-kr-gnb-support-icon-01-tablet-17x17-ko.png"
            alt="고객센터"
          />
        </div>
        <div className="depth2">
          <a href="https://mypage.genesis.com/kr/ko.html">
            <img
              src="https://www.genesis.com/content/dam/genesis-p2/kr/assets/gnb-footer/genesis-kr-gnb-mypage-icon-01-tablet-34x38-ko.png"
              alt="마이페이지"
            />
          </a>
        </div>
        <div className="depth3">
          <img
            src="https://www.genesis.com/etc.clientlibs/genesis-p2/global/clientlibs/clientlib-basepage/resources/images/icon-search-small.png"
            alt="검색"
          />
        </div>
        <div className="depth4">
          <span></span>
          <span></span>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 5.9rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  color: #bbb;
  padding: 0 2rem;
  cursor: pointer;

  .left {
    display: flex;
  }

  .logo {
    width: 8.4rem;
    margin-right: 5rem;
  }
  img {
    width: 100%;
  }

  .main-nav,
  .util-nav {
    font-size: 1.4rem;
  }

  .main-nav ul {
    display: flex;
  }
  .main-nav li:not(li:first-of-type) {
    margin-left: 3.9rem;
  }
  .main-nav li:hover {
    color: #ffffff;
  }

  .util-nav {
    display: flex;
    align-items: center;
  }
  .util-nav img {
    width: 17px;
    height: 19px;
    padding: 0 1rem;
  }

  .depth4 {
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    border-left: 1px solid #525151;
  }

  .depth4 span {
    display: block;
    width: 2rem;
    height: 2px;
    background-color: #ffffff;
  }
  .depth4 span:first-of-type {
    margin-bottom: 1rem;
  }
`;
export default Header;
