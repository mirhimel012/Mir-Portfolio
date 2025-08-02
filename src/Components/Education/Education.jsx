import { Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";


const Education = () => {
  return (
    <div id="education" className="py-10 px-4 md:px-8 bg-white">
      <SectionTitle heading={"My Education"} />
      <div className="max-w-5xl mx-auto">
        <Card className="w-full shadow-md rounded-2xl border border-gray-200">
          <CardBody className="p-6 md:p-8">
            <div className="mb-4 flex flex-col gap-2 text-center md:text-left">
              <Typography variant="h6" color="blue-gray" className="font-semibold text-blue-600">
                2023 – Present
              </Typography>
              <Typography variant="h5" color="blue-gray" className="font-bold text-xl md:text-2xl">
                B.Sc. in Computer Science and Engineering (CSE)
              </Typography>
              <Typography variant="h6" color="blue-gray" className="text-lg font-medium">
                Bangladesh University of Business and Technology (BUBT)
              </Typography>
              <Typography
                variant="paragraph"
                color="gray"
                className="mt-2 text-sm md:text-base text-gray-700"
              >
                Currently pursuing studies with a strong focus on web application development.
                Actively involved in building real-world projects and contributing to coding communities.
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>

  );
};

export default Education;