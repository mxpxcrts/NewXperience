$(document).ready(function(){
		var datos = {
			type: "pie",
			data : {
				datasets :[{
					data : [
						5,
						10,
						25,
						12,
						23,
					],
					backgroundColor: [
						"#F7464A",
						"#46BFBD",
						"#FDB45C",
						"#949FB1",
						"#4D5360",
					],
				}],
				labels : [
					"Babyshower",
					"15 años",
					"Viejoteca",
					"Mega Rumba",
					"Fiesta Infantil",
				]
			},
			options : {
				responsive : true,
			}
		};

		var canvas = document.getElementById('chart').getContext('2d');
		window.pie = new Chart(canvas, datos);

		setInterval(function(){
			datos.data.datasets.splice(0);
			var newData = {
				backgroundColor : [
					"#F7464A",
					"#46BFBD",
					"#FDB45C",
					"#949FB1",
					"#4D5360",
				],
				data : [getRandom(), getRandom(), getRandom(), getRandom(), getRandom()]
			};

			datos.data.datasets.push(newData);

			window.pie.update();

		}, 5000);



		function getRandom(){
			return Math.round(Math.random() * 100);
		}


	});