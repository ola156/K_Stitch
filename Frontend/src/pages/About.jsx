import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-3xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt="about"
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quae
            corporis odio fugit illo. Dolore vero quaerat rem doloribus enim
            distinctio, molestiae, accusamus nisi dolor debitis beatae obcaecati
            est aspernatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            deserunt qui! Aut veritatis laborum a unde, tenetur sit ducimus
            voluptate omnis. Dolorum, natus? Ratione eligendi porro veritatis
            dignissimos quos a.
          </p>
          <b className="text-gray-800">Our Aim</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            dignissimos in ipsum iusto sequi, iure nulla ab ipsam neque soluta,
            voluptatum quis iste sapiente tempora quia. Necessitatibus sequi
            saepe natus!
          </p>
        </div>
      </div>
      <div className="text-2xl py-4">
        <Title text1={"Why Choose"} text2={"Us"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            voluptates at quia architecto minus quidem itaque, porro laudantium
            sequi facilis ab veritatis placeat molestias rem nihil, facere
            eaque, dicta aut.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            voluptates at quia architecto minus quidem itaque, porro laudantium
            sequi facilis ab veritatis placeat molestias rem nihil, facere
            eaque, dicta aut.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
