import { Link } from 'react-scroll';

export const Header = () => {

  return (
    <div className="fixed invisible laptop:visible w-full px-6 py-6 bg-my-bg bg-opacity-80 backdrop-blur-md items-center z-50">
      <div className="laptop:max-w-[1148px] desktop:max-w-[1648px] m-auto flex justify-between text-white text-sm font-extralight font-mono uppercase">
        <h1 className="">
          <Link to="home" smooth={true} duration={700} href="">Héctor Olivares</Link>
        </h1>

        <nav>
          <ul className="flex justify-center text-center">
            <li className="laptop:mr-12 cursor-pointer opacity-60 hover:opacity-100 transition duration-200 ease-out after:duration-200 before:duration-200 before:content-['['] before:mr-2 before:inline-block before:opacity-0 before:translate-x-4 before:transition before:hover:opacity-100 before:hover:translate-x-0 after:content-[']'] after:ml-2 after:inline-block after:opacity-0 after:-translate-x-4 after:transition after:hover:opacity-100 after:hover:translate-x-0">
              <Link to="work" smooth={true} duration={700} offset={-160}>Work</Link>
            </li>
            <li className="opacity-60 cursor-pointer hover:opacity-100 transition duration-200 ease-out laptop:mr-12 after:duration-200 before:duration-200 before:content-['['] before:mr-2 before:inline-block before:opacity-0 before:translate-x-4 before:transition before:hover:opacity-100 before:hover:translate-x-0 after:content-[']'] after:ml-2 after:inline-block after:opacity-0 after:-translate-x-4 after:transition after:hover:opacity-100 after:hover:translate-x-0">
              <Link to="about" smooth={true} duration={700} offset={-100}>About</Link>
            </li>
            <li className="opacity-60 cursor-pointer hover:opacity-100 transition duration-200 ease-out laptop:mr-12 after:duration-200 before:duration-200 before:content-['['] before:mr-2 before:inline-block before:opacity-0 before:translate-x-4 before:transition before:hover:opacity-100 before:hover:translate-x-0 after:content-[']'] after:ml-2 after:inline-block after:opacity-0 after:-translate-x-4 after:transition after:hover:opacity-100 after:hover:translate-x-0">
              <Link to="contact" smooth={true} duration={700}>Contact</Link>
            </li>
            <a className="opacity-60 hover:opacity-100 hover:text-white transition duration-200 ease-out laptop:mr-12 after:duration-200 before:duration-200 before:content-['['] before:mr-2 before:inline-block before:opacity-0 before:translate-x-4 before:transition before:hover:opacity-100 before:hover:translate-x-0 after:content-[']'] after:ml-2 after:inline-block after:opacity-0 after:-translate-x-4 after:transition after:hover:opacity-100 after:hover:translate-x-0">
              <a href="/HectorOlivaresCV.pdf" target="_blank">
                Resume
              </a>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
};
