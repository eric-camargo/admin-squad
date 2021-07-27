import React from 'react'
import { Bar } from 'react-chartjs-2'

import classes from './Dashboard.module.css'

function Dashboard() {
    const DUMMYDATAPROMOTERS = {
        labels: ['10/07/2021', '11/07/2021', '12/07/2021', '13/07/2021', '14/07/2021', '15/07/2021'],
        datasets: [
          {
            label: 'Promotores',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(54, 162, 235, 1)',
              ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              ],
            borderWidth: 1,
          },
        ],
      };

      const DUMMYDATALEADS = {
        labels: ['Indicações', 'Validações', 'Visitas', 'Pastas', 'Vendas'],
        datasets: [
          {
            label: 'Indicações',
            data: [22, 19, 13, 7, 3],
            backgroundColor: [
              'rgba(54, 162, 235, 1)',
              ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              ],
            borderWidth: 1,
          },
        ],
      };
    const optionsVertical = {
        plugins: {
        title: {
            display: true,
            text: 'Novos Promotores Por Dia',
          }
        },
        tooltips: {
            enabled: false,
        }
    };

    const optionsHorizontal = {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Indicações por Estágio',
          },
        },
      };

    return (
        <div className={classes.dashboard}>
            <div className={classes.indexesRow}>
                <div className={classes.indexCard}>
                    <span>Promotores</span>
                    <h1>56</h1>
                </div>
                <div className={classes.indexCard}>
                    <span>Indicações</span>
                    <h1>241</h1>
                </div>
            </div>
            <div className={classes.charts}>
                <Bar 
                  className={classes.chart} 
                  data={DUMMYDATAPROMOTERS} 
                  options={optionsVertical}
                  height={100}
                  width={100}
                  />
                <Bar 
                  className={classes.chart} 
                  data={DUMMYDATALEADS} 
                  options={optionsHorizontal}
                  height={100}
                  width={100}
                  />
            </div>
        </div>
    )
}

export default Dashboard
