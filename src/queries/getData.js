const dbConnection = require('../database/db_connection');

const getCourses = (cb) => {
  const getCoursesQuery = 'SELECT id, name FROM courses';
  dbConnection.query(getCoursesQuery, (error, result) => {
    if (error) {
      cb(true);
    } else {
      cb(null, result.rows);
    }
  });
};


module.exports = {
  getCourses,
};
