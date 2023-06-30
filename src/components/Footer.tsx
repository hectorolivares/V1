import IonIcon from "@reacticons/ionicons";

export const Footer = () => {
  return (
    <footer className="text-white font-mono text-sm uppercase py-24 px-6 text-center w-full max-w-[1548px] m-auto space-y-6">
      <div className="text-2xl space-x-6">
        <a href="mailto:hectorolivares033@gmail.com">
          <IonIcon className="hover:text-my-lila transition duration-200 ease-in-out" name="mail" />
        </a>
        <a href="https://github.com/hectorolivares" target="_blank">
          <IonIcon className="hover:text-my-lila transition duration-200 ease-in-out" name="logo-github" />
        </a>
        <a href="https://www.linkedin.com/in/hectorolivaresn/" target="_blank">
          <IonIcon className="hover:text-my-lila transition duration-200 ease-in-out" name="logo-linkedin" />
        </a>
        <a href="https://twitter.com/hektorolivares" target="_blank">
          <IonIcon className="hover:text-my-lila transition duration-200 ease-in-out" name="logo-twitter" />
        </a>
      </div>
      <p>
        <span className="opacity-50">Design and built by</span> Héctor Olivares
      </p>

      <p className="">
        <span className="opacity-50">code is licensed under</span>{" "}
        <a
          className="opacity-100"
          href="https://github.com/hectorolivares/V1/blob/main/LICENSE"
        >
          MIT
        </a>
      </p>

      <p className="opacity-50">© 2023</p>
    </footer>
  );
};
