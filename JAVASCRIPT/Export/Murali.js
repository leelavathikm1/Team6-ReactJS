export function sayHello(students) {
  students.forEach((std) => {
    console.log("hello" + std + "How are you");
  });
}
var students = ["Ram", "ravi", "Krishna"];

sayHello();
