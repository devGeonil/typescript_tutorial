# typescript_tutorial

Learning Typescript by making a Blockchain with it

타입스크립 -> 자바스크립트 + 타입

1) npm install -g Typescript
2) tsconfig.json 파일 생성 후 내부 설정
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

3) index.ts 파일을 생성하고 안에 내용 작성ㄴ
4) 터미널에서 tsc 입력 -> index.js + index.js.map 파일 생성됩니다.

* package.json 내부에서
1) script:{
  "start":"node index.js",
  "prestart":"tsc"
}

-------------------------------------------------

1) Typed 언어!!
= 어떤 종류의 변수와 데이터 인지 설명 해줘야 한다!

const name = "geonil",
  age = 27,
  gender = "maile";
const sayHi = (name:string, age:number, gender:string):void => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
}
sayHi(name,age);
export {};


2)npm install ts-watch --save-dev
2-1)package.json 내부 수정 합니다.
2-2)npm start: "tsc-watch --onSuccess \"node dist/index.js\"   "
2-3)dist + src 폴더 생성합니다.
2-4)src 내부로 index.ts 파일 이동
2-5)tsconfig 수정합니다.
  {
    "compilerOptions":{
      "module":"commonjs",
      "target":"ES2015",
      "sourceMap":true,
      "outDir":"dist"  <--- 모든 파일은 이리로 들어가고
    },
    "include":["src/**/*"], <-- scr 폴더에 있는 모든 것이 컴파일된다
    "exclude":["node_modules"]
  }
