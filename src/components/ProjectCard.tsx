import type { Record } from "@/interfaces/types";
import Image from "next/image";

interface ProjectCardProps {
  record: Record;

}

const ProjectCard = (({record}: ProjectCardProps) => {  

  return (
    <div className="p-10 card">
      <h3>{record.fields.name}</h3>
      <Image
        src={record.fields.images[0].thumbnails.large.url}
        alt=""
        height={record.fields.images[0].thumbnails.large.height}
        width={record.fields.images[0].thumbnails.large.width}
        style={{
          width: '25%',
          height: 'auto',
        }}
        placeholder="blur"
        blurDataURL="/1x1-b92e297f.png"
      />
      <p>{record.fields.description}</p>
      <p>
        See it{" "}
        <a href={record.fields.hosted} target="_blank">
          here
        </a>{" "}
        and on{" "}
        <a href={record.fields.github} target="_blank">
          GitHub
        </a>
      </p>
    </div>
  );
});

export default ProjectCard;
