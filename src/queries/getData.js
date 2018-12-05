const db_connection = require('../database/db_connection');




const getCourses = (cb) => {
  const getCoursesQuery = 'SELECT * FROM courses';
  let courses = db_connection.query(getCoursesQuery, (error, result) =>{
    if(error){
      cb(true);
    }else{
      cb(null, result.rows);
    }
  });
}


module.exports= {
  getCourses
};
