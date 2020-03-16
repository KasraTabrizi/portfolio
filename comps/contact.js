import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import react, { useEffect } from "react";
import gsap from "gsap";
export default function Contact() {
  useEffect(() => {
    document.querySelector(".contact-X").addEventListener("click", function() {
      gsap.to(".pics", 1.5, { x: 0, delay: 0.5 });
      gsap.to(".nav-bottom", 1.5, { x: 0, delay: 0.5 });
      gsap.to(".contact-wrapper", 1, { x: 1500, display: "none" });
    });
  }, []);
  return (
    <div className="contact">
      <div className="contact-wrapper">
        <button className="contact-X">X</button>
        <form
          action="https://formspree.io/welidlabidi@gmail.com"
          method="POST"
          className="form"
        >
          <input
            className="input"
            type="text"
            name="email"
            placeholder="Email"
            required
          ></input>
          <span className="space"></span>
          <input
            className="input"
            type="text"
            name="Number"
            placeholder="Number"
            required
          ></input>
          <span className="space"></span>
          <textarea
            className="input"
            type="text"
            name="Massege"
            rows="4"
            cols="23"
            placeholder="Message"
            required
          ></textarea>
          <span className="space"></span>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
        <div className="contactnaam">
          <p>
            Name:
            <i> Welid Labidi</i>
          </p>
          <p>
            Email:
            <a href="mailto:welidlabidi@gmail.com">Welidlabidi@gmail.com</a>
          </p>
        </div>
        <div className="icons">
          <a href="https://github.com/welidlabidi" className="github-icon">
            <GoMarkGithub />
          </a>
          <span className="space-icon"></span>
          <a
            href="https://www.linkedin.com/in/welid-labidi-086041187/"
            className="linkedin-icon"
          >
            <FaLinkedin />
          </a>
          <span className="space-icon"></span>
          <a href="mailto:welidlabidi@gmail.com" style={{ color: "red" }}>
            <IoIosMail />
          </a>
        </div>
      </div>
      <style jsx>{`
        a,
        a:link {
          text-decoration: none;
          color: black;
        }
        .contact-wrapper {
          width: 800px;
          height: 400px;
          position: absolute;
          background-color: rgb(145, 139, 139);
          transform: translate(230%, -80%);
          border-radius: 50px;
          display: none;
        }
        .contact-wrapper button {
          margin-top: 30px;
          margin-left: 750px;
          background-color: transparent;
          border: none;
        }
        .form {
          position: relative;
          width: 40%;
          margin-left: 20px;
          margin-top: 50px;
          display: flex;
          flex-direction: column;
        }
        .btn {
          border-radius: 10px;
          border: none;
          width: 125px;
          height: 35px;
          cursor: pointer;
        }
        .input {
          border: none;
          border-radius: 10px;
          padding: 5px;
          background: rgb(199, 196, 196);
        }
        .contactnaam {
          position: fixed;
          transform: translate(190%, -245%);
          color: white;
          z-index: 1000;
          width: auto;
          font-size: 20px;
          font-style: italic;
        }
        .contactnaam i {
          color: black;
        }
        .space {
          padding: 10px;
        }
        .space-icon {
          padding: 20px;
        }
        .icons {
          position: fixed;
          transform: translate(270%, -300%);
          font-size: 35px;
        }
        .github-icon {
          color: lightgreen;
        }
        .linkedin-icon {
          color: skyblue;
        }
      `}</style>
    </div>
  );
}
