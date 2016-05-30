var check = (function(){
    function _isSpace(string) {
        if (string) {
            return string.match(/^\s+$/) != null;
        } else {
            return false;
        }
    }
    function _isEmptyArray(array) {
        if(Object.prototype.toString.call(array) === '[object Array]') {
            if(array.length == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    function empty(string) {
        if(string == null || )
            return result;
    }
    return {
        email: function(email, clean) {

        },
        phone: function(email)
    }
});