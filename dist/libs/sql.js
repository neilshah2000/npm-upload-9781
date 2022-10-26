"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sql = void 0;
var mds_1 = require("../mds");
function executeQuery(query) {
    return new Promise(function (resolve, reject) {
        mds_1.MDS.sql(query, function (res) {
            console.log(query, res);
            if (res.status) {
                resolve(res);
            }
            else {
                reject(res);
            }
        });
    });
}
exports.sql = {
    executeQuery: executeQuery,
};
