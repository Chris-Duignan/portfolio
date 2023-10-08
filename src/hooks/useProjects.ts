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
  const [allCollected, setAllCollected] = useState(false)
  const [err, setErr] = useState(null);
  const [page, setPage] = useState(1)
  const [currentProjects, setCurrentProjects] = useState<Record[]>([])

  const setNextPage = () => {
    setPage((prev) => {
      if (!allCollected) return prev + 1
      return prev;
    } )
  }

  useEffect(() => {
    setErr(null);
    getProjects()
      .then((projects) => {
        setProjects(projects);
        setCurrentProjects(projects.slice(0, page * 2))
        if (page * 2 >= projects.length) setAllCollected(true)
      })
      .catch((err) => {
        setErr(err.response);
      });
  }, [allCollected, page]);

  return { currentProjects, allCollected, setNextPage, err };
};

export default useProjects;
