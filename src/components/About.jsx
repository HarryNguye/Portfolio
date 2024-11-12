import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        I'm an IT student at Haaga-Helia with a strong drive to bring ideas to life through both front-end and back-end development. I love tackling challenges from scratch and creating user-friendly solutions that make a difference.

</p>

        <br />

        <p className="text-xl">
        I like to code matters from scratch and love the idea of bringing thoughts to life. <br /> <br />
        I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. <br /> <br />
        </p>
      </div>
    </div>
  );
};

export default About;
