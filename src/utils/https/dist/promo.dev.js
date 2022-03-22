"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editPromoCoupon = exports.getPromoDetail = exports.getPromos = exports.addPostPromo = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = process.env.REACT_APP_HOST + "/promos";

var addPostPromo = function addPostPromo(body, token) {
  return _axios["default"].post(url, body, {
    headers: {
      "x-access-token": token,
      "content-type": "multipart/form-data"
    }
  });
};

exports.addPostPromo = addPostPromo;

var getPromos = function getPromos() {
  return _axios["default"].get(url);
};

exports.getPromos = getPromos;

var getPromoDetail = function getPromoDetail(id) {
  var urlDetail = "".concat(url, "/").concat(id);
  return _axios["default"].get(urlDetail);
};

exports.getPromoDetail = getPromoDetail;

var editPromoCoupon = function editPromoCoupon(body, token) {
  return _axios["default"].patch(url, body, {
    headers: {
      "x-access-token": token
    }
  });
};

exports.editPromoCoupon = editPromoCoupon;