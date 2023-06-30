export const TechCard = ({
  name,
  type,
  image,
}: {
  name: string;
  type: string;
  image: string;
}) => {
  let colorType = "";

  if (type === "Language") {
    colorType = "text-[#ff1b67] bg-[#ff1b67]";
  } else if (type === "Framework") {
    colorType = "text-[#1b6fff] bg-[#1b6fff]";
  } else if (type === "UI/UX") {
    colorType = "text-[#d51bff] bg-[#d51bff]";
  } else if (type === "Tool") {
    colorType = "text-[#1bffa8] bg-[#1bffa8]";
  }

  return (
    <div
      className="group bg-gray-800 bg-opacity-30 border border-gray-700 hover:border-my-lila border-opacity-30 w-full cursor-pointer rounded-2xl flex flex-col items-center justify-center p-4 space-y-5 transition duration-200 ease-in-out"
    >
      <div className="bg-gray-800 bg-opacity-40 p-4 rounded-lg border border-gray-700 border-opacity-40 group-hover:scale-110 transition duration-200 ease-in-out">
        <img className="w-[38px]" src={`/${image}-icon.svg`} alt="" />
      </div>

      <h3 className="text-lg">{name}</h3>

      <p
        className={`${colorType} font-mono uppercase text-xs bg-opacity-20 py-1 px-3 rounded-lg`}
      >
        {type}
      </p>
    </div>
  );
};
