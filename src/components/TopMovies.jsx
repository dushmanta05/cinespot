import React from "react";

import fastxImg from "../assets/images/thumbnail/fastx.jpg";
import cocoImg from "../assets/images/thumbnail/coco.jpg";
import muzzleImg from "../assets/images/thumbnail/muzzle.jpg";
import retributionImg from "../assets/images/thumbnail/retribution.jpg";
import schindlerlistImg from "../assets/images/thumbnail/schindlerslist.jpg";
import shawshankImg from "../assets/images/thumbnail/shawshank.jpg";
import Card from "./Card";

const arrImg = [
  fastxImg,
  cocoImg,
  muzzleImg,
  retributionImg,
  schindlerlistImg,
  shawshankImg,
];

const TopMovies = () => {
  return (
    <div className="container">
      <h3>Top Movies</h3>
      <div className="row">
        {arrImg.map((img, index) => {
          return <Card img={img} />;
        })}
      </div>
    </div>
  );
};

export default TopMovies;
