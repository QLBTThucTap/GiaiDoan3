export function emailValidation(email) {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email || regex.test(email) === false) {
    return { isValid: false, msg: "Please input a valid email" };
  }
  return { isValid: true, msg: "" };
}

export function nameValidation(name) {
  if (!name || name.trim().length < 3) {
    return { isValid: false, msg: "Please input fullname" };
  }
  return { isValid: true, msg: "" };
}

export function mobileValidation(mobile) {
  const phoneRegex = /^[0-9]{10,11}$/;
  if (!mobile || phoneRegex.test(mobile) === false) {
    return { isValid: false, msg: "Please enter valid mobile number" };
  }
  return { isValid: true, msg: "" };
}

export function passwordValidation(password) {
  if (!password || password.length < 6) {
    return { isValid: false, msg: "Min password length of 6" };
  }
  return { isValid: true, msg: "" };
}
