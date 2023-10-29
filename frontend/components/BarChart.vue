<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ 'September', 'October', 'November' ],
          datasets: [ {label: 'Profit', data: [1201, 1100, 1400], backgroundColor: '#4a21ef',} ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>