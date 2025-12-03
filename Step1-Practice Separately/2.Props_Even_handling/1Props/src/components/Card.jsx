import { Bookmark } from "lucide-react";

const Card = (props) => {

  return (
    <div className="h-[350px] w-[250px] bg-white border border-gray-200 rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow duration-300">

      {/* Top Section */}
      <div className="flex justify-between items-center mb-2">
        <img
          className="w-10 h-10 rounded-full border object-cover"
          src={props.brandLogo}
          alt="Company Logo"
        />

        <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-all">
          <span>Save</span>
          <Bookmark className="w-4 h-4 cursor-pointer" />
        </button>
      </div>
      
      {/* Middle Section */}
      <div className="flex-grow my-2">
        <h3 className="text-xs text-gray-500 uppercase tracking-wide">
          {props.company} • <span className="text-[10px] text-gray-400">{props.datePosted}</span>
        </h3>

        <h2 className="text-lg font-semibold mb-2 leading-tight">
          Senior UI/UX Designer
        </h2>

        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-gray-100 px-2 py-1 rounded-full text-gray-700">
            Part-Time
          </span>
          <span className="bg-gray-100 px-2 py-1 rounded-full text-gray-700">
            Senior Level
          </span>
        </div>
      </div>

<hr className="my-2 border-gray-400" />

      {/* Bottom Section */}
      <div className="flex justify-between items-end pt-2 border-t border-gray-100">
        <div>
          <h3 className="text-sm font-bold">$200-250k</h3>
          <p className="text-xs text-[10px] text-gray-500">Dhaka, Bangladesh</p>
        </div>

        <button className="bg-black text-white px-2 py-1 rounded-lg font-medium text-sm hover:bg-blue-700 cursor-pointer transition-colors">
          Apply Now
        </button>
      </div>

    </div>
  );
};

export default Card;
