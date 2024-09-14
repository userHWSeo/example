import axios from "axios";

/** 캔들차트 API */
export const getCandleAPI = async () => {
  const response = await axios.get("/candles");
  return response.data;
};

/** 작업자 API */
export const getJobAPI = async () => {
  const response = await axios.get("/job/list");
  return response.data;
};

/** 작업자 디테일 API */
export const getJobDetailAPI = async (job_id) => {
  const response = await axios.get("/job", {
    params: {
      job_id,
    },
  });
  return response.data;
};

/** 시그널 디테일 API */
export const getSignalDetailAPI = async (signal_id) => {
  const response = await axios.get("/signal", {
    params: {
      signal_id,
    },
  });
  return response.data;
};
