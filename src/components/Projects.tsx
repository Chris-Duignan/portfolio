import Image from "next/image";
import styles from "../app/page.module.css";
import axios from "axios";

interface Record {
    id: string;
    createdTime: string;
    fields: Fields;
}

interface Fields {
    github: string;
    name: string;
    description: string;
    hosted: string;
    techStack: string[];
    images: ImageInterface[];
}

interface ImageInterface {
    id: string;
    width: number;
    height: number;
    url: string;
    filename: string;
    size: number;
    type: string;
    thumbnails: {
        small: Thumbnail;
        large: Thumbnail;
        full: Thumbnail;
    }
}

interface Thumbnail {
        url: string;
        width: number;
        height: number;
}

async function getProjects(): Promise<Record[]> {
  const client = axios.create({ baseURL: "http://localhost:3000/" });

  const {
    data: { records },
  } = await client.get("api/project");

  return records;
}

const Projects = async () => {
  const records = await getProjects();

  return (
    <div className={styles.container}>
      <h2>Projects</h2>
      <div>
        {records.map((record: Record) => {
          return (
            <div key={record.id}>
              <h3>{record.fields.name}</h3>
              <Image
                src={record.fields.images[0].thumbnails.large.url}
                alt=""
                height={record.fields.images[0].thumbnails.large.height}
                width={record.fields.images[0].thumbnails.large.width}
                placeholder="blur"
                blurDataURL="/1x1-b92e297f.png"
              />
              <p>{record.fields.description}</p>
              <ul>
                {record.fields.techStack.map((tech) => {
                  return <li key={tech}>{tech}</li>;
                })}
              </ul>
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
        })}
      </div>
    </div>
  );
};

export default Projects;
