import { SectionTile } from './SectionTile';

export const SectionTileContent: React.FC = () => {
  return (
    <>
      <SectionTile
        title="skills"
        fileSrc="./skills.txt"
        fileImage="/skills-svgrepo-com.svg"
      ></SectionTile>
      <SectionTile
        title="languages"
        fileSrc="./languages.txt"
        fileImage="/skills-svgrepo-com.svg"
      ></SectionTile>
    </>
  );
};
