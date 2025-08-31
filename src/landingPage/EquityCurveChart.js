import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  ReferenceLine,
} from "recharts";
import * as XLSX from "xlsx";

/**
 * Fetches and processes data from the Excel file to prepare it for charting.
 * The data is reversed to display time from left to right.
 * @returns {Promise<Array>} A promise that resolves to an array of formatted data.
 */
export const fetchExcelData = async () => {
  try {
    const response = await fetch("nav-data.xlsx");
    if (!response.ok)
      throw new Error(`Failed to fetch file: ${response.statusText}`);

    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    let jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    jsonData = jsonData.slice(6).filter((row) => row.length > 0);

    let formattedData = jsonData.map((row) => ({
      time: row[0],
      green: row[1] || 0,
      blue: 0, 
    }));

    formattedData = formattedData.reverse();
    let baseValue = 100;
    const initialGreenValue = formattedData[0]?.green || 0;

    for (let i = 0; i < formattedData.length; i++) {
      const item = formattedData[i];
      
      const prevGreenValue = i > 0 ? formattedData[i - 1].green : initialGreenValue;
      const dailyChange = prevGreenValue !== 0 ? ((item.green - prevGreenValue) / prevGreenValue) : 0;
      
      baseValue = baseValue * (1 + dailyChange);
      item.blue = baseValue;
    }
    
    return formattedData;
  } catch (error) {
    console.error(" Error reading Excel file:", error);
    return [];
  }
};

/**
 * Calculates the drawdown for a given dataset.
 * @param {Array} data - The dataset to calculate drawdown for.
 * @returns {Array} An array of objects with time and drawdown value.
 */
export const calculateDrawdown = (data) => {
  let maxEquity = 0;
  const drawdownData = [];

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    maxEquity = Math.max(maxEquity, item.green);
    const drawdown = ((item.green - maxEquity) / maxEquity) * 100;
    drawdownData.push({ time: item.time, value: drawdown });
  }

  return drawdownData;
};

/**
 * Main component for rendering the equity curve and drawdown charts.
 */
export default function EquityCurveChart() {
  const [chartData, setChartData] = useState([]);
  const [drawdownData, setDrawdownData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchExcelData();
      if (data && data.length > 0) {
        setChartData(data);
        setDrawdownData(calculateDrawdown(data));
      }
    };
    
    loadData();
  }, []);

  return (
    <div style={{ width: "100%", height: "600px", padding: "2px" }}>
      {/* Main Line Chart for Equity Curves */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
        >
          <CartesianGrid opacity={0.4} vertical={false} />
          <YAxis
            tick={{ fontSize: 10 }}
            tickLine={false}
            axisLine={false}
            domain={["auto", "auto"]}
          />
          <XAxis dataKey="time" hide={true} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "8px",
            }}
            labelStyle={{ color: "#333", fontWeight: "bold" }}
          />
          <Line
            type="monotone"
            dataKey="green"
            stroke="#28a745"
            strokeWidth={2.0}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="blue"
            stroke="#0011ff"
            strokeWidth={2.0}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Area Chart for Drawdown */}
      <div style={{ width: "100%", height: "150px", marginTop: "10px" }}>
        <ResponsiveContainer width="100%" height={120}>
          <AreaChart data={drawdownData}>
            <XAxis dataKey="time" hide={true} />
            <YAxis
              tick={{ fontSize: 10 }}
              tickLine={false}
              axisLine={false}
              domain={["auto", "auto"]}
            />
            <Tooltip />
            <ReferenceLine y={0} stroke="#f6f1f1ff"  />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#fa5b60bc"
              fill="#fa5b83bc"
              fillOpacity={0.3}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
