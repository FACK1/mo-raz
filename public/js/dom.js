getCourses(function(error, result){
  if(error){
    alert('ERROR: ' + error);
  } else {
    console.log(result[0]);
    updateCourses(result);
  }
});


var updateCourses = function(courses){
  var courseList = document.getElementById('courses-list');
  courses.forEach(function(course){
    var courseElement = createCourseElement(course);
    courseList.appendChild(courseElement);
  });
};


var createCourseElement = function(course){
  var courseDiv = document.createElement('div');
  var courseDivH3 = document.createElement('h3');
  courseDivH3.innerText = 'Course name: ' + course.name;
  courseDiv.appendChild(courseDivH3);
  return courseDiv;
};
