import { Box, Typography } from "@mui/material";
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
const Piehalfchart = () => {
  const data = [
    {
      name: "john",
      product1: 2040,
      product2: 2020,
    },
    {
      name: "john1",
      product1: 1040,
      product2: 603,
    },
  ];
  const COLORS = ["#2A85FF", "#F37423", "#FFAC52", "#2A85FF", "#32AD60"];
  return (
    <Box width={"100%"} height={400}>
      <Typography fontSize={"20px"} fontWeight={600} my={2}>
        Project Completion Rate
      </Typography>

      <ResponsiveContainer>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            cornerRadius={"25%"}
            innerRadius={60}
            outerRadius={100}
            paddingAngle={1.5}
            startAngle={180}
            endAngle={0}
            // outerRadius={80}
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
          <Legend
            iconType="circle"
            // verticalAlign="middle"
            // align="center"
            // layout="vertical"
          />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Piehalfchart;
