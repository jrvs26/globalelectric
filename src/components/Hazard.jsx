import React from "react";
import HazardPhoto from "../images/hazard.jpg";

function Hazard() {
  return (
    <div>
      <img
        src={HazardPhoto}
        alt="divider"
        style={{ height: "40px", width: "100%", objectFit: "cover" }}
      />
    </div>
  );
}

export default Hazard;
