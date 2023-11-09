import { useState, useEffect } from "react";
import axios from "axios";
import type { Record } from "@/interfaces/types";

async function getProjects(): Promise<Record[]> {

  const client = axios.create({ baseURL: process.env.PROJECTS_URL });

  const {
    data: {records},
  } = await client.get("api/project");

  if (!records) throw new Error('Projects not retrieved')

  return records;
}

const useProjects = () => {
  const [projects, setProjects] = useState<Record[]>([]);
  const [err, setErr] = useState(null);


  useEffect(() => {
    setErr(null);
    getProjects()
      .then((projects) => {
        setProjects(projects);
      })
      .catch((err) => {
        setErr(err.message);
      });
  }, []);

  return { projects, err };
};

export default useProjects;
