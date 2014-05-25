var parseID = 'eEJRBULtlsWP1YC0DpFovyskFFPgun6V9LArfPcx';
var parseRestKey = 'wSBzOaBctfNUrSu9BFI8ebDmyE03QnJToaeIrPay';

$(document).ready(function() {

	getMessages();

	$('#send').on('click', function () {
		var username = $('input[name=username]').val();
		var message = $('input[name=message]').val();
		console.log(username);
		console.log('!');
		console.log(message);
	
		$.ajax({
			url: 'https:api.parse.com/1/classes/MessageBoard',
			headers: {
				'X-Parse-Application-Id': parseID,
				'X-Parse-REST-API-Key': parseRestKey
			},
			contentType: 'application/json',
			dataType: 'json',
			processData: false,
			data: JSON.stringify({
				'username': username,
				'message': message
			}),
			type: 'POST',
			
			success: function () {
				console.log('sent');
				getMessages();
			},
			error: function () {
				console.log('error');
			}
		
		});
	});

	function getMessages () {
		$.ajax({
			url: 'https:api.parse.com/1/classes/MessageBoard',
			headers: {
				'X-Parse-Application-Id': parseID,
				'X-Parse-REST-API-Key': parseRestKey
			},
			contentType: 'application/json',
			dataType: 'json',
			type: 'GET',

			success: function (data) {
				console.log('get');
				updateView(data);
			},
			error: function () {
				console.log('error');
			}

		});
	}

	function updateView(messages) {
		var table=$('.table tbody');
		table.html('');

		$.each(messages.results, function (index, value) {
			var trEl = 
				$('<tr><td>'
					+ value.username
					+ '</td><td>'
					+ value.message
					+ '</td></tr>'
					);
				table.append(trEl);
		});
		console.log(messages);
	}
});