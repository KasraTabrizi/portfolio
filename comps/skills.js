import { FaCss3Alt } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { FaGit } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";
export default function Skills() {
  useEffect(() => {
    document.querySelector(".skills-X").addEventListener("click", function() {
      gsap.to(".pics", 2, { y: 0, delay: 0.5 });
      gsap.to(".nav-bottom", 2, { y: 0, delay: 0.5 });
      gsap.to(".skills-wrapper", 1, {
        x: -1000
      });
    });
  }, []);
  return (
    <div className="skills">
      <div className="skills-wrapper">
        <button className="skills-X">X</button>
        <div className="skills-overlay"></div>
        <div className="cirkels">
          <div className="skills-icon">
            <FaGit />
          </div>
          <div className="skills-icon">
            <GoMarkGithub />
          </div>
          <div className="skills-icon">
            <FaHtml5 />
          </div>
          <div className="skills-icon">
            <FaCss3Alt />
          </div>
          <div className="skills-icon">
            <IoLogoJavascript />
          </div>
          <div className="skills-icon">
            <FaReact />
          </div>
          <div className="skills-icon">
            <FaNodeJs />
          </div>
        </div>
        <div className="project">
          <div className="skills-icon">
            <a href="https://www.a-ztechnics.be">Project</a>
          </div>
          <span className="space"></span>
          <div className="skills-icon">
            <a href="https://github.com/welidlabidi">Github </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        a,
        a:link {
          text-decoration: none;
          color: rgb(221, 209, 209);
        }
        a:hover {
          color: skyblue;
          transform: scale(1.2);
        }
        .skills-wrapper button {
          display: flex;
          justify-content: center;
          width: fit-content;
          align-self: flex-end;
          margin-right: 30px;
          transform: translate(0px, -60px);
          background-color: transparent;
          border: none;
        }
        .skills-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 65%;
          height: 70%;
          position: absolute;
          background-color: rgb(145, 139, 139);
          transform: translate(-125%, -90%);
          border-radius: 50px;
        }
        .skills-icon {
          position: relative;
          color: white;
          z-index: 1000%;
          font-size: 23px;
          border: 1px solid rgb(250, 246, 246);
          background-color: rgb(17, 17, 17);
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .cirkels {
          display: flex;
          justify-content: space-evenly;
        }
        .project {
          /* position: absolute;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          padding-top: 30px;
          transform: translate(0%, 80%); */
          display: flex;
          justify-content: center;
        }
        .space {
          margin: 20px;
        }
      `}</style>
    </div>
  );
}
