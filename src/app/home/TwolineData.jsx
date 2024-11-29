"use client";
import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

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
];

const TwolineData = () => {
  const isLargeScreen = useMediaQuery("(min-width: 755px)");
  return (
    <Box width={"100%"} height={400}>
      <Typography fontSize={"20px"} fontWeight={600} my={2}>
        Estimated vs. Actual Hours by Project
      </Typography>

      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {isLargeScreen && (
            <Legend
              layout="vertical"
              verticalAlign="top"
              align="right"
              style={{ ml: 5 }}
            />
          )}

          <CartesianGrid horizontal={true} vertical={false} stroke="#ccc" />
          <XAxis
            dataKey="name"
            padding={{ left: 5, right: 5 }}
            tickLine={false}
          />
          <YAxis
            yAxisId="left"
            label={{
              value: "Estimated Hours",
              angle: -90,
              position: "insideLeft",
            }}
            tickLine={false}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{
              value: "Actual Hours",
              angle: 90,
              position: "insideRight",
            }}
            tickLine={false}
          />
          <Tooltip />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="product1"
            stroke="#F37423"
            activeDot={{ r: 8 }}
            legendType="circle"
            dot={false}
            strokeWidth={4}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="product2"
            stroke="#2A85FF"
            activeDot={{ r: 8 }}
            legendType="circle"
            dot={false}
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};
export default TwolineData;
