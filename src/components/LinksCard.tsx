import "./LinksCard.css";
export const LinksCard = () => {
  return (
    <div className=" w-full max-w-[385px] h-full max-h-[612px] flex flex-col items-center bg-DarkGrey rounded-xl py-[40px]">
      <img
        src="./images/avatar-jessica.jpeg"
        alt="avatar profile jessica"
        className="rounded-full w-[88px] h-[88px]  mb-[26px] "
      />
      <h1 className="text-White text-2xl font-medium mb-[6px]">
        Jessica Randall
      </h1>
      <h2 className="text-PrimaryGreen font-semibold text-sm mb-[26px]">
        London, United Kingdom
      </h2>
      <h3 className="text-White font-light text-center text-sm mb-[25px] ">
        "Front-end developer and avid reader."
      </h3>
      <ul className="flex flex-col items-center w-full gap-[17px]">
        <li className="w-full flex justify-center text-center">
          <a
            href="https://github.com/LuisAgreda"
            target="_blank"
            className="w-[84%] md:w-[79%] flex justify-center py-[12px] bg-Grey
          text-White text-sm font-bold rounded-md duration-500 ease-in-out hover:text-DarkGrey hover:bg-PrimaryGreen"
          >
            GitHub
          </a>
        </li>
        <li className="w-full flex justify-center text-center">
          <a
            href="https://github.com/LuisAgreda"
            target="_blank"
            className="w-[84%] md:w-[79%] flex justify-center py-[12px] bg-Grey
          text-White text-sm font-bold rounded-md duration-500 ease-in-out hover:text-DarkGrey hover:bg-PrimaryGreen "
          >
            Frontend Mentor
          </a>
        </li>
        <li className="w-full flex justify-center text-center">
          <a
            href="https://github.com/LuisAgreda"
            target="_blank"
            className="w-[84%] md:w-[79%] flex justify-center py-[12px] bg-Grey
          text-White text-sm font-bold rounded-md duration-500 ease-in-out hover:text-DarkGrey hover:bg-PrimaryGreen"
          >
            LinkedIn
          </a>
        </li>
        <li className="w-full flex justify-center text-center">
          <a
            href="https://github.com/LuisAgreda"
            target="_blank"
            className="w-[84%] md:w-[79%] flex justify-center py-[12px] bg-Grey
          text-White text-sm font-bold rounded-md duration-500 ease-in-out hover:text-DarkGrey hover:bg-PrimaryGreen "
          >
            Twitter
          </a>
        </li>
        <li className="w-full flex justify-center text-center">
          <a
            href="https://github.com/LuisAgreda"
            target="_blank"
            className="w-[84%] md:w-[79%] flex justify-center py-[12px] bg-Grey
          text-White text-sm font-bold rounded-md duration-500 ease-in-out hover:text-DarkGrey hover:bg-PrimaryGreen "
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};
