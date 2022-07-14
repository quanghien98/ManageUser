export const FAKE_USER = {
    id: 0, name: '', email: '', phone: ''
}


function testRegex(value, regex) {
    return regex.test(value)
}

export function customRegex(value, option) {
    let options = {
        'phone': {
            regex: /((09|03|07|08|05)+([0-9]{8})\b)/g,
        },
        'name': {
            regex: /^[^!@#$%^&*()_+=\-\[\]\:\'\"\;\.\?\<\>\|\\0-9]+$/g,
        },
        'email': {
            regex: /^$|^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/g
        },

    }
    return testRegex(value, options[option].regex)
}

export function validate(className) {
    const validateErrorElement = document.getElementsByClassName(className || 'error-text')
    if (validateErrorElement.length > 0) {
        for (let index = 0; index < validateErrorElement.length; ++index) {
            validateErrorElement[index].setAttribute('style', 'display: block !important')
        }
        return false
    }
    return true
}