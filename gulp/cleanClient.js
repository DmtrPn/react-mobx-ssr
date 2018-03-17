const gulp = require('gulp');
const fs = require('fs-extra');
const Q = require('q');
const path = require('path');

const dir = path.resolve(__dirname, '../dist/client');

module.exports = function cleanClient() {
    let deferred = new Q.defer();
    fs.emptyDir(dir, err => {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise;
}
