import { useState } from "react";
import { Link } from "react-scroll";

export const HeaderMobile = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div
        className={`${
          isActive ? "bg-opacity-0" : "bg-opacity-80"
        } fixed w-full flex items-center justify-between py-1 px-6 top-0 bg-my-bg backdrop-blur-sm z-50 visible laptop:invisible text-white font-mono uppercase`}
      >
        <h1 className="text-sm">
          <Link to="home" smooth={true} duration={700} href="">
            Héctor Olivares
          </Link>
        </h1>

        <button
          onClick={handleClick}
          className={`hamburger hamburger--squeeze scale-50 ${
            isActive ? "is-active" : "active"
          } `}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      {/* <div className="visible laptop:invisible text-white font-mono uppercase fixed flex flex-col w-full h-full overflow-x-hidden">
      </div> */}

      <ul
        className={`${
          isActive ? "" : "hidden"
        }  fixed flex text-white uppercase font-mono w-full z-40 h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col justify-center text-center text-3xl bg-my-bg bg-opacity-80 backdrop-blur-sm`}
      >
        <li className="mb-10 desktop:mr-12 after:duration-100 before:duration-200 before:content-['['] before:mr-2 before:inline-block before:opacity-0 before:translate-x-4 before:transition before:hover:opacity-100 before:hover:translate-x-0 after:content-[']'] after:ml-2 after:inline-block after:opacity-0 after:-translate-x-4 after:transition after:hover:opacity-100 after:hover:translate-x-0">
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={700}
            offset={-160}
          >
            Work
          </Link>
        </li>
        <li className="mb-10 desktop:mr-12 after:duration-200 before:duration-200 before:content-['['] before:mr-2 before:inline-block before:opacity-0 before:translate-x-4 before:transition before:hover:opacity-100 before:hover:translate-x-0 after:content-[']'] after:ml-2 after:inline-block after:opacity-0 after:-translate-x-4 after:transition after:hover:opacity-100 after:hover:translate-x-0">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={700}
            offset={-100}
          >
            About
          </Link>
        </li>
        <li className="mb-10 desktop:mr-12 after:duration-200 before:duration-200 before:content-['['] before:mr-2 before:inline-block before:opacity-0 before:translate-x-4 before:transition before:hover:opacity-100 before:hover:translate-x-0 after:content-[']'] after:ml-2 after:inline-block after:opacity-0 after:-translate-x-4 after:transition after:hover:opacity-100 after:hover:translate-x-0">
          <Link onClick={handleClick} to="contact" smooth={true} duration={700}>
            Contact
          </Link>
        </li>
        <li className="desktop:mr-12 after:duration-200 before:duration-200 before:content-['['] before:mr-2 before:inline-block before:opacity-0 before:translate-x-4 before:transition before:hover:opacity-100 before:hover:translate-x-0 after:content-[']'] after:ml-2 after:inline-block after:opacity-0 after:-translate-x-4 after:transition after:hover:opacity-100 after:hover:translate-x-0">
          <a
            onClick={handleClick}
            href="/HectorOlivaresCV.pdf"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </>
  );
};
