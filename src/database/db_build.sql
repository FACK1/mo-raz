BEGIN;

DROP TABLE IF EXISTS courses CASCADE;
CREATE TABLE courses(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL
);

INSERT INTO courses(name,location) VALUES
('FACK1','Hebron');
COMMIT;



BEGIN;

DROP TABLE IF EXISTS students CASCADE;

CREATE TABLE students(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  review TEXT,
  course_id INTEGER NOT NULL
);

INSERT INTO students(name,review,course_id) VALUES
('Mohammad','Nice course', 1),
('Razan', NULL , 1);
COMMIT;
