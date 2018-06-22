var app = {
  init: function() {},
  send: function() {
        var message = {
            username: 'Mel Brooks',
            text: 'It\'s good to be the king',
            roomname: 'lobby'
        };
		$.ajax({
  			url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
  			type: 'POST',
  			data: JSON.stringify(message),
  			contentType: 'application/json',
  			success: function (data) {
    			console.log('chatterbox: Message sent');
  			},
  			error: function (data) {
    			// See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    			console.error('chatterbox: Failed to send message', data);
  			}
		})
	},
	fetch: function() {
		$.ajax({
  			url: undefined,
  			type: 'GET',
  			data: JSON.stringify(message),
  			contentType: 'application/json',
  			success: function (data) {
    			console.log('chatterbox: Message sent');
  			},
  			error: function (data) {
    			// See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    			console.error('chatterbox: Failed to send message', data);
  			}
		})	
	},
	clearMessage: function() {
	},
};