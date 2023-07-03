'use client';

// Component(s)
import Project from '../components/Project';

// Context(s)
import { ProjectsContext } from '../context/ProjectsContext';

const Home = () => {
  return (
    <ProjectsContext.Consumer>
      {(value) => {
        return (
          <>
            <main className='flex min-h-screen flex-col items-center justify-between p-24'>
              {value?.projects?.map((project: any) => {
                return (
                  <Project
                    key={`project-${project?.projectId}`}
                    projectId={project?.projectId}
                    projectName={project?.projectName}
                    projectDescription={project?.projectDescription}
                    projectGifId={project?.projectGifId}
                    projectGifName={project?.projectGifName}
                    projectGifAlt={project?.projectGifAlt}
                    projectGifUrl={project?.projectGifUrl}
                  />
                );
              })}
            </main>
          </>
        );
      }}
    </ProjectsContext.Consumer>
  );
};

export default Home;
