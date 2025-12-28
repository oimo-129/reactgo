class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak(){
        return `我叫${this.name},今年${this.age}`;
    }
}
//实例对象
const person1 = new Person("张三", 18);
console.log(person1.name); // 张三
console.log(person1.age);   
console.log(person1.speak()); // 我叫张三,今年18