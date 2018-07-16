const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(5005,()=>{
	console.log('webpage is started.');
})