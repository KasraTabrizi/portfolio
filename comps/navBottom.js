import { gsap } from "gsap";
import react, { useEffect, useState } from "react";

const NavBottom = () => {
  const [animation, setAnimation] = useState();
  const tl = gsap.timeline();

  useEffect(() => {
    document.querySelectorAll(".nav-bottom").forEach(data => {
      data.addEventListener("click", function(e) {
        e.preventDefault();
        if (e.currentTarget.innerText === "Contact") {
          tl.play();
          setAnimation(gsap.to(".pics", 2.5, { x: -1800 }));
          setAnimation(gsap.to(".nav-bottom", 2.5, { x: -1800 }));
          setAnimation(
            gsap.to(".contact-wrapper", 1, {
              x: 230,
              delay: 0.5,
              display: "block"
            })
          );
        }
        if (e.currentTarget.innerText === "About") {
          tl.play();
          setAnimation(gsap.to(".pics", 3, { y: -1900 }));
          setAnimation(gsap.to(".nav-bottom", 3, { y: -1900 }));
          setAnimation(
            gsap.to(".about-wrapper", 1, {
              y: -340,
              delay: 0.5,
              display: "block"
            })
          );
        }
        if (e.currentTarget.innerText === "Skills") {
          tl.play();
          setAnimation(gsap.to(".pics", 3, { y: -1900 }));
          setAnimation(gsap.to(".nav-bottom", 3, { y: -1900 }));
          setAnimation(
            gsap.to(".skills-wrapper", 1, {
              x: 200,
              delay: 0.5
            })
          );
        }
      });
    });
  }, []);
  return (
    <div className="nav-links-bottom">
      <a className="nav-bottom" href="#">
        Skills
      </a>
      <a className="nav-bottom" href="#">
        About
      </a>
      <a className="nav-bottom" href="#">
        Contact
      </a>
      <style jsx>{`
        a,
        a:link {
          text-decoration: none;
          color: gray;
        }
        .nav-links-bottom {
          display: flex;
          justify-content: space-around;
          margin-top: 15px;
          font-size: 20px;
          width: 100%;
        }
        .nav-links-bottom a {
          color: rgb(155, 152, 152);
          opacity: 0.5;
          position: relative;
        }
        .nav-links-bottom a:before {
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

        .nav-links-bottom a:hover:before {
          visibility: visible;
          width: 100%;
        }

        .nav-links-bottom a:hover {
          transform: scale(1.3);
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default NavBottom;
