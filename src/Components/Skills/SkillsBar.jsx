import { Progress } from "@material-tailwind/react";

const SkillsBar = ({ name, value, color }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out">
      <div className="flex justify-between mb-1">
        <span className="text-base font-semibold text-gray-700">{name}</span>
        <span className="text-sm font-medium text-gray-600">{value}%</span>
      </div>
      <Progress
        value={value}
        size="lg"
        color={color}
        className="rounded-full h-4"
      />
    </div>
  );
};

export default SkillsBar;

