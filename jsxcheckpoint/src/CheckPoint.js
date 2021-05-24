import React, { Component } from "react";
import imageInSrc from "../src/imageInSrc.jpg";

class CheckPoint extends Component {
  render() {
    return (
      <>
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
          <h1 className="title red">Nader BEN HAMMOUDA</h1>

          <br />

          <img src={imageInSrc} />

          <br />

          <img src="/imageInPublic.jpg" />
        </div>

        <video width="320" height="240" controls>
          <source src="myVideo.mp4" type="video/mp4"></source>
        </video>
      </>
    );
  }
}

export default CheckPoint;
