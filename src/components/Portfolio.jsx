import React from "react";
import calorie from "../assets/portfolio/calorie.jpg";
import workhour from "../assets/portfolio/workhour.jpg";
import quiz from "../assets/portfolio/quiz.jpg";
import infoscreen from "../assets/portfolio/infoscreen.jpg";
import converter from "../assets/portfolio/converter.jpg";
import aava from "../assets/portfolio/aava.jpg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: calorie,
      link: 'https://op2-white.github.io/Frontend/',
      repo: 'https://github.com/OP2-White'
    },
    {
      id: 2,
      src: infoscreen,
      link: 'https://eha-infoscreen.vercel.app/',
      repo: 'https://github.com/EHA-Display-Terminal-Team/eha-infoscreen'
    },
    {
      id: 3,
      src: aava,
      link: 'https://aava.vercel.app/',
      repo: 'https://github.com/Junction2024/Aava'
    },
    {
      id: 4,
      src: converter,
      link: '',
      repo: 'https://github.com/HarryNguye/CurrencyConverter'
    },
    {
      id: 5,
      src: quiz,
      link: '',
      repo: 'https://github.com/HarryNguye/QuizApp'
    },
    {
      id: 6,
      src: workhour,
      link: '',
      repo: 'https://github.com/HarryNguye/Workhourtracker'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
