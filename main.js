const icaoInput = document.getElementById('icao');
const chartToFind = document.getElementById('chartToFind');
const keyword = document.getElementById('keyword');

function FindChart()
{
	let chart = chartToFind.value;
	
	if(chart == 'ground')
	{
		let iataCode = icaoInput.value.slice(1);

		window.location.href = 'https://www.flightaware.com/resources/airport/' + iataCode + '/APD/AIRPORT+DIAGRAM/pdf';
	}

	if(chart == 'departure')
	{
		ToChartList('dp,hot');
	}
	
	if(chart == 'ils')
	{
		ToChartList('iap,rnav');
	}

	if(chart == 'rnav')
	{
		ToChartList('gps,lah');
	}

	if(chart == 'star')
	{
		ToChartList('star');
	}

	if(chart == 'visual')
	{
		ToChartList('visual');
	}

	if(chart == 'keyword')
	{
		ToChartList(keyword.value);
	}
}

function ToChartList(textToHighlight)
{
	window.location.href = 'https://www.flightaware.com/resources/airport/' + icaoInput.value + '/APD/AIRPORT+DIAGRAM#:~:text=' + textToHighlight;
}

