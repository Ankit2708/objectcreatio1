const Student={
    name:'Ankit',
    age:30,
    getSomething(){
        console.log('hi I am'+ this.name);
    }
}
Student.getSomething();

const add=(a,b)=>{
    return a*b;
  }
console.log(add(3,2));