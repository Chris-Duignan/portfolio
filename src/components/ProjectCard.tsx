import type { Record } from "@/interfaces/types";
import Image from "next/image";
import React from "react";
import { useEffect, useRef } from "react";
import githubIcon from "../../public/github-mark-white.svg";
import TertiaryTitle from "./typography/TertiaryTitle";

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

  const style = `card py-10 w-full flex`;

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
        {/* {record.fields.images ? (
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
        ) : null} */}
        <div className="px-5 flex flex-col">
          <TertiaryTitle style="pb-5">{record.fields.name}</TertiaryTitle>
          <p>{record.fields.description}</p>
          <div className="flex justify-between items-end grow">
            {record.fields.hosted ? (
              <p className="text-left">
                See it at:{" "}
                <a
                  className="underline"
                  href={record.fields.hosted}
                  target="_blank"
                >
                  {record.fields.hosted}
                </a>{" "}
              </p>
            ) : null}
            {record.fields.github ? (
              <a href={record.fields.github} target="_blank">
                <Image
                  src={githubIcon}
                  alt=""
                  style={{
                    margin: "5px",
                    width: "30px",
                    height: "auto",
                  }}
                ></Image>
              </a>
            ) : null}
          </div>
        </div>
      </div>
      {!isLast ? <hr className="w-full" /> : null}
    </div>
  );
};

export default ProjectCard;
