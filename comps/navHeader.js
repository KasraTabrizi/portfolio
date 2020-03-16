import gsap from "gsap";
import react, { useEffect, useState, useImperativeHandle } from "react";

const navHeader = () => {
  return (
    <div className="nav-header">
      <div className="nav-name">Labidi.</div>
      <span className="space-between"></span>
      <div className="nav-links-top">
        <div>
          <a className="nav-top" href="/landingpage">
            Home
          </a>
        </div>
      </div>
      <style jsx>{`
        a,
        a:link {
          text-decoration: none;
          color: rgb(155, 152, 152);
        }
        .nav-header {
          display: flex;
          justify-content: space-evenly;
          align-items: baseline;
          font-size: 20px;
        }
        .nav-name {
          color: white;
          font-size: 30px;
        }
        .nav-links-top {
          display: flex;
        }
        .nav-links-top a {
          color: rgb(155, 152, 152);
          opacity: 0.5;
          position: relative;
          padding: 0;
          margin: 0;
        }
        .nav-links-top a:before {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          right: 0;
          background-color: #fff;
          visibility: hidden;
          transition: all 0.3s ease-in-out;
        }
        .nav-links-top a:hover:before {
          visibility: visible;
          width: 100%;
        }
        .nav-links-top a:hover {
          transform: scale(1.3);
          opacity: 1;
        }
        .space-between {
          width: 50%;
        }
      `}</style>
    </div>
  );
};

export default navHeader;
