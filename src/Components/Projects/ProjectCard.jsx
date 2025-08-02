import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { VscDebugBreakpointData } from "react-icons/vsc";

const ProjectCard = ({ project }) => {
  const { name, image, server, client, technologies, features, description, link } =
    project;
  console.log(features);
  return (
    <Card className="w-full max-w-[26rem] shadow-2xl rounded-2xl overflow-hidden bg-white transition-transform hover:scale-[1.02] duration-300">
      <CardHeader floated={false} color="blue-gray" className="relative">
        <img src={image} alt={name} className="w-full object-cover h-52" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </CardHeader>

      <CardBody className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-bold text-xl">
            {name}
          </Typography>
        </div>

        <Typography color="gray" className="mb-4 text-sm">
          {description}
        </Typography>

        <div className="mb-4 space-y-2">
          {features.map((item, idx) => (
            <p key={idx} className="text-sm flex items-start gap-2 text-blue-gray-700">
              <VscDebugBreakpointData className="mt-1 text-blue-600" /> {item}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 border border-blue-600 text-blue-700 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardBody>

      <CardFooter className="px-6 pt-0 pb-6">
        <div className="mb-4">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button size="lg" fullWidth className="bg-blue-600 hover:bg-green-700 text-white">
              Visit Website
            </Button>
          </a>
        </div>
        <div className="flex gap-4">
          <a href={server} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button size="lg" fullWidth className="bg-gray-100 hover:bg-gray-400 text-gray-800">
              Server Side
            </Button>
          </a>
          <a href={client} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button size="lg" fullWidth className="bg-gray-100 hover:bg-gray-400 text-gray-800">
              Client Side
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>

  );
};

export default ProjectCard;
