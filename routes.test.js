const request = require('supertest')
const routes = require('./routes')

xtest('all is good', () => {
    expect(true).toBeTruthy()
})

xtest('GET / is working correctly', done => {
    request(routes)
        .get('/')
        .expect(200)
        .end((err, res) => {
            expect(res.text).toMatch('working correctly')
            done()
        })
})

xtest('GET /(nameofGETroutehere) repsonds with hello', done => {
    request(routes)
        .get('/(nameofGETroutehere')
        .expect(200)
        .end((err, res) => {
            expect(res.text).toMatch('/(nameofGETroutehere)')
            done()
        })
})



xtest('POST /(nameofpostroutehere) responds with name of instructor', done => {
    request(routes)
        .post('nameofpostroutehere')
        .send({
            name: 'newTeacher',
            id: 5
        })
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .expect(200)
        .end((err, res) => {
            expect(res.text).toMatch('newTeacher')
            expect(res.text).toMatch(5)
            done()
        })
})