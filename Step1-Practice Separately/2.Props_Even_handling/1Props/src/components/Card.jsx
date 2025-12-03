import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="h-[350px] w-full bg-white border border-gray-200 rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">

      {/* Top */}
      <div className="flex justify-between items-center">
        <img
          className="w-12 h-12 rounded-full p-1 border object-contain"
          src={props.brandLogo}
          alt="logo"
        />

        <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 text-sm font-medium">
          Save <Bookmark className="w-4 h-4 cursor-pointer" />
        </button>
      </div>

      {/* Middle */}
      <div className="mt-3 flex-1 mt-8">
        <h3 className="text-xs text-gray-500 font-medium">
          {props.company} • <span className="text-gray-400">{props.datePosted}</span>
        </h3>

        <h2 className="text-lg font-semibold mt-1 leading-snug">
          {props.post}
        </h2>

        <div className="flex gap-2 mt-3 flex-wrap">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            {props.tag1}
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            {props.tag2}
          </span>
        </div>
      </div>

      <hr className="my-3 border-gray-200" />

      {/* Bottom */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-base font-bold text-gray-900">{props.pay}</h3>
          <p className="text-xs text-gray-500">{props.location}</p>
        </div>

        <button className="bg-black cursor-pointer text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-700 transition">
          Apply
        </button>
      </div>

    </div>
  );
};

export default Card;
