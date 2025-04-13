// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <div className="Page">
      <header>
        <h1>메뉴목록</h1>
      </header>
      <main>여기에 메인 컨텐츠를 담는다.</main>
      <footer>
        <nav className="Navbar">
          <a className="active" href="#">
            메뉴목록
          </a>
          <a href="#">주문내역</a>
        </nav>
      </footer>
    </div>
  );
};

export default Navbar;
