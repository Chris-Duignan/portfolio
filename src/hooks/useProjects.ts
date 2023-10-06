import { useState, useEffect } from "react";
import axios from "axios";
import type { Record } from "@/interfaces/types";

async function getProjects(): Promise<Record[]> {
  const client = axios.create({ baseURL: "http://localhost:3000/" });

  const {
    data: { records },
  } = await client.get("api/project");

  return records;
}

const useProjects = () => {
  const [projects, setProjects] = useState<Record[]>([]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  const updateIndex = (update: number) => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex + update) % projects.length;
      return newIndex < 0 ? newIndex + projects.length : newIndex;
    });
  };

  useEffect(() => {
    setIsLoading(true);
    setErr(null);
    getProjects()
      .then((projects) => {
        setProjects(projects);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.response);
        setIsLoading(false);
      });
  }, []);

  return { projects, index, updateIndex, isLoading, err };
};

export default useProjects;
