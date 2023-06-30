import { Link } from 'react-scroll';

export const Header = () => {

  return (
    <div className="fixed invisible laptop:visible w-full px-6 py-6 bg-my-bg bg-opacity-80 backdrop-blur-md items-center z-50">
      <div className="laptop:max-w-[1048px] desktop:max-w-[1348px] m-auto flex justify-between items-center text-white text-sm font-extralight font-mono uppercase">
        <h1 className="">
          <Link to="home" smooth={true} duration={700} href="">Héctor Olivares</Link>
        </h1>

        <nav>
          <div className="group flex justify-center text-center laptop:space-x-12 desktop:space-x-20 group-hover:opacity-50">
              <Link className='cursor-pointer hover:opacity-100 hover:bg-my-lila py-2 px-5 rounded-full transition duration-200 ease-in-out' to="work" smooth={true} duration={700} offset={-160}>Work</Link>
              <Link className='cursor-pointer hover:bg-my-lila py-2 px-5 rounded-full transition duration-200 ease-in-out' to="about" smooth={true} duration={700} offset={-100}>About</Link>
              <Link className='cursor-pointer hover:bg-my-lila py-2 px-5 rounded-full transition duration-200 ease-in-out' to="contact" smooth={true} duration={700}>Contact</Link>
              <a className='cursor-pointer hover:bg-my-lila py-2 px-5 rounded-full transition duration-200 ease-in-out' href="/HectorOlivaresCV.pdf" target="_blank">
                Resume
              </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
