import { useState, useEffect } from "react";

// API
import { getJobAPI } from "../api/index";

function JobTable() {
  const [jobState, setJobState] = useState(null);

  useEffect(() => {
    const fetchJobData = async () => {
      const response = await getJobAPI();
      const data = await response.data;
      console.log(data);
      setJobState(data);
    };
    fetchJobData();
  }, []);
  return <></>;
}

export default JobTable;
