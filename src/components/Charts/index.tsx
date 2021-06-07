import { SimpleGrid, theme } from "@chakra-ui/react";

import ChartArea from "./ChartArea";

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-04-18T00:00:00.000Z',
      '2021-04-19T00:00:00.000Z',
      '2021-04-20T00:00:00.000Z',
      '2021-04-21T00:00:00.000Z',
      '2021-04-22T00:00:00.000Z',
      '2021-04-23T00:00:00.000Z',
      '2021-04-24T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }
]

export default function Charts() {
  return (
    <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
      <ChartArea title="Incritos da semana" options={options} series={series} />
      <ChartArea title="Taxa de abertura" options={options} series={series} />
    </SimpleGrid>
  )
}
