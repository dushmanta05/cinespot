import React from "react";

import fastxImg from "../assets/images/thumbnail/fastx.jpg";
import cocoImg from "../assets/images/thumbnail/coco.jpg";
import muzzleImg from "../assets/images/thumbnail/muzzle.jpg";
import retributionImg from "../assets/images/thumbnail/retribution.jpg";
import schindlerlistImg from "../assets/images/thumbnail/schindlerslist.jpg";
import shawshankImg from "../assets/images/thumbnail/shawshank.jpg";
import Card from "./Card";

const arrImg = [
  { image: fastxImg, title: "Fast X", year: 2023, rating: 5.6 },
  { image: cocoImg, title: "Coco", year: 2023, rating: 5.6 },
  { image: muzzleImg, title: "Muzzle", year: 2023, rating: 5.6 },
  { image: retributionImg, title: "Retribution", year: 2023, rating: 5.6 },
  { image: schindlerlistImg, title: "Schindler List", year: 2023, rating: 5.6 },
  {
    image: shawshankImg,
    title: "Shawshank",
    year: 2023,
    rating: 5.6,
  },
];

const TopMovies = () => {
  return (
    <div className="container">
      <h3>Top Movies</h3>
      <div className="row">
        {arrImg.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TopMovies;
