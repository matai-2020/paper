const request = require('supertest')
const routes = require('./routes')

test('all is good', () => {
    expect(true).toBeTruthy()
})

test('get / is working correctly', done => {
    request(routes)
        .get('/')
        .expect(200)
        .end((err, res) => {
            expect(res.text).toMatch('working correctly')
            done()
        })
})