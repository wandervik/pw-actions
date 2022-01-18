const http = require('http');
const version_cloudfront='new_version';

let test4 = null;

exports.handler = async (event, context, callback) => {
    console.log(version_cloudfront)

    try {
        await Promise.all([
            fetchPageOS(version_cloudfront),
        ]);
    } catch (e) {
        console.error('ERROR:', e);
    }

    const response = {
        status: '200',
        statusDescription: 'OK',

        body: `${test4};` + `\nversion: ${version_cloudfront}`

    };
    callback(null, response);
};


const httpFetch = (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            res.setEncoding('utf8');
            let body = '';
            res.on('data', (data) => {
                body += data;
            });
            res.on('end', () => {
                resolve(body);
            });
            res.on('error', (e) => {
                reject(e);
            });
        });
    });
};

const fetchPageOS = (version) => {
    return new Promise((resolve) => {
        httpFetch(`http://d3pyozpmtebsga.cloudfront.net/test4.txt`)
            .then((res) => {
                test4 = res;
                resolve();
            })
            .catch(() => {
                test4 = '';
                resolve();
            });
    });
};



