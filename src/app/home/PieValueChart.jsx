import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  Cell,
  Label,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const PieValueChart = () => {
  const [hoveredData, setHoveredData] = useState(null);
  const [data, setdata] = useState([
    { name: "john", product1: 500, product2: 2020 },
    { name: "john1", product1: 2040, product2: 603 },
    { name: "john2", product1: 1000, product2: 3003 },
    { name: "john3", product1: 2200, product2: 603 },
    { name: "john4", product1: 1200, product2: 2003 },
    { name: "john5", product1: 1110, product2: 1983 },
  ]);

  const COLORS = ["#6B61E5", "#FFAC52", "#F37423", "#2A85FF", "#32AD60"];

  // Determine the default value to display
  const defaultLabel = data[0];

  // Event handlers to update hovered data
  const handleMouseEnter = (data) => {
    setHoveredData(data);
  };

  const handleMouseLeave = () => {
    setHoveredData(null);
  };
  // Custom formatter for the legend to show both name and value
  const renderLegendText = (value, entry) => {
    const { payload } = entry;
    return `${payload.name} : ${payload.product1}%`;
  };
  return (
    <Box width={"auto"} height={400}>
      <Typography fontSize={"20px"} fontWeight={600} my={2}>
        Project Manage
      </Typography>

      <ResponsiveContainer>
        <PieChart width={600} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            cornerRadius={"10%"}
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            fill="#8884d8"
            dataKey="product1"
            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
            onMouseEnter={(e) => handleMouseEnter(e.payload)}
            onMouseLeave={handleMouseLeave}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              value={
                hoveredData
                  ? `${hoveredData.name}: ${hoveredData.product1}`
                  : `${defaultLabel.name}: ${defaultLabel.product1}`
              }
              position="center"
              fontSize="16px"
              fontWeight={600}
              fill="#333"
            />
          </Pie>

          <Tooltip />
          <Legend
            iconType="circle"
            // verticalAlign="middle"
            // align="right"
            layout="vertical"
            formatter={renderLegendText}
            wrapperStyle={{ lineHeight: "27px" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PieValueChart;
