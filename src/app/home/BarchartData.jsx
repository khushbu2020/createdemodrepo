import { Box, Typography } from "@mui/material";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarchartData = () => {
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
      product1: 1100,
      product2: 2222,
    },
    {
      name: "john6",
      product1: 1201,
      product2: 1003,
    },
  ];

  return (
    <Box width={"100%"} height={400}>
      <Typography fontSize={"20px"} fontWeight={600} my={2}>
        Estimated vs. Actual Hours by Project
      </Typography>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={10}
        >
          <CartesianGrid horizontal={true} vertical={false} />
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 25, right: 10 }}
            tickLine={false}
          />
          <YAxis
            label={{
              value: "Estimated Hours",
              angle: -90,
              position: "insideLeft",
            }}
            tickLine={false}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="product1" stackId="a" fill="#F37423" radius={4} />
          <Bar dataKey="product2" stackId="a" fill="#2A85FF" radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default BarchartData;
