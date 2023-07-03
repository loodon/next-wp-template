type ProjectItemType = {
  projectId?: string | null;
  projectName?: string | null;
  projectDescription?: string | null;
  projectGifId?: string | null;
  projectGifName?: string | null;
  projectGifAlt?: string | null;
  projectGifUrl?: string | null;
};

const Project = ({
  projectId,
  projectName,
  projectDescription,
  projectGifId,
  projectGifName,
  projectGifAlt,
  projectGifUrl,
}: ProjectItemType) => {
  console.log(projectDescription?.includes('\n'));
  return (
    <>
      <div>
        <h2>Project {projectId}</h2>
        <div>Project Name: {projectName}</div>
        <div style={{ whiteSpace: 'pre-line' }}>
          Project Description: ${projectDescription}
        </div>
        <div>Project Gif Id: {projectGifId}</div>
        <div>Project Gif Name: {projectGifName}</div>
        <div>Project Gif Alt: {projectGifAlt}</div>
        <div>Project Gif Url: {projectGifUrl}</div>
      </div>
    </>
  );
};

export default Project;
