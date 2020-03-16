import Typing from "react-typing-animation";
import { FaRegFilePdf } from "react-icons/fa";
import react, { useEffect } from "react";
import gsap from "gsap";
export default function About() {
  useEffect(() => {
    document.querySelector(".about-X").addEventListener("click", function() {
      gsap.to(".pics", 1, { y: 0, delay: 0.5 });
      gsap.to(".nav-bottom", 1, { y: 0, delay: 0.5 });
      gsap.to(".about-wrapper", 3, {
        y: 1000,
        display: "none"
      });
    });
  }, []);
  return (
    <div className="About me">
      <div className="about-wrapper">
        <button className="about-X">X</button>
        <div className="about-overlay"></div>
        <div className="intro">
          <div className="intro-header">
            <Typing>
              <Typing.Speed ms={50} />
              <strong>Welcome to my portfolio.</strong>
            </Typing>
          </div>
          <Typing>
            <Typing.Delay ms={2000} />
            <Typing.Speed ms={10} />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus sed rem esse illo vel earum, natus nihil molestias
              doloremque ea porro praesentium, voluptatum fuga minus excepturi
              obcaecati consequatur autem sunt.
            </p>
          </Typing>
          <a href="/welid cv.pdf " download>
            <FaRegFilePdf />
          </a>
        </div>
      </div>
      <style jsx>{`
        a,
        a:link {
          text-decoration: none;
          color: red;
          font-size: 35px;
          transform: translate(80%, 80%);
        }
        .about-wrapper {
          width: 800px;
          height: 400px;
          position: absolute;
          background-color: rgb(145, 139, 139);
          transform: translate(30%, 100%);
          border-radius: 50px;
          display: none;
          /* display: flex;
          flex-direction: column; */
        }
        .about-wrapper button {
          display: flex;
          justify-self: center;
          width: 10px;
          justify-content: center;
          align-self: flex-end;
          margin-left: 750px;
          background-color: transparent;
          margin-top: 30px;
          border: none;
        }
        .intro {
          color: rgb(36, 34, 34);
          margin-right: 200px;
          margin-top: 10%;
          margin-left: 5%;
        }
        .intro-header {
          font-size: 40px;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}
