import React from 'react'
import { RadialBarChart } from "@mantine/charts"
import { Card } from '@mantine/core';
export const data = [
  { name: 'React', value: 99, color: 'green' },
  { name: 'Frontend', value: 90, color: 'blue.7' },
  { name: 'Backend', value: 95, color: 'orange.6' },
  { name: 'Next', value: 89, color: 'pink' },
  { name: 'Redis', value: 60, color: 'yellow.7' },
  { name: 'Microservices', value: 70, color: 'cyan.6' },
  { name: 'others', value: 51, color: 'gray' },
];
const ChartCard = () => {
  return (
    <Card withBorder shadow='xl' radius="lg">
      <RadialBarChart data={data} withLegend dataKey="value" h={300} />
    </Card>
  )
}

export default ChartCard