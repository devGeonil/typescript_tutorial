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
