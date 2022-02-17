const http = require('http');

const server = http.createServer((req,res)=>{
	if(req.url==='/'){
		res.end('Welcome to this cool homepage')
	}
	else if(req.url==='/about'){
		res.end('This is our about page')
	} else {
	res.end(`<h1>Oh no, ${req.url} cannot be found</h1>`)
	}
})

server.listen(2525);