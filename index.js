function email(email) {
    let regex_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex_email.test(email);
}

function phone_number(phone_number) {
    let regex_phone_number = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return regex_phone_number.test(phone_number);
}

function time(time) {
    let regex_time = /^(1[0-2]|0?[1-9]):[0-5][0-9]\s?(AM|PM)$/i;
    return regex_time.test(time);
}

function credit_card(credit_card) {
    let regex_credit_card = /^\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}$/;
    return regex_credit_card.test(credit_card);
}

function html(tags) {
    let regex_tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/;
    return regex_tags.test(tags);
}

function currency(currency) {
    let regex_money = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
    return regex_money.test(currency);
}

// Used examples
const testEmail = "user@example.com";
const testPhoneNumber = "123-456-7890";
const testCreditCard = "1234 5678 9012 3456";
const testTime = "02:30 PM";
const testHtml = "<p>Hello World</p>";
const testCurrency = "$1,234.56";

console.log("Email:", email(testEmail)); 
console.log("Phone-number:", phone_number(testPhoneNumber)); 
console.log("Credit-card:", credit_card(testCreditCard));
console.log("Time:", time(testTime)); 
console.log("HTML:", html(testHtml)); 
console.log("Currency:", currency(testCurrency)); 