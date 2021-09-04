//Pincode Validation 
let pincodeCheck = RegExp('^[1-9]{1}[0-9]{5}$');
let pincodeCheck1 = RegExp('^[1-9]{1}[0-9]{2}[\\s][0-9]{3}$');

//UC1 Pincode
let sampleCheck1 = pincodeCheck.test(400088);
console.log(sampleCheck1);

//UC2 Pincode
let sampleCheck2 = pincodeCheck.test("A400088");
console.log(sampleCheck2);

//UC3 Pincode
let sampleCheck3 = pincodeCheck.test("400088B");
console.log(sampleCheck3);

//UC4 Pincode
let sampleCheck4 = pincodeCheck1.test("400 088");
console.log(sampleCheck4);

//Email Validation
//UC1 Email
let emailCheck1 = RegExp('^[a-z]{3,}$');
let sampleCheck5 = emailCheck1.test("abc");
console.log(sampleCheck5);

//UC2 Email
let emailCheck2 = RegExp('^[a-z]{3,}?(@[a-z]{2,})$');
let sampleCheck6 = emailCheck2.test("abc@bridgelabz");
console.log(sampleCheck6);

//UC3 Email
let emailCheck3 = RegExp('^[a-z]{3,}(.)?(@[a-z]{2,})(.([a-z]{2,}))$');
let sampleCheck7 = emailCheck3.test("abc.@bridgelabz.co");
console.log(sampleCheck7);

//UC4 Email
let emailCheck4 = RegExp('^[a-z]{3,}(.)([a-z_+-.]{3,})?(@[a-z]{2,})(.([a-z]{2,}))$');
let sampleCheck8 = emailCheck4.test("abc.x_yz@bridgelabz.co");
console.log(sampleCheck8);

//UC5 Email
let emailCheck5 = RegExp('^(abc)+(((\\.[0-9])|(\\+[0-9])|(\\-[0-9])|[0-9]){0,})@[a-z0-9]{1,}(.)(([a-z]{2,}(.))|([a-z]{2,}(,)))[a-z]{0,}');
let sampleCheck9 = emailCheck5.test("abc+100@1.com");
console.log(sampleCheck9);