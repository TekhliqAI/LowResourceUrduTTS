import React from "react";
import FeaturedCard from "./FeaturedCard";

const featuredData = [
  {
    title: "TRANSFORMING INK INTO DIGITAL INTELLIGENCE",
    buttonTxt: "Discover More",
    text: "Revolutionize the way handwritten texts are digitized with our state-of-the-art OCR technology. Unleash the power to convert varied handwriting styles into accurate, editable digital formats effortlessly. Ideal for historical archives, medical records, and educational materials. Experience seamless integration of analog and digital worlds.",
    imgUrl: "/1.png",
    imgRight: false
  },
  {
    title: "REIMAGINING AUDIO WITH ARTIFICIAL BRILLIANCE",
    buttonTxt: "Explore Now",
    text: "Dive into the future of sound with our Real-Time Audio Translation and Generation tool. Break language barriers with instant translation, maintaining the speaker's original tone and emotion. Perfect for global interactions, this tool not only translates but transcends cultural differences, connecting the world through voice.",
    imgUrl: "/2.png",
    imgRight: true
  },
  {
    title: "SAFEGUARDING TRUTH IN THE DIGITAL REALM",
    buttonTxt: "Learn More",
    text: "Stay ahead of deepfakes with our cutting-edge AI detection system. Protect integrity in media, ensure authenticity in communication, and uphold truth in the digital age. Our advanced technology meticulously analyzes video content to identify and flag deepfakes, offering a shield against digital deception.",
    imgUrl: "/3.png",
    imgRight: false
  }
];

const FeaturedSection = () => {
  return (
    <section id="Projects" className="px-36 border-b-[1px] border-white border-opacity-20">
      {featuredData.map(({ title, buttonTxt, text, imgUrl, imgRight }, index) => (
        <FeaturedCard
          key={index}
          title={title}
          buttonTxt={buttonTxt}
          text={text}
          imgUrl={imgUrl}
          imgRight={imgRight}
        />
      ))}
    </section>
  );
};

export default FeaturedSection;
