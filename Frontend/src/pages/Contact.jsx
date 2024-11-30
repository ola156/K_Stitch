import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10  border-t">
        <Title text1={"Contact"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          alt="con"
          className="w-full max-w-[480px]"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold">Our Store</p>
          <p className="text-gray-500">23 gte street off goola extension</p>
          <p>
            Tel: 080 5544 567 <br /> agbool@gmail.com
          </p>
          <p>Professional Designers</p>
          <p>Learn More about our team</p>
          <p>Visit our Store</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
