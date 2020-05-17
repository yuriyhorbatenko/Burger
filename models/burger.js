
var orm = require("../config/orm.js");

var burger = {

    all: function (cb) {
        orm.all("menu", function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.create("menu", cols, vals, function (res) {
            cb(res);
        });
    },

    update: function (objColVals, condition, cb) {
        orm.update("menu", objColVals, condition, function (res) {
            cb(res);
        });
    },

    delete: function (condition, cb) {
        orm.delete("menu", condition, function (res) {
            cb(res);
        });
    }

};

module.exports = burger;
