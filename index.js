// let usersAPI = 'http://localhost:3000/users';

// fetch(usersAPI) 
// 	.then(function(response) {
// 		return response.json();
// 	})
// 	.then(function(user) {
// 		let newUser = user.map(function(element) {
// 			return `<li>${element.name} <br> ${element.desc}</li> <br>`;
// 		})
// 		document.querySelector('ul').innerHTML = newUser.join('');
// 	})

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))