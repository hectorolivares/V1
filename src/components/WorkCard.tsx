
export const WorkCard = ({
  image,
  title,
  desc,
  type,
  link,
  start,
  end,
}: {
  image: string;
  title: string;
  desc: string;
  type: string;
  link: string;
  start: number;
  end: number;
}) => {
  return (
    <div
      style={{ gridColumnStart: `${ start }`, gridColumnEnd: `${ end }` }}
      className="mb-20 laptop:h-[450px] desktop:h-[600px] z-40"
    >
      <a href={`${ link }`} target="_blank">
        <div className="laptop:h-[450px] desktop:h-[600px] aspect-square laptop:aspect-auto">
          <img
            className="h-full w-full rounded-xl object-cover hover:-translate-y-4 transition duration-300 ease-out"
            src={`/${ image }`}
            alt="Time Tracking Dashboard Cover"
          />
        </div>

        <div className="mt-4">
          <h4 className="text-2xl font-normal mb-3 hover:text-my-lila transition duration-300 ease-out">
            { title }
          </h4>
          <p className="text-sm font-mono uppercase opacity-50">{ desc }</p>
          <p className="text-sm text-[#641BFF] font-mono uppercase mt-3">{ type }</p>
        </div>
      </a>
    </div>
  );
};
