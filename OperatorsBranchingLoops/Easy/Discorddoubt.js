const databases = [
  {
    username: "userOne",
    password: "aman1234",
  },
  {
    username: "userTwo",
    password: "youtube",
  },
  {
    username: "userThree",
    password: "apple",
  },
];

function userValid(user, pass) {
  for (let i = 0; i < databases.length; i++) {
      console.log(databases[i].username,databases[i].password)
    if (databases[i].username === user && databases[i].password === pass)
      return true;
    else return false;
  }
}

console.log(userValid("userOne", "aman1234"));
