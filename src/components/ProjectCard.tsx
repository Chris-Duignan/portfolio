import type { Record } from "@/interfaces/types";
import Image from "next/image";
import React from "react";
import { useEffect, useRef } from "react";

interface ProjectCardProps {
  record: Record;
  isLast: boolean;
  loadMoreProjects: () => void;
}

const ProjectCard = ({
  record,
  isLast,
  loadMoreProjects,
}: ProjectCardProps) => {
  const cardRef = React.createRef<HTMLDivElement>();
  const loadMoreTriggered = useRef(false);

  const style = `card py-10 w-full`

  useEffect(() => {
    if (!cardRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (isLast && entry.isIntersecting && !loadMoreTriggered.current) {
          loadMoreTriggered.current = true;
          loadMoreProjects();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 1 }
    );

    observer.observe(cardRef.current);
  }, [isLast, cardRef, loadMoreProjects]);

  return (
    <div className="flex flex-col items-center">
      <div className={style} ref={cardRef}>
        <h3>{record.fields.name}</h3>
        {record.fields.images ? (
          <Image
            src={record.fields.images[0].thumbnails.large.url}
            alt=""
            height={record.fields.images[0].thumbnails.large.height}
            width={record.fields.images[0].thumbnails.large.width}
            style={{
              width: "35%",
              height: "auto",
            }}
            placeholder="blur"
            blurDataURL="/1x1-b92e297f.png"
          />
        ) : null}
        <p>{record.fields.description}</p>
        {record.fields.hosted ? (
          <p>
            See it{" "}
            <a href={record.fields.hosted} target="_blank">
              here
            </a>{" "}
          </p>
        ) : null}

        {record.fields.github ? (
          <p>
            and on{" "}
            <a href={record.fields.github} target="_blank">
              GitHub
            </a>
          </p>
        ) : null}
      </div>
      { !isLast ? <hr className="w-full" /> : null}
    </ div>
  );
};

export default ProjectCard;
