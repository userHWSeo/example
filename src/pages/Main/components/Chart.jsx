import { useState, useEffect } from "react";

// API
import { getCandleAPI } from "../api/index";

// ApexChart
import Chart from "react-apexcharts";

function CandleChart() {
  const [candleState, setCandleState] = useState(null);

  // 기존 라이브러리가 UTC 기준이므로 한국 시간 기준으로 변환
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const formatter = new Intl.DateTimeFormat("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return formatter.format(date);
  };

  const chartOptions = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: "캔들차트",
      align: "left",
    },
    xaxis: {
      type: "datetime",
      labels: {
        formatter: (value) => formatDate(value), // x축 라벨 포맷팅
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  useEffect(() => {
    const fetchCandleData = async () => {
      const response = await getCandleAPI();
      const data = await response.data;
      console.log(data);
      // 차트 라이브러리에 맞는 데이터 가공
      const seriesData = data.map((row) => {
        const newRow = {};
        newRow.x = new Date(row.timestamp);
        newRow.y = [row.open, row.high, row.low, row.close];
        return newRow;
      });
      console.log(seriesData);
      setCandleState(seriesData);
    };
    fetchCandleData();
  }, []);

  return (
    <Chart
      options={chartOptions}
      series={[
        {
          data: candleState || [],
        },
      ]}
      type="candlestick"
      height={350}
    />
  );
}

export default CandleChart;
