import { useLayoutEffect, useRef, useState } from "react";
import { useGSAP } from '@gsap/react';
import { ScrollSmoother, ScrollTrigger } from "gsap-trial/all";
import gsap from "gsap-trial";
import "./App.css";

const App = () => {
  const [progress, setProgress] = useState(0); // State to track the progress
  const el = useRef<any>();
  const loader = useRef<any>();

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

  useLayoutEffect(() => {
    let smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true
    });
    return () => {
      smoother.kill();
    };
  }, []);

  useGSAP(() => {

    setTimeout(() => {

      const progressObj = { progress: 1 };

      gsap.to(progressObj, {
        progress: 100, // Animate the progress to 100
        duration: 3,
        ease: "power3.inOut",

        yoyo: true,
        onUpdate: function () {
          // Update the progress value on each frame
          setProgress(Math.round(progressObj.progress));
        },
        onComplete: () => {

          console.log("Countdown finished!");
          gsap.to(loader.current, {
            duration: 0.8,
            height: 0,
            bottom: 0,
            delay: 0.2,
            opacity: 0,
          });
        }
      });
    }, 1000);
  });

  return (
    <div style={{ position: "relative" }}>
      {/* Preloader Section */}
      <div
        ref={loader}
        className="preloader"
        style={{
          position: "fixed",
          height: "100vh",
          width: "100%",
          top: 0,
          backgroundColor: "#141414",
          zIndex: 9999,
        }}
      >
        <p className="loader" style={{ color: "#fff", fontSize: "5rem", textAlign: "center", paddingTop: "50%" }}>
          {progress}% {/* Display the current progress */}
        </p>
      </div>

      <div className="App_Wrapper" ref={el}>
        {/* Hero Section */}
        <section className="Hero-Section">
          <nav className="nav-wrapper">
            <div className="Hero-Nav">
              <div>
                <img
                  src="https://res.cloudinary.com/diml3oeaw/image/upload/v1732097314/SwoopNebula/ujmyywv0p2tnjxxdutyg.png"
                  className="header-logo"
                />
              </div>
              <div>
                <a href="Icon">Icon</a>
              </div>
            </div>
          </nav>
          <div className="Head_container">
            <h1 className="Hero_head">
              Design And <br />
              Illustration <br />
              Portfolio
            </h1>
          </div>

          <div className="Hero_image_container">
            <img
              src="https://res.cloudinary.com/diml3oeaw/image/upload/v1732097314/SwoopNebula/bmvhfpjnqiuhyywqdqpk.png"
              className=""
            />
          </div>
        </section>
        {/* Hero Section Ends */}

        {/* Project Section */}
        <section className="Project-Sections">
          <h1 className="Project-Head">
            My Most <br /> Recent <br /> Projects
          </h1>

          {/* Container WRAPPER */}
          <section className="Image-Wrappper">
            <div data-speed="0.5">
              <img
                draggable="false"
                src="https://res.cloudinary.com/diml3oeaw/image/upload/v1732100040/SwoopNebula/csrfrv1bqfcuej5whh7q.png"
              />
              <p className="project-subtitle">Glitch</p>
            </div>

            <div className="middle_card" data-lag="0.5">
              <img
                draggable="false"
                src="https://res.cloudinary.com/diml3oeaw/image/upload/v1732100040/SwoopNebula/zulwur2ymh2pmkrmixxf.png"
              />
              <p className="project-subtitle">Retro</p>
            </div>

            <div data-speed="0.6" data-lag="0.2">
              <img
                draggable="false"
                src="https://res.cloudinary.com/diml3oeaw/image/upload/v1732100040/SwoopNebula/yq7rekeusl8ecby4oyvu.png"
              />
              <p className="project-subtitle">Computer Saved me</p>
            </div>
          </section>
          {/* Container WRAPPER */}
        </section>
        {/* About me */}
        <section className="Aboutme-contianer">
          <div>
            <h1 className="About-me_head">About Me</h1>
            <p className="About-me-paragraph">I love to create pieces that evoke feelings of <br />
              whimsy and nostilgia.My style involes fonrtnite <br />
              balls bold mordern elements with lorem ipsum <br />
              aesthetics.</p>
            <img src="https://res.cloudinary.com/diml3oeaw/image/upload/v1732109834/SwoopNebula/dxh4lojtx8iaubd0hggp.png" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/diml3oeaw/image/upload/v1732110316/SwoopNebula/jooweirfv2i9phpid5l8.png" />
            <p className="About-me-paragraph">I love to create pieces that evoke feelings of <br />
              whimsy and nostilgia.My style involes fonrtnite <br />
              balls bold mordern elements with lorem ipsum <br />
              aesthetics.</p>

          </div>
        </section>
        {/* About me Ends */}
        {/* Visual Pharmacy */}
        <section className="Shop_container">
          <h1 className="Shop-head">Visual Pharmacy</h1>
          {/* ROWWWW */}
          <div style={{ display: "flex", justifyContent: "space-around", marginTop: "4rem" }}>
            <div  data-lag="0.4">
              <p className="About-me-paragraph">Mockups</p>
              <img src="https://res.cloudinary.com/diml3oeaw/image/upload/v1732112130/SwoopNebula/n7m5qxbye8izi15ulacr.png" />
              <p className="About-me-paragraph">10+ LOW INK TEXTURES <br />
                AND MOCKUPS</p>
            </div>
            <div   data-speed="1" data-lag="0.6">
              <p className="About-me-paragraph">Icons</p>
              <img src="https://res.cloudinary.com/diml3oeaw/image/upload/v1732112130/SwoopNebula/fwhrpeqrcmd1jbtccqbn.png" />
              <p className="About-me-paragraph">100+ Icons assets pack
              </p>
            </div>
            <div  data-lag="2">
              <p className="About-me-paragraph">Illustrations</p>
              <img src="https://res.cloudinary.com/diml3oeaw/image/upload/v1732112130/SwoopNebula/qomwqmkga59yyq2rddal.png" />
              <p className="About-me-paragraph">Art posters
              </p>
            </div>
          </div>
          {/*  */}
        </section>
        {/* Visual pharmacy Ends */}
        {/* Final Section🐓 */}
        <section className="Contact-Section">
           <h1 className="Contact-head">Lets Work <br/> Together</h1>
        </section>
        {/* Final Section🐓 */}
      </div>
    </div>
  );
};

export default App;
