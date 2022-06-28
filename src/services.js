import React from "react";
import imagData from "./imgarray";
import Card from "./card.js";
let Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {imagData.map((value) => {
                return <Card imgsrc={value.imagePath} title={value.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
