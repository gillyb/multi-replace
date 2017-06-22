'use strict';

module.exports = function(str, replaceRulesObject, extraOptions) {

    Object.keys(replaceRulesObject).forEach((findStr) => {
        let regexOptions = 'g';
        if (extraOptions && !extraOptions.caseSensitive)
            regexOptions += 'i';

        str = str.replace(new RegExp(findStr, regexOptions), replaceRulesObject[findStr]);
    });

    return str;

};
