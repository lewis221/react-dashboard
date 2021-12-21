import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./styles/app.css";

function App() {
	const [state, setState] = useState({
		series: [
			{
				name: "Desktops",
				data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
			},
		],
		options: {
			chart: {
				height: 350,
				type: "line",
				zoom: {
					enabled: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: "straight",
			},
			title: {
				text: "Product Trends by Month",
				align: "left",
			},
			grid: {
				row: {
					colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
					opacity: 0.5,
				},
			},
			xaxis: {
				categories: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
				],
			},
		},
	});

	return (
		<div className="App">
			<main>
				<section className="glass">
          <div className="sidebar">
            <div>123</div>
            <div>456</div>
          </div>
					<div className="dashboard">
            <div className="card-group">
						<div className="card">

            </div>
            <div className="card">
              
            </div>
            <div className="card">
              
            </div>
            </div>
						<ReactApexChart
							options={state.options}
							series={state.series}
							type="line"
							height={350}
							
						/>
					</div>
				</section>
			</main>
			<div className="circle1"></div>
			<div className="circle2"></div>
		</div>
	);
}

export default App;
