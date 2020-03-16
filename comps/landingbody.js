import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import react, { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    document
      .querySelector(".wrapper")
      .addEventListener("mousemove", function(e) {
        let box1 = document.getElementsByClassName("box1")[0];
        let Ycoord1 = e.clientY / 10;
        let Xcoord1 = e.clientX / 10;
        let box1_styles_top = 200;
        let box1_styles_left = 500;
        box1.style = `top: ${box1_styles_top -
          Ycoord1}px; left: ${box1_styles_left - Xcoord1}px;`;
      });
  });
  return (
    <div className="wrapper">
      <div className="container">
        <div className="box box1">
          <h1>
            I'M <br />
            WELID <br />
            LABIDI.
          </h1>
          <h2>Web Developer</h2>
          <button className="btn-enter">
            <a href="/index">ENTER</a>
          </button>
          <br />
          <a className="github-icon" href="https://github.com/welidlabidi">
            <FaGithub />
          </a>
          <span className="space"></span>
          <a
            className="linkedin-icon"
            href="https://www.linkedin.com/in/welid-labidi-086041187/"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <style jsx>{`
        a {
          color: rgb(162, 177, 194);
          text-decoration: none;
        }
        body,
        html {
          height: 100%;
          margin: 0;
          background-image: url(/image/sea.jpg);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          
        }
        .container {
          display: flex;
          flex-direction: row;
          width:100%
          align-items: center;
          justify-content: center;
        }
        .wrapper {
          height: 100%;
          display:flex;
          justify-content: center;
          align-items: center;
          position:relative;
        }
        .box {
          display: block;
          position:absolute;
          border: gainsboro solid 3px;
          text-align: center;
          color: rgb(162, 177, 194);
          align-items: center;
          height: 100%;
        }
        .box1 {
         
          width: 300px;
          height: 200px;
          background-color: transparent;
          top: 200px;
          left: 500px;
        }
        .btn-enter {
          margin-top: 15%;
          width: 300px;
          height: 30px;
          background: transparent;
          color: rgb(162, 177, 194);
          margin-bottom: 10%;
        }
        .btn-enter:hover {
          transform: scale(1.1);
          box-shadow: 0 0 50px #d1cecc;
        }
        .space {
          padding: 10px;
        }
        .github-icon {
          color: lightgreen;
          font-size: 25px;
        }
        .linkedin-icon {
          color: skyblue;
          font-size: 25px;
        }
      `}</style>
    </div>
  );
};

export default Landing;
