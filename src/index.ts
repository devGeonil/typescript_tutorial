class Human{

  //public 외부에서 접근 가능 private 은 내부 에서만 접근 가능
  public name: string;
  public age: number;
  public gender: string;

  //클래스 인스턴스가 생성될 때 실행되는 함수
  constructor(name:string, age:number, gender?:string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const sayHi = (person:Human):string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

const geonil = new Human("geonil", 28, "male")


console.log(sayHi(geonil));
export {};
