document.querySelector('#signup').onclick = function() {
    // var newEmail = document.querySelector('#newemail').value;
    var newPassword = document.querySelector('#newpassword').value;
    var confirmNewPassword = document.querySelector('#newconfirmPassword').value;

    if (newPassword == confirmNewPassword) {
        alert('Congrats! Your account is created! *not working yet*');
    }
}

