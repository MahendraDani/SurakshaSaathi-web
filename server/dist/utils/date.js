"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const date = (0, date_fns_1.format)(new Date(), "dd-MM-yyyy").split("-").join(".");
exports.default = date;
