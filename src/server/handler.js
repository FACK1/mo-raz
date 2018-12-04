const fs = require('fs');
const path = require('path');

// Home page Handler

const homeHandler = (request, response) => {
	const htmlPath = path.join(__dirname, '..','..', 'public', 'index.html');
	fs.readFile(htmlPath, (error, file) => {
		if (error) {
			errorHandler(request, response);
			return;
		}
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end(file);
	});
};

//Public Handler

const publicHandler = (request, response) => {
	const extention = request.url.split('.')[1];
	const ContentTypeMapping = {
		html: 'text/html',
		css: 'text/css',
		js: 'application/js',
		jpg: 'image/jpg',
		png: 'image/png',
		ico: 'image/x-ico',
		jpeg: 'image/jpeg',
	};

	if (ContentTypeMapping[extention] === undefined) {
		errorHandler(request, response);
		return;
	}
	const filePath = path.join(__dirname, '..', '..', 'public', request.url);
	fs.readFile(filePath, (error, file) => {
		if (error) {
			response.writeHead(500, {'Content-Type': 'text/html'});
			response.end('<h1>Sorry, Server Error <br> Error code 500 !</h1>');
			return;
		}
		response.writeHead(200, {'Content-Type': ContentTypeMapping[extention]});
		response.end(file);
	});
};

// Error Handler
const errorHandler= (request, response) => {
	response.writeHead(404);
	return response.end('Page Not Found!');
};

module.exports={
  homeHandler,
  publicHandler,
  errorHandler
};
