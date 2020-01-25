// var objPeople = [
//     {
//         email: 'user@test.com',
//         password: 'test'
//     },

//     {}
// ]

function User(email, password) {
    this.email = email; 
    this.password = password;
}

var user1 = new User('user@test.com', 'test');
var user2 = new User();

document.querySelector('#login').onclick = function() {
        
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    var login = document.querySelector('#login');

    if (email == user1.email && password == user1.password) {
        login.href = "signedin.html";
        login.click();
    }

}




