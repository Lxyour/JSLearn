$(document).ready(function(){
	
	$('#openBtn').on('click', function(){
		var username = $('#username').val()
		var cardID = $('#cardID').val()
		var email = $('#email').val()
		var phoneNo = $('#phoneNo').val()
		var numCode = $('#numCode').val()
		
		var nameReg = /^[a-zA-Z0-9]$/;
		var test = nameReg.test(username);
		console.log(test)
		if(test === false || username.length < 5) {
			alert('请输入正确的用户名')
			return;
		}
		var isCard = isCardNo(cardID);
		if(!isCard) {
			alert("身份证输入不合法");
		}
		
	})
	
	function isCardNo(card){
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
		if(reg.test(card) === false) { 
		   return false;  
		}
		return true;
	}
});


var wait = 60;
function timer(btn){
	if( wait == 0 ){
		btn.removeAttribute("disabled");
		btn.innerHTML="重新获取";
		wait = 60;
	}else{
		btn.setAttribute("disabled","true");
		btn.innerHTML= wait+"s 后重试";
		wait = wait - 1;
		setTimeout(function(){
			timer(btn);
		},1000);
	}
}
document.getElementById("verification").onclick=function(){timer(this)}