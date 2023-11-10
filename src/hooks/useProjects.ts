import { useState, useEffect } from "react";
import type { Record } from "@/interfaces/types";

async function getProjects(): Promise<Record[]> {
  if (!process.env.NEXT_PUBLIC_PROJECTS_URL) throw new Error('Failed to fetch projects')

  const res = await fetch(`${process.env.NEXT_PUBLIC_PROJECTS_URL}/api/project`, {cache: 'no-store'})
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const data = await res.json()

  if (!Array.isArray(data.records)) throw new Error('Failed to fetch projects')

  return data.records
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
