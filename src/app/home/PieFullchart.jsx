import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import {
  Cell,
  Label,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const PieFullchart = () => {
  const data = [
    {
      name: "john",
      product1: 500,
      product2: 2020,
    },
    {
      name: "john1",
      product1: 2040,
      product2: 603,
    },
    {
      name: "john2",
      product1: 1000,
      product2: 3003,
    },
    {
      name: "john3",
      product1: 2200,
      product2: 603,
    },
    {
      name: "john4",
      product1: 1200,
      product2: 2003,
    },
    {
      name: "john5",
      product1: 1110,
      product2: 1983,
    },
  ];
  // Custom formatter for the legend to show both name and value
  const renderLegendText = (value, entry) => {
    const { payload } = entry;
    return `${payload.name} : ${payload.product1}%`;
  };
  const COLORS = ["#6B61E5", "#FFAC52", "#F37423", "#2A85FF", "#32AD60"];
  const isLargeScreen = useMediaQuery("(min-width: 755px)");
  return (
    <Box width={"100%"} height={300}>
      <Typography fontSize={"27.93px"} fontWeight={600} my={2}>
        Project Manage
      </Typography>

      <ResponsiveContainer>
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            cornerRadius={"50%"}
            innerRadius={70}
            outerRadius={100}
            // labelLine={false}
            // label={renderCustomizedLabel}
            paddingAngle={-25}
            fill="#8884d8"
            dataKey="product1"
            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          {isLargeScreen && (
            <Legend
              iconType="circle"
              verticalAlign="middle"
              align="right"
              layout="vertical"
              formatter={renderLegendText}
              wrapperStyle={{ marginRight: 15, lineHeight: "50px" }}
            />
          )}
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PieFullchart;
