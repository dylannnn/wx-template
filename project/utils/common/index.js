module.exports = {
    getVisibleText(text, n) {
        var realLength = 0, len = text.length, preLen = -1, charCode = -1, needCut = false;
        for (var i=0; i<len; i++) {
            charCode = text.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) {
                realLength += 1;
            } else {
                realLength += 2;
            }
            if (preLen===-1 && realLength >= n) {
                preLen = i+1;
            } else if (realLength > n+2) {
                needCut = true;
                break;
            }
        }
        if (needCut) {
            text = text.substr(0, preLen)+'..';
        }
        return text;
    },
    cutLimitText(text, n) {
        var realLength = 0, len = text.length, preLen = -1, charCode = -1, needCut = false;
        for (var i=0; i<len; i++) {
            charCode = text.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) {
                realLength += 1;
            } else {
                realLength += 2;
            }
            if (preLen===-1 && realLength >= n) {
                preLen = i+1;
            } else if (realLength > n) {
                needCut = true;
                break;
            }
        }
        if (needCut) {
            text = text.substr(0, preLen);
        }
        return text;
    },
    checkPhone(phone) {
        return /^1\d{10}$/.test(phone);
    },
    checkIdentifyNumber(number) {
        return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(number);
    },
    checkPassword(pwd) {
        return /^[\d\w_]{6,20}$/.test(pwd);
    },
    checkVerificationCode(code) {
        return /^\d{6}$/.test(code);
    },
    checkNumberCode(code) {
        return /^(0|[1-9][0-9]{0,9})(\.[0-9]{1,2})?$/.test(code);
    },
    checkMailAddress(code) {
      var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      return reg.test(code);
    },
};
