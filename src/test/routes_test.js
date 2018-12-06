const test = require('tape');
const supertest = require('supertest');
const router = require('../server/router');

test('Tape working', (t) => {
  const acctual = 1;
  const expected = 1;
  t.equal(acctual, expected, 'Acctual and Expected is 1');
  t.end();
});


test('Home page testing', (t) => {
  supertest(router)
    .get('/')
    .expect('Content-Type', /html/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        throw err;
      } else {
        console.log(res.text);
        const acctual = !!(res.text.includes('<link rel="stylesheet" href="css/styles.css" type="text/css">'));
        const expected = true;
        t.equal(acctual, expected, 'Should return true');
        t.end();
      }
    });
});


test('Public routes testing', (t) => {
  supertest(router)
    .get('/css/resets.css')
    .expect('Content-Type', /css/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        throw err;
      } else {
        console.log(res.text);
        const acctual = !!(res.text.includes('aside, details, figcaption, figure,'));
        const expected = true;
        t.equal(acctual, expected, 'Should return true');
        t.end();
      }
    });
});


test('Error routes testing', (t) => {
  supertest(router)
    .get('/css/styles.c')
    .expect('Content-Type', /html/)
    .expect(404)
    .end((err, res) => {
      if (err) {
        throw err;
      } else {
        console.log(res.text);
        const acctual = (res.text.includes('Not'));
        const expected = true;
        t.equal(acctual, expected, 'Should return true');
        t.end();
      }
    });
});
