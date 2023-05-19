"use strict";
var Payment;
(function (Payment) {
    Payment[Payment["PENDING"] = 1] = "PENDING";
    Payment[Payment["PAID"] = 2] = "PAID";
    Payment[Payment["DECLINED"] = 3] = "DECLINED";
})(Payment || (Payment = {}));
console.log(Payment.PAID);
