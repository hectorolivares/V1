import IonIcon from "@reacticons/ionicons";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { HeaderMobile } from "./components/HeaderMobile";
import { WorkCard } from "./components/WorkCard";
import { TechCard } from "./components/TechCard";
import { Fade, Slide } from "react-awesome-reveal";

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
  const [techData, setTechData] = useState<any[]>([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
    fetch("tech-data.json")
      .then((res) => res.json())
      .then((techData) => setTechData(techData));
  }, []);

  return (
    <>
      <Header />
      <HeaderMobile />

      <div
        className={`${
          clipboardMessage ? "laptop:animate-clipboard visible" : "invisible"
        } fixed flex items-center bg-my-lila z-50 p-3 rounded-full left-1/2 top-[110%] -translate-x-1/2 -translate-y-1/4`}
        onAnimationEnd={() => setClipboardMessage(false)}
      >
        <p className="text-white font-mono text-sm">
          <span className="underline">{email}</span> copied to clipboard
        </p>
        <IonIcon name="checkmark-circle" className="text-green-300 ml-2" />
      </div>

      <main className="text-white m-auto w-full px-6 laptop:max-w-[932px] desktop:max-w-[1312px] laptop:pt-[84px]">
        <section
          id="home"
          className="w-full flex items-start justify-center flex-col space-y-14 h-screen"
        >
          <Fade cascade direction="up" damping={1}>
            <div className="space-y-8">
              <h2 className="text-3xl laptop:text-6xl desktop:text-7xl  leading-tight font-medium align-baseline">
                I'm Héctor Olivares.
                <br />I design and built websites.
              </h2>

              <p className="text-my-lila-light text-sm laptop:text-base laptop:w-1/2 opacity-60">
                I'm a web developer with experience in front-end and back-end
                capable. Specialized in React, TypeScript, and Tailwind. I
                create efficient and visually appealing web solutions for an
                exceptional user experience.
              </p>
            </div>
            <a className="" href="https://tally.so/r/3xjgRy">
              <button className="w-full laptop:w-fit bg-my-lila text-sm laptop:text-base rounded-full px-5 py-4 laptop:py-3 hover:scale-110 transition duration-200 ease-out">
                Let's work together
              </button>
            </a>
          </Fade>
        </section>

        <section
          id="work"
          className="fade-in-section mb-40 laptop:grid laptop:grid-cols-2 laptop:gap-14 desktop:gap-20"
        >
          {data.map((item, index) => (
            <Fade duration={1300} triggerOnce>
              <WorkCard
                key={index}
                title={item.title}
                desc={item.description}
                type={item.type}
                site={item.site}
                code={item.code}
                image={item.image}
                start={item.start}
                end={item.end}
              />
            </Fade>
          ))}
        </section>

        <section id="about" className="space-y-10 mb-20">
          <h2 className="text-xl text-center font-mono uppercase tracking-widest">
            About me
          </h2>

          <div className=" mb-6 desktop:mb-0 laptop:space-y-32  ">
            <Fade direction="up" triggerOnce cascade>
              <div className="flex items-center justify-center desktop:mb-14">
                <p className="mb-14 text-lg laptop:text-xl font-normal leading-[2rem] laptop:leading-[2.5rem] desktop:mb-0 laptop:w-[75%]">
                  Hi, I am Héctor Olivares, a web developer with experience in
                  TypeScript, React, and Tailwind CSS. Also, I am proficient in
                  designing for web pages or applications. Currently, I am
                  studying Computer Engineering at UNAM. I am passionate about
                  programming and always strive to stay up-to-date with the
                  latest trends and technologies to improve my skills as a
                  developer. I consider myself a very committed worker and enjoy
                  collaborating with others to achieve common goals.
                </p>
              </div>

              <div className="flex laptop:justify-end">
                <div className="laptop:flex laptop:justify-between space-y-12 laptop:space-y-0 text-center laptop:text-sm desktop:text-base">
                  <div className="mb-8 space-y-3 flex-1">
                    <div className="flex items-center justify-center space-x-3">
                      <IonIcon className="text-lg" name="school" />
                      <h5 className="text-lg font-medium">Education</h5>
                    </div>
                    <p className="laptop:ml-8 ">
                      Universidad Nacional Autónoma de México (National
                      Autonomous University of Mexico)
                    </p>
                    <p className="font-light opacity-60 laptop:ml-8">
                      B.E. in Computer Engineering, with specialization in
                      Software Engineering
                    </p>
                    <p className="font-light opacity-60 laptop:ml-8">
                      August 2020 - Present
                    </p>
                  </div>

                  <div className="space-y-3 flex-1">
                    <div className="flex items-center justify-center space-x-3">
                      <IonIcon className="text-lg" name="language" />
                      <h5 className="text-lg font-medium">Languages</h5>
                    </div>
                    <p className="opacity-60 leading-7 font-light laptop:ml-8">
                      English (Intermediate)
                      <br />
                      Spanish (Native)
                    </p>
                  </div>

                  <div className="space-y-3 flex-1">
                    <div className="flex items-center justify-center space-x-3">
                      <IonIcon className="text-lg" name="flask" />
                      <h5 className="text-lg font-medium">Experience</h5>
                    </div>
                    <p className="">Freelance Web Developer</p>
                    <p className="font-light opacity-60">
                      Design and development of websites that help to advertise
                      projects and/or businesses of the people who work with me.
                    </p>
                    <p className="font-light opacity-60">July 2022 - Present</p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </section>

        <section className="space-y-16 mb-36">
          <h2 className="text-xl text-center font-mono uppercase tracking-widest">
            My tech stack
          </h2>

          <div className="grid grid-cols-2 gap-7 laptop:grid-cols-4 laptop:gap-10">
            {techData.map((item, index) => (
              <Slide direction="up" triggerOnce>
                <TechCard
                  key={index}
                  name={item.name}
                  type={item.type}
                  image={item.image}
                />
              </Slide>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center space-y-10">
            <a href="/HectorOlivaresCV.pdf" className="" target="_blank">
              <button className="flex items-center justify-center bg-white bg-opacity-5 rounded-full px-5 py-3 hover:bg-my-lila hover:bg-opacity-100 hover:scale-105 transition duration-200 ease-out">
                <p className="mr-2">Download CV</p>
                <IonIcon name="download" />
              </button>
            </a>
          </div>
        </section>

        <Fade direction="up" duration={1400} triggerOnce>
          <section
            id="contact"
            className="bg-gray-800 bg-opacity-30 border border-opacity-30 border-gray-700 py-20 rounded-2xl m-auto laptop:py-24 desktop:py-20 px-10"
          >
            <div className="flex flex-col justify-center items-center space-y-10 laptop:flex-row laptop:justify-between laptop:space-y-0">
              <h2 className="text-3xl">Get in touch</h2>

              <div className="flex flex-col-reverse items-center laptop:flex-row laptop:space-x-5">
                <button
                  className="bg-white bg-opacity-5 rounded-full px-5 py-3 w-full laptop:w-fit hover:bg-my-lila hover:bg-opacity-100 hover:scale-105 transition duration-200 ease-out"
                  onClick={() => {
                    enableLink();
                    setClipboardMessage(true);
                  }}
                >
                  {/Mobi|Android/i.test(navigator.userAgent)
                    ? "Email me"
                    : "Copy Email"}
                </button>

                <p className="my-4 laptop:my-0">Or</p>

                <a className="" href="https://tally.so/r/3xjgRy">
                  <button className="bg-my-lila rounded-full px-5 py-3 hover:scale-105 transition duration-200 ease-out">
                    Let's work together
                  </button>
                </a>
              </div>
            </div>
          </section>
        </Fade>
      </main>
      <Footer />
    </>
  );
};
