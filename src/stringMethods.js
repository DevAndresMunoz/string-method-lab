function getCharAt(stringInput, indexNumber) {
    if (!stringInput) {
        return 'String is empty';
    }
    if (typeof(stringInput) !== 'string') {
        return `Value given to function was of Data Type: ${typeof(stringInput)}`;
    }
    return stringInput.charAt(indexNumber);
}


function concatenateStrings(text1, text2) {
    if (typeof(text1) !== 'string') {
        return `Value given to function was of Data Type: ${typeof(text1)}`;
    }
    if (typeof(text2) !== 'string') {
        return `Value given to function was of Data Type: ${typeof(text2)}`;
    }
    return text1.concat(text2);
    
}


function doesInclude(phrase, word) {
    if (!phrase || !word) {
        return 'String is empty';
    }
    if (typeof(phrase) !== 'string') {
        return `Value given to function was of Data Type: ${typeof(phrase)}`;
    }
    if (typeof(word) !== 'string') {
        return `Value given to function was of Data Type: ${typeof(word)}`;
    }
    return phrase.includes(word);
}


function getIndexOf(phrase, word) {
    if (!phrase || !word) {
        return 'String is empty';
    }
    if (typeof(phrase) !== 'string') {
        return `Value given to function was of Data Type: ${typeof(phrase)}`;
    }
    if (typeof(word) !== 'string') {
        return `Value given to function was of Data Type: ${typeof(word)}`;
    }
    return phrase.indexOf(word);
}


function sliceString(phrase, position1, position2) {
    if (!phrase) {
        return 'String is empty';
    }
    if (typeof(phrase) !== 'string') {
        return `Value given to function was of Data Type: ${typeof(phrase)}`;
    }
    return phrase.slice(position1, position2);
}


function splitString(phrase, separator) {
    if (!phrase) {
        return 'String is empty';
    }
    if (typeof(phrase) !== 'string') {
        return `Value given to function was of Data Type: ${typeof(phrase)}`;
    }
    return phrase.split(separator);
}


function convertToLowerCase(phrase) {
    if (phrase) {
        if (typeof(phrase) == 'number') {
            return 'Value given to function was of Data Type: number';
        } else {
            return phrase.toLowerCase();
        }
    } else {
        return 'String is empty';
    }
}


function convertToUpperCase(phrase) {
    if (phrase) {
        if (typeof(phrase) == 'number') {
            return 'Value given to function was of Data Type: number';
        } else {
            return phrase.toUpperCase();
        }
    } else {
        return 'String is empty';
    }
}


function trimString(text) {
    if (typeof(text) == 'number') {
        return 'Value given to function was of Data Type: number';
    } else {
        return text.trim();
    }
}


function replaceSubstring(phrase,searchTerm,replacementTerm) {
    if (phrase && searchTerm && replacementTerm) {
        if ((typeof(searchTerm) || typeof(replacementTerm)) == 'number') {
            return 'Value given to function was of Data Type: number';
        } else {
            return phrase.replace(searchTerm,replacementTerm);
        }
    } else {
        return 'String is empty';
    }
}




module.exports = {
    getCharAt,
    concatenateStrings,
    doesInclude,
    getIndexOf,
    sliceString,
    splitString,
    convertToLowerCase,
    convertToUpperCase,
    trimString,
    replaceSubstring
};