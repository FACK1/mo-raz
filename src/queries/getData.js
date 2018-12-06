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

const getStudents = (courseId, cb) => {
  const getStudentsQuery = 'SELECT s.id, s.name FROM students s INNER JOIN courses c ON s.course_id = c.id WHERE c.id = $1';
  dbConnection.query(getStudentsQuery, [courseId], (error, result) => {
    if (error) {
      cb(true);
    } else {
      cb(null, result.rows);
    }
  });
};


module.exports = {
  getCourses,
  getStudents,
};
