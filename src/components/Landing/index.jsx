import React from "react";
import "./landing.css";
const Landing = ({ setFilter, filter }) => {
  return (
    <div className="container-landing">
      <img
        className="landing-img"
        src={window.location.origin + "/wallpaper.jpg"}
      />
      <div className="description">
        description
        <br />
        dfsghfdshngjfds <span>650$/ jour</span>
      </div>
      <div className="search">
        <h1>Search</h1>
        <input
          placeholder="model ........"
          onChange={(e) => {
            setFilter({ ...filter, text: e.target.value });
          }}
        />
        <input
          placeholder="Min price ........."
          onChange={(e) => {
            setFilter({ ...filter, min: parseInt(e.target.value) });
          }}
        />
        <input
          placeholder="Max price ....."
          onChange={(e) => {
            setFilter({ ...filter, max: parseInt(e.target.value) });
          }}
        />
        <br />
        <a href="http://127.0.0.1:5500/#search">Search</a>
      </div>
    </div>
  );
};

export default Landing;
