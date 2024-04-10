import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home-sec-one">
        <Header />
        <div
          className="container home-sec-one-title text-center"
          style={{ color: "white", fontSize: "3.5rem", fontWeight: "bold" }}
        >
          <div>
            Design Your <span style={{ color: "#01DDE9" }}>Ideas</span>
          </div>
          <div>
            {" "}
            into <span style={{ color: "#01DDE9" }}>Visuals</span>
          </div>
        </div>
      </div>

      <div className="home-sec-two">
        
      </div>
    </>
  );
};

export default Home;
