function validate(password) {
  return /^\w*(?=(((((\d\w*[a-z]\w*[A-Z]\w*)|(\d\w*\[A-Z]\w*[a-z]\w*))|([a-z]\w*\d\w*[A-Z]\w*))|([a-z]\w*[A-Z]\w*\d\w*))|([A-Z]\w*\d\w*[a-z]\w*))|([A-Z]\w*[a-z]\w*\d\w*))\w{6,}$/.test(password);
}
