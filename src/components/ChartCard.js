import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";   

const ChartCard = () => {
    const [spark1, setSpark1] = useState({
        series: [
            {
                data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
            },
        ],
        options: {
            chart: {
                id: 'spark1',
                group: 'sparks',
                type: 'line',
                sparkline: {
                    enabled: true
                },
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 2,
                    opacity: 0.2,
                }
            },
            stroke: {
                curve: 'smooth',
                width: 2.5,
            },
            markers: {
                size: 0
            },
            grid: {
                padding: {

                }
            },
            tooltip: {
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function formatter(val) {
                            return '';
                        }
                    }
                }
            },
        },
    });
    return (
        <div className="chart_card">
            <div className="top">
                <h4>Total View</h4>
            </div>
            <div className="bottom">
                <div className="details">
                    <h2>246K</h2>
                    <h5>13.8%</h5>
                </div>
                <ReactApexChart
                    options={spark1.options}
                    series={spark1.series}
                    height={40}
                    width={'50%'}
                />
            </div>

        </div>
    )
}

export default ChartCard