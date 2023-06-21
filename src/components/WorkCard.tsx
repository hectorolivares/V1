import IonIcon from "@reacticons/ionicons";

export const WorkCard = ({
  image,
  title,
  desc,
  type,
  site,
  code,
  start,
  end,
}: {
  image: string;
  title: string;
  desc: string;
  type: string;
  site: string;
  code: string;
  start: number;
  end: number;
}) => {
  const openLink = () => {
    window.open(site, "_blank"); // Abre el enlace en una nueva pestaña
  };

  return (
    <div
      style={{ gridColumnStart: `${start}`, gridColumnEnd: `${end}` }}
      className="cursor-pointer rounded-2xl p-5 mb-20 laptop:h-fit desktop:h-fit z-40 hover:-translate-y-4 hover:bg-gray-800 hover:bg-opacity-40 transition duration-300 ease-out"
    >
      <div
        className="laptop:h-[450px] desktop:h-[600px] aspect-square laptop:aspect-auto"
        onClick={openLink}
      >
        <img
          className="h-full w-full rounded-xl object-cover"
          src={`/${image}`}
          alt="Time Tracking Dashboard Cover"
        />
      </div>

      <div className="space-y-4 mt-8" onClick={openLink}>
        <div className="flex flex-col-reverse laptop:flex-row laptop:items-center">
          <h4 className="text-2xl font-normal">{title}</h4>
          <p className="text-xs w-fit mb-4 laptop:mb-0 laptop:ml-4 bg-my-lila bg-opacity-20 py-1 px-3 rounded-lg text-[#641BFF] font-mono uppercase">
            {type}
          </p>
        </div>
        <p className="text-sm font-mono uppercase opacity-50">{desc}</p>
      </div>
      <button className={`${!code ? "hidden" : ""} mt-6 w-full laptop:w-fit`}>
        <a
          className="bg-slate-800 bg-opacity-80 flex items-center justify-center border border-stone-700 py-3 laptop:px-4 laptop:py-2 rounded-lg font-mono uppercase text-xs hover:bg-my-lila hover:border-my-lila transition duration-200 ease-in-out"
          href={`${code}`}
          target="_blank"
        >
          <p className="mr-2">View Code</p>
          <IonIcon className="text-sm" name="code-slash" />
        </a>
      </button>
    </div>
  );
};
