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
      gender = "maile";
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
#### 3-1)

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
