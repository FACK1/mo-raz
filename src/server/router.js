const handler = require('./handler');


const router = (request , response) => {
  if (request.url === '/'){
    handler.homeHandler(request,response);
  }else if (request.url.split('.')[1]){
    handler.publicHandler(request,response);
  }else{
    handler.errorHandler(request,response);
  }
}

module.exports = router;
