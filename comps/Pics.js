import react, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Pics = () => {
  const tl = gsap.timeline();

  const [test, setTest] = useState("Click Me");

  useEffect(() => {
    const wrapper = document.querySelectorAll(".nav-bottom");
    wrapper.forEach(data => {
      data.addEventListener("mouseenter", function(e) {
        let overlay = `.${e.currentTarget.innerText}`;
        gsap.to(overlay, 1, { y: "-100%" });
      });

      data.addEventListener("mouseleave", function(e) {
        let overlay = `.${e.currentTarget.innerText}`;
        gsap.to(overlay, 1, { y: "100%" });
      });
    });
  }, []);

  return (
    <div className="swipe">
      <div className="pics">
        <div className="image-wrapper">
          <div className="overlay Skills"></div>
          <img src="/skills.png" alt="Skills"></img>
        </div>
        <div className="image-wrapper">
          <div className="overlay About"></div>
          <img src="/ali.png" alt="About"></img>
        </div>
        <div className="image-wrapper">
          <div className="overlay Contact"></div>
          <img src="/contact.png" alt="Contact"></img>
        </div>
      </div>
      <style jsx>{`
        img {
          margin-top: 60px;
          width: 250px;
          height: 250px;
          filter: grayscale(100%);
        }
        .pics {
          display: flex;
          width: 100%;
          justify-content: space-around;
          margin-top: 70px;
        }
        .overlay {
          width: 100%;
          height: 100%;
          position: absolute;
          background-color: rgb(128, 125, 125);
          top: 100%;
        }
        .image-wrapper {
          position: relative;
          margin: 10px;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Pics;
