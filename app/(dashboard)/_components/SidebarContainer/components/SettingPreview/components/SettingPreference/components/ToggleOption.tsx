import React from "react";

interface ToggleOptionProps {
  title: string;
  description: string;
  hasTopBorder?: boolean;
}

const ToggleOption: React.FC<ToggleOptionProps> = ({
  title,
  description,
  hasTopBorder,
}) => {
  return (
    <label
      className={`flex items-center gap-3 cursor-pointer group ${
        hasTopBorder ? "mt-[14px] pt-[14px] border-t border-gray-200" : ""
      }`}
    >
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <div className="flex-col">
        <h3 className="font-sans text-sm/snug font-medium text-gray-700">
          {title}
        </h3>
        <p className="font-sans text-xs/6 text-gray-500">{description}</p>
      </div>
    </label>
  );
};

export default ToggleOption;
