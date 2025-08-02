import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("projects.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    console.log(projects);
    return (
        <div id="projects" className="px-4 sm:px-6 md:px-10 lg:px-16 py-10">
            <SectionTitle heading="My Projects" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
        </div>

    );
};

export default Projects;