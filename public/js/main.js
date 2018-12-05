var getCourses = function (cb){
  fetch('/courses')
  .then(function(response){
    if(response.status !== 200){
      cb('status Code: ' + response.status);
    }else {
      return response.json();
    }
  }).then(function(data){
    console.log(data);
    cb(null, data);
  }).catch(function(error){
    cb(error);
  });
}
