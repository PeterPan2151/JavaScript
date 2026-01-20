console.log("Hello World");
const x = 100;
console.log(x);

console.log(20, "Hello", true);
console.error("Alert");

console.table({ name: "Peter", email: "salv@gmail.com" });

console.group("Simple");
console.log(x);
console.log(20, "Hello", true);
console.error("Alert");
console.groupEnd();

const styles = "padding: 10px; background-color: black; color: green";

console.log("%cHello World", styles);
