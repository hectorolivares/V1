import IonIcon from "@reacticons/ionicons";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { HeaderMobile } from "./components/HeaderMobile";
import { WorkCard } from "./components/WorkCard";

export const Home = () => {

  //* show and copy to clipboard
  const [clipboardMessage, setClipboardMessage] = useState(false);
  const email = "hectorolivares033@gmail.com";

  const enableLink = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      window.location.href = `mailto:${email}`;
    } else {
      copyText(email);
    }
  };

  const copyText = (email: string) => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        console.log("Texto copiado al portapapeles");
      })
      .catch((error) => {
        console.error("Error al copiar el texto:", error);
      });
  };

  //* get json data
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Header />
      <HeaderMobile />

      <div
        className={`${
          clipboardMessage && "laptop:animate-clipboard"
        } fixed flex items-center bg-my-lila z-50 p-3 rounded-full left-1/2 top-[110%] -translate-x-1/2 -translate-y-1/4`}
        onAnimationEnd={() => setClipboardMessage(false)}
      >
        <p className="text-white font-mono text-sm">
          <span className="underline">{email}</span> copied to clipboard
        </p>
        <IonIcon name="checkmark-circle" className="text-green-300 ml-2" />
      </div>

      <main className="text-white m-auto w-full px-6 laptop:max-w-[1148px] desktop:max-w-[1548px]">
        <section
          id="home"
          className="w-full fade-in-section flex items-start justify-end mb-40 h-[400px] flex-col laptop:items-end laptop:h-[620px] desktop:h-[880px] laptop:flex-row laptop:justify-between"
        >
          <h2 className="text-3xl mobile:text-[36px] tablet:text-[62px] desktop:text-[86px] leading-tight font-medium align-baseline">
            <span className="opacity-20 -z-10   ">Hi, my name is</span><br />
            Héctor Olivares
            <br />
            <span className="opacity-20">I’m a</span> Web Developer.
          </h2>

          <ul className="flex align-baseline flex-wrap gap-y-9 mt-10 desktop:mb-7 laptop:mb-5 text-sm">
            <li className="">
              <a
                className="mr-3 cursor-pointer desktop:mr-12 bg-white bg-opacity-5 rounded-full px-5 py-3 hover:bg-my-lila hover:bg-opacity-100 transition duration-300 ease-out"
                onClick={() => {
                  enableLink();
                  setClipboardMessage(true);
                }}
              >
                {/Mobi|Android/i.test(navigator.userAgent)
                  ? "Email ↗️"
                  : "Copy Email"}
              </a>
            </li>
            <li className="">
              <a
                className="mr-3 desktop:mr-12 bg-white bg-opacity-5 rounded-full px-5 py-3 hover:bg-my-lila hover:bg-opacity-100 transition duration-300 ease-out"
                href="https://github.com/hectorolivares"
                target="_blank"
              >
                Github ↗
              </a>
            </li>
            <li className="">
              <a
                className="bg-white bg-opacity-5 rounded-full px-5 py-3 hover:bg-my-lila hover:bg-opacity-100 transition duration-300 ease-out"
                href="https://www.linkedin.com/in/hectorolivaresn/"
                target="_blank"
              >
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </section>

        <section
          id="work"
          className="fade-in-section mb-40 laptop:grid laptop:grid-cols-8 laptop:grid-rows-3 laptop:gap-x-24 laptop:gap-y-36 desktop:gap-x-28 desktop:gap-y-36"
        >
          {data.map((item, index) => (
            <WorkCard
              key={index}
              title={item.title}
              desc={item.description}
              type={item.type}
              link={item.link}
              image={item.image}
              start={item.start}
              end={item.end}
            />
          ))}
        </section>

        <section
          id="about"
          className="fade-in-section laptop:grid laptop:grid-cols-5 laptop:grid-rows-1 gap-10"
        >
          <div className="bg-gray-500 bg-opacity-5 rounded-xl col-span-3 p-7 font-extralight mb-6 desktop:mb-0 desktop:p-14 ">
            <div className=" font-light desktop:mb-14">
              <h3 className="text-3xl mb-14 font-normal">About</h3>
              <p className="mb-14 desktop:text-[17px] desktop:mb-0">
                I am Héctor Olivares, a web developer with experience in
                TypeScript, React, and Tailwind CSS, and I am also proficient in
                designing for web pages or applications. Currently, I am
                studying Computer Engineering at UNAM. I am passionate about
                programming and always strive to stay up-to-date with the latest
                trends and technologies to improve my skills as a developer. I
                consider myself a very committed worker and enjoy collaborating
                with others to achieve common goals.
              </p>
            </div>

            <div className="tablet:columns-2 desktop:columns-2 laptop:text-sm desktop:text-base">
              <div className="">
                <div className="mb-8">
                  <h5 className="text-[18px] font-semibold mb-3">Education</h5>
                  <p className="font-medium mb-2">
                    Universidad Nacional Autónoma de México (National Autonomous
                    University of Mexico)
                  </p>
                  <p className="opacity-60 mb-2">
                    BE in Computer Engineering, with specialization in Software
                    Engineering
                  </p>
                  <p className="opacity-60">August 2020 - Present</p>
                </div>
                <div className="mb-8 desktop:mb-0">
                  <h5 className="text-[18px] font-semibold mb-3">Languages</h5>
                  <p className="opacity-60 mb-2 leading-8">
                    English (Intermediate)
                    <br />
                    Spanish (Native)
                  </p>
                </div>
              </div>

              <div className="">
                <div className="mb-7">
                  <h5 className="text-[18px] font-semibold mb-3">Experience</h5>
                  <p className="font-medium mb-2">Freelance Web Developer</p>
                  <p className="opacity-60 mb-2">
                    Design and development of websites that help to advertise
                    projects and/or businesses of the people who work with me.
                  </p>
                  <p className="opacity-60">July 2022 - Present</p>
                </div>
                <div>
                  <h5 className="text-[18px] font-semibold mb-3">Interests</h5>
                  <p className="opacity-60 mb-2">
                    App development, game development, digital content creation,
                    running, football, sports, reading, movies, philosophy and
                    architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-500 bg-opacity-5 rounded-xl laptop:col-span-2 h-fit desktop:h-auto p-7 desktop:p-14 font-mono text-sm">
            <h3 className="text-3xl mb-14 font-sans font-normal">Skills</h3>
            <div className="uppercase mb-10">
              <h5 className="font-bold mb-5 ita">Programming languages</h5>
              <p className="font-thin leading-8">
                TypeScript, JavaScript(ES6), HTML, CSS/Scss/Sass, Python
              </p>
            </div>
            <div className="uppercase mb-10">
              <h5 className="font-bold mb-5 ita">
                Frameworks/Libraries/Others
              </h5>
              <p className="font-thin leading-8">
                React.js, Vue.js, Tailwind CSS, Bootstrap, Node.js, Webpack,
                Netlify, Vercel, NPM, Git, Command line
              </p>
            </div>
            <div className="uppercase mb-10">
              <h5 className="font-bold mb-5 ita">UX/UI Design</h5>
              <p className="font-thin leading-8">
                Responsive Design, Prototyping, Figma, Photoshop, Illustrator
              </p>
            </div>
            <div className="uppercase">
              <h5 className="font-bold mb-5 ita">Currently Learning</h5>
              <p className="font-thin leading-8">Next.js, SQL, Java</p>
            </div>
          </div>
        </section>

        <div className="flex h-[200px]">
          <a
            className="bg-white bg-opacity-5 flex items-center m-auto rounded-full px-5 py-3 hover:bg-my-lila hover:bg-opacity-100 transition duration-300 ease-out"
            href="/HectorOlivaresCV.pdf"
            target="_blank"
          >
            <p className="mr-2">Download CV</p>
            <IonIcon name="download" />
          </a>
        </div>

        <section id="contact" className="py-40 laptop:py-24 desktop:py-40">
          <h2 className="text-4xl leading-relaxed text-center">
            Get in touch by{" "}
            <a
              onClick={() => {
                enableLink();
                setClipboardMessage(true);
              }}
              className="text-my-lila hover:underline cursor-pointer"
            >
              email
            </a>{" "}
            or{" "}
            <a
              className="text-my-lila hover:underline"
              href="https://www.linkedin.com/in/hectorolivaresn/"
              target="_blank"
            >
              LinkedIn
            </a>
          </h2>
        </section>
      </main>
      <Footer />
    </>
  );
};
