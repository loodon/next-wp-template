'use client';
import { createContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';

type ProjectItemType = {
  id?: string;
  name?: string;
  description?: string;
  gif?: string;
} | null;

type ProjectsContextType = {
  projects?: ProjectItemType[] | null;
  projectsSet?: any;
  getProjects?: any;
} | null;

export const ProjectsContext = createContext<ProjectsContextType>(null);

const Context = ({ children }: { children?: ReactNode }) => {
  const [projects, projectsSet] = useState(null);

  const getProjects = async () => {
    try {
      axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        method: 'post',
        data: {
          query: `
            query GetProjects {
              projects {
                data {
                  id
                  attributes {
                    name
                    description
                    gif {
                      data {
                        id
                        attributes {
                          name
                          alternativeText
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
        },
      }).then((result) => {
        const projectsArray = result?.data?.data?.projects?.data.map(
          (project: any) => {
            return {
              projectId: project?.id,
              projectName: project?.attributes?.name,
              projectDescription: project?.attributes?.description,
              projectGifId: project?.attributes?.gif?.data[0]?.id,
              projectGifName:
                project?.attributes?.gif?.data[0]?.attributes?.name,
              projectGifAlt:
                project?.attributes?.gif?.data[0]?.attributes?.alternativeText,
              projectGifUrl: project?.attributes?.gif?.data[0]?.attributes?.url,
            };
          }
        );

        projectsSet(projectsArray);
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects, projectsSet }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default Context;
