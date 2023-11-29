import { useState, useEffect } from "react";
import type { Fields } from "@/interfaces/types";

async function getProjects(): Promise<Fields[]> {
  if (!process.env.NEXT_PUBLIC_PROJECTS_URL) throw new Error('Failed to fetch projects')

  const res = await fetch(`${process.env.NEXT_PUBLIC_PROJECTS_URL}/api/project`, {next: {revalidate: 0}})
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const data = await res.json()

  if (!Array.isArray(data)) throw new Error('Failed to fetch projects')

  return data.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  })
}

const useProjects = () => {
  const [projects, setProjects] = useState<Fields[]>([]);
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
