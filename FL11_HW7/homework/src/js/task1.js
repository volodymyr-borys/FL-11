
const email = prompt('Please enter your email');
let empt = '';
let zero = null;
let correctLength = 6;
let uncorrectLength = 5;
let emailUsers = 'user@gmail.com';
let emailAdmin = 'admin@gmail.com';
let passwordUsers = 'UserPass';
let passwordAdmin = 'AdminPass';

if (email === empt||email === zero){
	alert('canceled');
}else if (email.length < correctLength){
	alert("I don't know any emails having name length less than 6 symbols");
}else if (email === emailUsers||email === emailAdmin){
	const password = prompt('Please, enter your password');
    if (password === zero||password === empt){
	alert('canceled');
}else if(email === emailUsers&&password===passwordUsers||
	email === emailAdmin&&password===passwordAdmin){
	const changePassword = confirm('Do you want to change your password?');
          if (changePassword === false){
    alert('You have failed the change');
          }else if (changePassword === true){          
    const oldPassword = prompt('Please, write the old password');
                    if (oldPassword === zero||oldPassword === empt){
                    alert('Canceled');	
                    }else if (email === emailUsers&&oldPassword === passwordUsers||
    email === emailAdmin&&oldPassword === passwordAdmin){
    const newPassword = prompt('Please, enter new password');
          if (newPassword.length<uncorrectLength){
    alert("It's too short password. Sorry.");
                    }else{
    const newPasswordConfirm = prompt('Please, enter new password again.');
          if (newPasswordConfirm === newPassword){
    alert('You have successfully changed your password.')
                    }else{
    alert('You wrote the wrong password.');
                    }
    }
                    }else{
                           alert('Wrong password');
                    }
                }   
          }else{
    alert('Wrong password');
          }
}else{
	alert("I don't know you");
}          

          