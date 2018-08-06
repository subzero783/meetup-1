var socket = io();
//var socket = io(process.env.PORT || 3000);
var chatForm = document.forms.chatForm;

socket.on('connect', function(){
	if(chatForm){
		var chatUsername = document.querySelector('#chat-username');
		var chatMessage = document.querySelector('#chat-message');
		
		chatForm.one('submit',function(e){
			e.preventDefault();
			
			socket.emit('postMessage',{
				username: chatUsername.value,
				message: chatMessage.value
			});
			
			chatMessage.value = '';
			chatMessage.focus();
		});
		
		socket.on('updateMessages', function(data){
			showMessage(data);
		});
	}	
	function showMessage(data){
		var chatDisplay = document.querySelector('.chat-display');
		
		var newMessage = document.createElement('p');
		
		if(chatUsername.value === data.username){
			newMessage.className = 'bg-success chat-text';		
		}else{
			newMessage.className = 'bg-info text-warning chat-text';		
		}
		
		newMessage.innerHTML = '<strong>' + data.username + '</strong>: ' + data.message;
		
		chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
	}
});
