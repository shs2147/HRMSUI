const empty = (value) => {
    const val = value ? value.toString().trim() : value || value === 0;
    return !val;
}

const minimum = (value, min) => {
    return !empty(value) && value.length >= min;
}

const maximum = (value, max) => {
    return !empty(value) && value.length < max;
}

const password = (value) => {
    const pas = /^(?=(.*\d){3})(?=.*[A-Z])(?=.*[a-z])(?=.*[a-z])(?=.*[#!@$^&*_-]).{7-16}$/;
    return !empty(value) && value.length >= 8 ;
}
const email = (value) => {
    const re =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
};

const aadharValidate = (value) => {
    const reNum = /^[0-9]*$/;
    return !empty(value) && value.length == 12 ;
};


const panNumber = (value) => {
    const reNum = ("[A-Z]{5}[0-9]{4}[A-Z]{1}");
    return !empty(value) && value.length == 10 ;
};

const Validation = {
    empty,
    minimum,
    maximum,
    email,
    password,
    panNumber,
    aadharValidate,
};

export default Validation;