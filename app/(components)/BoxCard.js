import Image from "next/image";
import React from "react";


export default function BoxCard({ title, image }) {
  return (
    <div className="bg-image ripple overflow-hidden">
      <Image
        height={350}
        width={500}
        src={
          "https://www.allbanglanewspaper.co/blog/wp-content/uploads/Services-nidw-gov-bd.png"
        }
        className='w-100 card-hover'
        alt="image"
      />
      <a href="#!">
        <div
          className="mask"
        ></div>
      </a>
    </div>
  );
}
