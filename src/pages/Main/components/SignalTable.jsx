import { useState, useEffect } from "react";

// API
import { getSignalDetailAPI } from "../api/index";

function SignalTable() {
  const fetchSignalData = async () => {
    const response = await getSignalDetailAPI();
    const data = await response.data;
    console.log(data);
  };
  fetchSignalData();

  return <></>;
}

export default SignalTable;
