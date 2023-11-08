import { useState, useEffect } from "react";
import axios from "axios";
import type { Record } from "@/interfaces/types";

async function getProjects(): Promise<Record[]> {

  let url: string;

  if (process.env.NODE_ENV === 'development') {
    url = 'http://localhost:3000/'
  } else {
    url = "https://portfolio-zvrn45iqxa-ew.a.run.app/" 
  }

  const client = axios.create({ baseURL: url });

  const {
    data: {records},
  } = await client.get("api/project");

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
        setErr(err.response);
      });
  }, []);

  return { projects, err };
};

export default useProjects;
