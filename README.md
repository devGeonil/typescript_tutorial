# typescript_tutorial

Learning Typescript by making a Blockchain with it

## 타입스크립 -> 자바스크립트 + 타입

>1) npm install -g Typescript <br>
>2) tsconfig.json 파일 생성 후 내부 설정
<pre>
  <code>
      {
        "compilerOptions":{
          "module":"commonjs",
          "target":"ES2015",
          "sourceMap":true
        },
        "include":[
          "index.ts"
        ],
        "exclude":[
          "node_modules"
        ]
      }
    </code>
  </pre>

>3) index.ts 파일을 생성하고 안에 내용 작성<br>
>4) 터미널에서 tsc 입력 -> index.js + index.js.map 파일 생성됩니다.

package.json 내부에서
<pre>
<code>
script:{
"start":"node index.js",
"prestart":"tsc"
}
</code>
</pre>

-------------------------------------------------

### 1) Typed 언어!!
= 어떤 종류의 변수와 데이터 인지 설명 해줘야 한다!
<pre>
  <code>
    const name = "geonil",
      age = 27,
      gender = "male";
    const sayHi = (name:string, age:number, gender:string):void => {
      console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
    }
    sayHi(name,age);
    export {};
  </code>
 </pre>


### 2)npm install ts-watch --save-dev
> 2-1) package.json 내부 수정 합니다.<br>
> 2-2)npm start: "tsc-watch --onSuccess \"node dist/> index.js\"   " <br>
> 2-3)dist + src 폴더 생성합니다. <br>
> 2-4)src 내부로 index.ts 파일 이동 <br>
> 2-5)tsconfig 수정합니다.

#### src 폴더에 있는 모든 것이 컴파일된다 모든 컴파일된 파일은 dist로 들어가고
<pre>
  <code>
  {
    "compilerOptions":{
      "module":"commonjs",
      "target":"ES2015",
      "sourceMap":true,
      "outDir":"dist"
    },
    "include":["src/**/*"],
    "exclude":["node_modules"]
  }
  </code>
</pre>  

### 3) interface를 사용하여 object(json)의 타입을 설정 할 수 있다.
<pre>
  <code>
  interface Human{
    name:string,
    age:number,
    gender:string
  }

  const person = {
    name : "Geonil",
    gender : "male",
    age : 28

  }
  const sayHi = (person:Human):string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
  }

  console.log(sayHi(person));
  export {};
  </code>
</pre>

### 4) interface 대신해서 사용할 수 있는 class 이용방법
<pre>
  <code>
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


  </code>
</pre>


### 5) Typescrupt Bit Coin from now on
##### = 블록체인은 블록의 연결을 의미 한다.
<pre>
  <code>
  class Block{
    public index:number;
    public hash:string;
    public previousHash:string;
    public data:string;
    public timestamp:number;

    constructor(index:number,hash:string,previousHash:string,data:string,timestamp:number){
      this.index = index;
      this.hash = hash;
      this.previousHash = previousHash;
      this.data = data;
      this.timestamp = timestamp;
    }
  }

  const genesisBlock:Block = new Block(0,"132498374229872","","Hello",123456);

  let blockchain:Block[] = [genesisBlock];
  //다음과 같이 작성 하게 되면, Block type이 아니기 때문에 push 할 수 없다.
  blockchain.push("something")
  console.log(blockchain);

  export {};

  </code>
</pre>

### 6) 블록 체인의 확장
>6-1) npm install crypto-js<br>
>6-2)  impot * as CryptoJS from "crypto-js" 타입스크립트 import 방법<br>
<pre>
  <code>
  import * as CryptoJS from "crypto-js";

  class Block{
    public index:number;
    public hash:string;
    public previousHash:string;
    public data:string;
    public timestamp:number;

    constructor(index:number,hash:string,previousHash:string,data:string,timestamp:number){
      this.index = index;
      this.hash = hash;
      this.previousHash = previousHash;
      this.data = data;
      this.timestamp = timestamp;
    }


  //static methodsS
  static calculateBlockHash = (index:number, previousHash:string, timestamp:number, data:string):string => CryptoJS.SHA256(index+previousHash+timestamp+data).toString();
  static validateStructure = (aBlock:Block):boolean => typeof aBlock.index === "number" && typeof aBlock.hash === "string" && typeof aBlock.previousHash === "string" && typeof aBlock.timestamp === "number" && typeof aBlock.data === "string";
  }


  const genesisBlock:Block = new Block(0,"132498374229872","","Hello",123456);

  let blockchain:Block[] = [genesisBlock];

  const getBlockchain = ():Block[] => blockchain;
  const getLatestBlock = ():Block => getBlockchain()[getBlockchain().length-1];
  const getNewTimeStamp = ():number => Math.round(new Date().getTime() / 1000);
  const createNewBlock = (data:string):Block => {
    const previousBlock:Block = getLatestBlock();
    const newIndex:number = previousBlock.index + 1;
    const newTimestamp:number = getNewTimeStamp();
    const newHash:string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock:Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    addBlock(newBlock);
    return newBlock;
  }


  const getHashforBlock = (aBlock:Block):string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);

  //블록을 검증하는 함수
  const isBlockValid = (candidateBlock:Block, previousBlock:Block):Boolean =>{
    if(!Block.validateStructure(candidateBlock)){
      console.log(1)
      return false;
    }else if(previousBlock.index + 1 !== candidateBlock.index){
      console.log(2)
      return false;
    }else if(previousBlock.hash !== candidateBlock.previousHash){
      console.log(3)
      return false;
    }else if(getHashforBlock(candidateBlock) !== candidateBlock.hash){
      console.log(4)
      return false;
    }else{
      return true;
    }
  }

  //블록을 체인에 추가 하는 함수
  const addBlock = (candidateBlock:Block):void =>{
    if(isBlockValid(candidateBlock, getLatestBlock())){
      blockchain.push(candidateBlock);
    }else{console.log("error")}
  }

  createNewBlock("second Block");
  createNewBlock("third Block");
  createNewBlock("forth Block");




  console.log(blockchain);


  export {};

  </code>
</pre>
