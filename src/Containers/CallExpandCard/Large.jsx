import React from "react";
import { Polar } from "react-chartjs-2";

const dataPolar = {
  datasets: [
    {
      data: [5, 10, 20, 15, 8, 11, 24],
      backgroundColor: [
        "#fa541c",
        "#1890ff",
        "#faad14",
        "#52c41a",
        "#063f7b",
        "#ffef96",
        "#b2b2b2"
      ]
    }
  ],
  labels: ["label1", "label2", "label3", "label4", "label5", "label6", "label7"]
};

const Large = () => <Polar data={dataPolar} />;

export default Large;
