const fs = require('fs');
const path = require('path');
const getData = require('../queries/getData');

const errorHandler = (request, response) => {
  response.writeHead(404, {'Content-Type': 'text/html'});
  return response.end('<h1>Page Not Found!</h1>');
};

const homeHandler = (request, response) => {
  const htmlPath = path.join(__dirname, '..', '..', 'public', 'index.html');
  fs.readFile(htmlPath, (error, file) => {
    if (error) {
      errorHandler(request, response);
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(file);
    }
  });
};


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
    return errorHandler(request, response);
  }
  const filePath = path.join(__dirname, '..', '..', 'public', request.url);
  return fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('<h1>Sorry, Server Error <br> Error code 500 !</h1>');
    } else {
      response.writeHead(200, { 'Content-Type': ContentTypeMapping[extention] });
      response.end(file);
    }
  });
};


const getCoursesHandler = (request, response) => {
  getData.getCourses((error, result) => {
    if (error) {
      errorHandler(request, response);
    } else {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(result));
    }
  });
};

module.exports = {
  homeHandler,
  publicHandler,
  errorHandler,
  getCoursesHandler,
};
