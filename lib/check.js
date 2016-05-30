var check = (function(){
    function _isSpace(str) {
        if (str) {
            return str.match(/^\s+$/) != null;
        } else {
            return false;
        }
    }
    function _isEmptyArray(array) {
        if(Object.prototype.toString.call(array) === '[object Array]') {
            return array.length == 0;
        } else {
            return false;
        }
    }
    function _stripSpaces(str) {
        str = str.replace(/\s+/g, '');
        return str;
    }
    function _toLowerCase(str) {
        str = str.toLowerCase();
        return str;
    }
    function _stripSymbols(str) {
        str = str.replace(/\W/g, '');
        return str;
    }
    function isEmpty(string) {
        return !!(string == null || _isEmptyArray(string) || _isSpace(string));
    }
    return {
        email: function(email) {
            if(!isEmpty(email)){
                email = _stripSpaces(email)._toLowerCase(email);
                return email;
            } else {
                throw "check.email was called on something that is empty";
            }
        },
        phone: function(phone) {
            if(!isEmpty(phone)){
                phone = _stripSymbols(phone);
                return phone;
            } else {
                throw "check.phone was called on something that is empty";
            }
        }
    }
});