import { useLayoutEffect, useRef, useState } from "react";
import { useGSAP } from '@gsap/react';
import { ScrollSmoother, ScrollTrigger } from "gsap-trial/all";
import gsap from "gsap-trial";
import "./App.css";

const App = () => {
  const projectsdata=[
    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/22faf0201358667.66730ec484992.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/004e65207917309.66e5b96666c75.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fcc003189483337.65ac0c258aa2a.png',
    
    // 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/178f90128387509.615501d50309e.jpg',
    // 'https://mir-s3-cdn-cf.behance.net/project_modules/source/270b07128387509.615501d570dc9.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/52850b128387947.6155051e8fddb.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/a65a3f172469847.647fd0a5abd72.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/e99633172468185.647fc65a43544.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b8d1fe176341153.64c2e974938b7.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/hd/76e951189482583.65ac0ac314bb7.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/hd/df8861189479857.65ac051bb3ba9.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb899e189479857.65ac0518e5d15.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/f58a96171667253.6473d3525fa96.jpg'
  ]
  const [progress, setProgress] = useState(0); // State to track the progress
  const el = useRef<any>();
  const loader = useRef<any>();
  const slider=useRef<any>();
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

  useLayoutEffect(() => {

    let smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true
    });
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray('.panel');
      
      // Horizontal 
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: slider.current,
          pin: true, 
          scrub: 3,
          snap: 1 / (panels.length - 1), 
          end: () => "+=" + slider.current.offsetWidth, 
          // markers: true, // Optional: for debugging
        },
      });
    });
  
    return () => {
      ctx.revert(); // Cleanup ScrollTrigger

      smoother.kill();
    };
  }, []);

  useGSAP(() => {

    setTimeout(() => {

      const progressObj = { progress: 1 };

      gsap.to(progressObj, {
        progress: 100, 
        duration: 3,
        ease: "power3.inOut",

        yoyo: true,
        onUpdate: function () {
  
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
          {progress}% 
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
  
        <section className="Shop_container">
          <h1 className="Shop-head">Visual Pharmacy</h1>

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
        {/* Image Scroll Trigger */}
        <h1 className="More_Work">More Work</h1>
        <section  ref={slider} style={{display:'flex',flexDirection:"row",padding:10,columnGap:10,cursor:'pointer'}}>
           {
            projectsdata.map((item,index)=>(
              <img data-lag={Math.floor(Math.random()*0.9)} data-speed={Math.floor(Math.random()*0.9)}  className="panel" style={{objectFit:"cover"}} key={index} src={item}/>
            ))
           }
        </section>
        {/* Image Scroll Trigger */}
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
