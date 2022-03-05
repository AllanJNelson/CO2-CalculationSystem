const fs = nodeRequire('fs');

function saveFile(e){
	fs.writeFileSync('./assets/test.js', e);
}

function savePower(e){
	fs.writeFileSync('./assets/power.js', e);
}

$(document).ready(function (){
	$('#savedata').click(function(){

		var celldata = [];

		for (var i = 1; i <= 8; i++)
		{
		    for (var j = 1; j <= 12; j++)
		    {
		        for (var k = 1; k <= 5; k++)
		        {
		            var key = i+'-'+j+'-F'+k+'-I';

		            var value = $('#'+key).text();

		            if (value == '') {

		            	value = null;

		            }

					celldata.push({key: key, value: value});

		        }
		    }
		}

		var result = JSON.stringify(celldata);

		saveFile( 'var saved_fuel_data = ' + result);
		alert('saved!');

	});

	$('#save_power').click(function(){

		var powerdata = [];

		for (var i = 1; i <= 9; i++)
		{
			for (var j = 1; j <= 13; j++)
			{
					var key = j+'P'+i;

					var value = $('#'+key).val();

					if (value == '') {

						value = null;

					}

					powerdata.push({key: key, value: value});
			}
		}

		var result = JSON.stringify(powerdata);

		savePower( 'var saved_power_data = ' + result);

		alert('Saved!');

	});

	$('#cleardata').click(function(){

		saveFile('');
		alert('Cleaned!');

	});
});
