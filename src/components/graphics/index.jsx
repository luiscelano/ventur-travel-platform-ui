import React, { useEffect, useRef }  from 'react'
//import * as styles from './styles'
//import Typography from 'src/components/Typography'
//import { getProfile } from 'src/utils/storage'
import withSales from 'src/containers/sales/withSales'
import Chart from 'chart.js/auto';

const Grafica = (props) => {
    const datos_ventas = props.sales;
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (datos_ventas && chartContainer.current) {
          const ctx = chartContainer.current.getContext('2d');
            
          if (chartInstance.current) {
            chartInstance.current.destroy();
          }

          chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: datos_ventas.map((venta) => venta.createdAt), // Supongamos que tienes un campo 'fecha' en tus datos de ventas
              datasets: [
                {
                  label: 'Ventas',
                  data: datos_ventas.map((venta) => Number(venta.totalPagar).toFixed(2)), // Supongamos que tienes un campo 'monto' en tus datos de ventas
                  backgroundColor: 'rgba(242, 235, 128, 1)', // Color de fondo de las barras
                  //borderColor: 'rgba(75, 192, 192, 1)', // Color del borde de las barras
                  borderWidth: 1, // Ancho del borde de las barras
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
        }else{
            console.log('no hay datos')
        }
      }, [datos_ventas]);

      
  return (
    <>
      <canvas ref={chartContainer} id="salesChart" width="450" height="150"></canvas>
    </>
  )
}

export default withSales(Grafica)