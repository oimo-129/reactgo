const user = { name: "张三", age: 25, hobbies: ["读书", "游戏"] };
function greet(name) {
  console.log("Hello, " + name);
}
if (user.age > 18) {
  greet(user.name);
}
