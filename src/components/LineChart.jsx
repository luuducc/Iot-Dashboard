import React, { useEffect, useState } from 'react';
import { useTheme } from "@emotion/react"
import { ResponsiveLine } from "@nivo/line"
import { tokens } from "../theme"
import { mockLineData as data} from "../data/mockData"
import { deviceData } from "../data/mockData"
import { fetchDataFromAPI } from '../data/mockData';

const LineChart = ( { isDashboard = false, type }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [chartData, setChartData] = useState([]);

  const fetchData = () => {
    fetchDataFromAPI(type)
      .then(data => {
        // Xử lý dữ liệu nhận được từ API (nếu cần)
        setChartData(data);
      })
      .catch(error => {
        console.error('Baby:', error);
      });
  }
  useEffect(() => {
    // Gọi fetchData ban đầu khi component được render
    fetchData();

    // Gọi fetchData mỗi 1 giây
    const interval = setInterval(fetchData, 1000);

    // Clear interval khi component unmount để tránh leak memory
    return () => clearInterval(interval);
  }, []); // Thêm mảng rỗng để chỉ gọi useEffect khi component mount

  const tickValues = deviceData[0].data
    .filter((_, index) => index % 5 === 0) // Lấy mỗi 5 giá trị
    .map((dataPoint) => dataPoint.x);


  return (
    <ResponsiveLine
        data={chartData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100]
              }
            },
            legend: {
              text: {
                fill: colors.grey[100]
              }
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1
              },
              text: {
                fill: colors.grey[100]
              }
            }
          },
          legends: {
            text: {
              fill: colors.grey[100]
            }
          }, 
          tooltip: {
            container: {
              color: colors.grey[100]
            }
          }
        }}
        // colors={isDashboard ? { datum: 'color' } : { scheme: 'nivo'}}
        colors={{ datum: 'color' }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            // tickValues: tickValues,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'Time',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickValues: 5,
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'Value',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={2}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export default LineChart