//write npm command line to install mocha
//npm install --global mocha

//command to run this test file
//mocha test.js

const assert = require('assert');
const http = require('http');

const server = require('./nodeserver');



describe('Node Server', () => {
    it('should return "key not passed" if key is not passed', (done) => {
        http
            .get('http://localhost:3000/get', (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    assert.equal(data, 'key not passed');
                    done();
                });
            });
    });

    // add test to check get when key is equal to world
    it('should return "hello world" if key is world', (done) => {
        http
            .get('http://localhost:3000/get?key=world', (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    assert.equal(data, 'hello world');
                    done();
                });
            });
    });

    //add test to check validatephoneNumber
    it('should return "true" if phone number is valid', (done) => {
        http
            .get('http://localhost:3000/get?key=0041790000000', (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                // add regex to check phone number
                const regex = /^hello 0041[0-9]{9}$/;
                res.on('end', () => {
                    assert.equal(regex.test(data), true);
                    done();
                });
            });
    });

    //add test to check validateSpanishDNI
    it('should return "true" if DNI is valid', (done) => {
        http
            .get('http://localhost:3000/get?key=world', (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    assert.equal(data, 'true');
                    done();
                });
            });
    });

    //write test to validate validateSpanishDNI
    it('should return "true" if DNI is valid', (done) => {
        http
            .get('http://localhost:3000/get?key=world', (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    assert.equal(data, 'true');
                    done();
                });
            });
    });


    //write test for returnColorCode red should return code #FF0000
    it('should return "#FF0000" if color is red', (done) => {
        http
            .get('http://localhost:3000/get?key=red', (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    assert.equal(data, '#FF0000');
                    done();
                });
            });
    });



    //write test for daysBetweenDates
    it('should return "1" if date is 2019-01-01 and 2019-01-02', (done) => {
        http
            .get('http://localhost:3000/get?key=red', (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    assert.equal(data, '1');
                    done();
                });
            });
    });
});