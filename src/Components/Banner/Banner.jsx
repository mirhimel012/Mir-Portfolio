import { Button, Typography } from "@material-tailwind/react";
import banner from "../../assets/banner.png";
import { Typewriter } from "react-simple-typewriter";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import webresume from "../../assets/Mir_Resume.pdf";

const Banner = () => {
  return (
    <div id="home" className="my-32 px-4 md:px-10">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="flex-1 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-center lg:text-left">
            I am{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-md">
              Himel Mir
            </span>
          </h1>

          <h2 className="mt-4 text-center lg:text-left">
            <span className="inline-block text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wide animate-pulse">
              <Typewriter
                words={[
                  "Jr. Web Developer",
                  "AI Enthusiast",
                  "React.js Developer",
                  "Front-End Developer",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-700 text-center lg:text-left leading-relaxed">
            As the tech landscape evolves, I’m focusing on Artificial Intelligence.
            With a strong foundation in Full-Stack Web Development and Python,
            I aim to build intelligent, data-driven applications that solve real-world problems.
          </p>

          {/* Contact Info */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-lg font-medium">
            <div className="flex items-center gap-2">
              <IoIosMail className="text-2xl text-blue-600" />
              <p>mirhimel012@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <IoLogoWhatsapp className="text-2xl text-green-600" />
              <p>+8801764630254</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href={webresume} download="Himel_Mir_Resume.pdf" target="_blank">
              <Button className="py-4 px-6 bg-blue-500 hover:bg-blue-800 flex gap-2 items-center text-white text-sm">
                <FaDownload className="text-lg" /> Download Resume
              </Button>
            </a>
            <a
              href="https://github.com/mirhimel012"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outlined"
                className="flex items-center border-blue-500 hover:bg-blue-700 hover:text-white gap-2 text-sm"
              >
                <FaGithub className="text-xl" /> GitHub
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/mirhimel012/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outlined"
                className="flex items-center border-blue-500 hover:bg-blue-700 hover:text-white gap-2 text-sm"
              >
                <FaLinkedin className="text-xl" /> LinkedIn
              </Button>
            </a>

          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={banner}
            alt="Profile Banner"
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>

  );
};

export default Banner;
