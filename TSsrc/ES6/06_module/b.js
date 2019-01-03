"use strict";
exports.__esModule = true;
// tsc를 통해 컴파일하여 js로 변환할때는 기본적이르 tsc의 모듈타입인 ES6모듈을 사용해줘야 한다. 
// 타입스크립트컴파일엔진이 지원하는 모듈이 es모듈.
var exModule = require("./a");
var a_1 = require("./a");
// ts-node는 node실행환경을 기본으로 하기 때문에 commonjs를 사용해야함.
// 때마침 tsc즉 tsconfig에 commonjs라고 설정해 놓았기 때문에 자동으로 commonjs로 가는데, 의존관계는 tsc엔진이 잘 해석해서 처리해준다.
console.log(exModule["default"].word === a_1["default"].word);
