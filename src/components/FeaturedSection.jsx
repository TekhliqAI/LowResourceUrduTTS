import React from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedSection = () => {
  return (
    <section className="px-36 border-b-[1px]  border-white border-opacity-20">
      <FeaturedCard
        title="Lorem ipsum dolor sit amet consectetur"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eos ex optio dicta, quam, quis deserunt praesentium eius ullam reprehenderit in similique ratione exercitationem perspiciatis? Mollitia harum eius ccusamus ad
      "
        imgUrl={
          "https://images.unsplash.com/photo-1703249181171-22037ab2afd8?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <FeaturedCard
        imgRight
        title="Lorem ipsum dolor sit amet consectetur"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eos ex optio dicta, quam, quis deserunt praesentium eius ullam reprehenderit in similique ratione exercitationem perspiciatis? Mollitia harum eius ccusamus ad
      "
        imgUrl={
          "https://images.unsplash.com/photo-1703244355676-95561db44fb1?q=80&w=1866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />

      <FeaturedCard
        title="Lorem ipsum dolor sit amet consectetur"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eos ex optio dicta, quam, quis deserunt praesentium eius ullam reprehenderit in similique ratione exercitationem perspiciatis? Mollitia harum eius ccusamus ad
      "
        imgUrl={
          "https://plus.unsplash.com/premium_photo-1675019220099-670253e26a71?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    </section>
  );
};

export default FeaturedSection;
