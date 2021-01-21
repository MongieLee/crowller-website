import React from "react";
import Chart, { Line } from "@ant-design/charts";

interface CrowlleItem {
  title: string;
  grade: number;
  time: string;
}

interface IProps {
  data: CrowlleItem[];
}

const Charts: React.FC<IProps> = (props) => {
  const config = {
    data: props.data,
    xField: "time",
    yField: "grade",
    seriesField: "title",
    yAxis: {
      label: {
        formatter: function formatter(v: any) {
          return `${v} 分`;
        },
      },
    },
    smooth: true,
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
  };
  console.log(props.data.length);
  if (props.data.length !== 0) {
    return <Line {...config} />;
  }
  return null;
};

export default Charts;
