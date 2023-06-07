import React from "react";
import Chart from "chart.js";

function LineChart({ data }) {
  // Reference to the chart canvas element
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    // Create the chart instance when the component mounts
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((item) => item.x),
        datasets: [
          {
            label: "Weight progress",
            data: data.map((item) => item.y),
            backgroundColor: [
              "coral",
              "aqua",
              "pink",
              "lightgreen",
              "lightblue",
              "crimson",
            ],
            borderColor: ["black"],
            borderWidth: 1,
            pointRadius: 5,
          },
        ],
        // datasets: [
        //   {
        //     label: "Weight",
        //     data: data,
        //     borderColor: "blue",
        //     fill: false,
        //   },
        // ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            fullSize: true,
            position: "bottom",
            align: "center",
            labels: {
              color: "darkred",
              font: {
                weight: "bold",
              },
            },
          },
        },
        layout: {
          padding: {
            top: 100, // Adjust the top padding as needed
            right: 100, // Adjust the right padding as needed
            bottom: 100, // Adjust the bottom padding as needed
            left: 100, // Adjust the left padding as needed
          },
        },
        scales: {
          x: {
            type: "time",
            time: {
              unit: "day", // Adjust the time unit as needed
            },
          },
          y: {
            type: "weight",
            weight: {
              unit: "kg", // Adjust the time unit as needed
            },
            // beginAtZero: true,
          },
        },
      },
    });

    // Cleanup the chart instance when the component unmounts
    return () => {
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
}

export default LineChart;
