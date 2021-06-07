import { Box, Text } from "@chakra-ui/react";
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

type ChartAreaProps = {
  options: {
    chart: {
      toolbar: {
        show: Boolean
      },
      zoom: {
        enabled: Boolean
      },
      foreColor: string
    },
    grid: {
      show: Boolean
    }
    dataLabels: {
      enabled: Boolean
    }
    tooltip: {
      enabled: Boolean
    }
    xaxis: {
      type: string,
      axisBorder: {
        color: string
      }
      axisTicks: {
        color: string
      }
      categories: string[]
    }
    fill: {
      opacity: number
      type: string
      gradient: {
        shade: string
        opacityFrom: number
        opacityTo: number
      }
    }
  }
  series: Array<{
    name: string,
    data: number[]
  }>
  title: string
}

export default function ChartArea({ options, series, title}: ChartAreaProps) {
  return (
      <Box
        p={["2", "6", "8"]}
        bg="gray.800"
        borderRadius={8}
        pb="4"
      >
        <Text fontSize="lg" mb="4">{title}</Text>
        <Chart options={options} series={series} type="area" height={160} />
      </Box>
  )
}
