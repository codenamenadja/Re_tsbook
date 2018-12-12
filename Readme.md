    1.task 및 npm 설정
        -ctl + shift + p => list중 test시 TSsrc폴더 안의 ts파일 tslint로 검사 후 npm test까지 묶어서 ts-node로 출력
        -ctl + shift + b => TSsrc 안의 폴더 모든 ts파일을 js화 해서 src 폴더안에 생성(d.ts, d.ts.map 생성)
        -npm에 있는 dependency모듈을 사용하려면 npm 명령어 내에서만 가능하기 때문에, task안에 npm명령어 이용.
            -ts-lint는 현재 글로벌로 설치되어있기 때문에, 해당 프로젝트 npm에서만 관여할 수 있는 것이 아니라 바로 사용가능.
        -다중상황에 대비해 설정 변경
            -ts-config를 이용한 컴파일 후 트랜스파일 작업만 테스크러너 ctl shift b
            -lint 와 ts-node는 npm에서 lint-all 과 ts-node01... 방식으로 스크립트 실행
    
    2.01>mapNset
        -map객체는 키값이 유일한 객체를 생성하기 위한 취지
        -set객체는 고유한 값만을 가진 배열을 만들기 위한 취지
        -map,set,array는 [Symbol.iterator](); 을 통해 index에 따른 iterator 객체를 생성할 수 있는 iterable객체이다.
        -그러나 map, set은 이미 메서드 entries() 를 통해 iterator객체를 반환하는 기능을 내장하고 있다.
        -console.log(map객체)의 결과는 Map {'key_1' => value, 'key_2' => value} 의 형태로 나온다.
        -console.log(set객체)의 결과는 Set {val, val, val} 의 형태로 나온다.
        - 이부분의 공통점은 배열은 기본적으로 객체이다. 인덱스 속성에 값이 연결되있는 것이고 해당 배열객체의 인덱스 수에 따라 arr.length의 값이 정해진다.

    3.02>destructuringA
        -null객체는 정확히 비어있는 {}상태를 의미한다. 타입은 object이며 인터페이스가 없다.
        -const a = ""; 이것은 null 이 아니다. string타입의 value로 정해진 null객체라고 보는 것이 맞기 때문에, 타입은 string. null객체와 가장 유사한 형태이다.
        -undefined는 할당되지 않음을 의미하므로 초기화 하지 않은 상태와 같다 혹은, let의 선언변수를 undefined로 할당해 버렸을때. 하지만
        타입을 정해놨다면, undefined로 재할당 될 수 없다.
        -destructuring은 길게 표기해야하는 번거로운 작업을 간단하게 줄여주는데 큰 용도가 있다. (조건) ? 참 : 거짓 의 한문장 조건문과 결합해도 좋고, 예시에 놓은 것처럼
            -{ name : renameA = "name부재시 할당값", age : renameB = (obj.age) ? obj.age : "부재시 할당값" } = obj{name:"junehan", age:28}
            -이렇게 풀 수 있다. 첫번째 매개변수초기할당하는 방식을 적용하면 간단하게 처리하지만 null값을 핸들링하기 위해서를 추가해야한다면, 두번째 방법을 쓸 수 있다. 물론 애초에 user-input측 로직에서 null을 입력할 시 undefined로 전송한다는 처리를 하면 문제는 없다.
    3.02>destructingB
        -destructingA가 객체푸는 법을 기본적으로 설명했다면 B에선 매개변수 단계에서 할당하여, 하위의 로직에서 좀 더 식별하기 쉬운 변수명으로 바꿔주고 있다.
        -변수명을 바꿔주면 기존의 왔던 변수명은 사용할 수 없게 된다. object.name의 값이 변경되는 상황.
        -destructing 동시에 초깃값 할당하는 것을 넘어서, 상황에 따라 매개변수명을 지정하는 단계에서 초기화 하기도 하고, 다양한 초깃값이 적용된다면, 아래 로직부분에서 초기화 할 수 도 있다.
        -fruitFuc는 ItypeA라는 인터페이스를 구현하는 객체를 매개변수로 받으며, fruitFuc는 그자체로 ForComplexOrDuplicateFuncType의 Fuction타입을 지정해주었다. 이는 중복되는 Function 타입 혹은 매개변수등이 너무 복잡할 경우, fruitFunc에서 타입을 정의하는 부분을 따로 떼어내어 fruitFunc: 지정한함수타입 = (매개변수) =>{구현부};
        로 함수 타입이 매개변수의 인터페이스를 불러와 단계적으로 정리된 모습을 보여주어 식별이 분명해진다.
        -인터페이스는 구현해야할 조건을 계획해놓은, 주로 객체형태의 복합성을(class포함하여 객체의 키가 메서드가 되기도 하고 값이 되기도 할 수 있기 때문에) 위해 쓰여지고, type은 functiontype이나 []객체의 복잡한 index types를 미리 정의하기에 편리하다. 
        -짧게 말하면 인터페이스는 로직구현부를 포함한 객체를 위하고 type은 로직구현부 자체를 묘사하거나 복잡한 배열을 묘사하기 좋다.
        
    4.01>OObjClassA
        -class FirstClass implements IForParentClass생성
        -IForParentClass {showUserData():void;} 해당 키만이 public하면서 static하지 않고 전이되는 prototype메서드.
        -instance.construtor.prototype의 메서드에는 접근가능
         instance.constructor.publicstaticMethod에는 접근불가
         FirstClass.publicStaticInClass()로만 접근가능.
         -prototype에 할당되는 메서드의 내부에 constructor만이 가지는 this가 있어도 컴파일에 문제가 없도록 설정이 되어있다.
         하지만 정말 까다롭게 검사한다면 명시적으로 this는 FirstClass이기때문에 오류가 나야할 것 같지만, 이것은 class라는 것이 가지는 특질을 prototype이 이해하고 있다는 것으로 판단됨.
    4.02>OOBJclassB
        -typescript는 javascript의 superset이기 때문에, es모듈 시스템을 기본 모듈시스템으로 책정하고 있다. ts를 javascript로 컴파일 할때 모듈시스템을 인식시켜서 파일간의 의존성을 처리 할 수 있다는 의미이다. 하지만 javascript는 es모듈을 지원받긴 하지만, node 명령어를 통해 처리해도 nodejs가 js파일에 대해 es모듈을 덧붙이는 인터프리터(컴파일을 진행하는)는 아니기 때문에, 브라우저에서만 (v6엔진에 붙여지는 ecma-script polyfill등을 통해)사용이 가능하다.
        -오프라인 상태에서 tsnode의 라는 패키지가 처리하는 node 명령어로 치환하는 작업에서, tsB가 tsA의 자원을 불러와 실행할 때, tsA의 문서 전체를 실행한 후에 불러오는 작업을 하고 있다. 그것은 아마 export가 어디서 끝나는지 미리 확인할 수 없다는점과 angular같은 프레임워크 module.ts에서 서로의 의존성이나 그에 대한 명세같은 것을 미리 규약에 정해놓고 실행하는 것이 아니기 때문에 일어나는 것으로 추측하고 있다.
        -base파일이 index에서 실행되는 문서이며, 특정 환경에서 실행 되는 subsetA, subsetB의 자원을 불러 온다해도 성숙한 웹프레임워크를 사용한다면, 불러오는 과정에 파일을 전부다 실행하는 일은 없을것이다.
            -그러나 자원을 불러오기위한 의존성에따른 파일구조 설계에서는 status에 저장되는(로그인정보유지) 실행부, 혹은 선언부는 class를 불러오는 파일과 별도로 관리하는 것이 좋을듯 하다.
            userBuildClass파일은 class만 보관하고, userBuildInterFace파일은 타입과 인터페이스만 보관해서
            userBuildLogic.js =(호출)=> userBuildClass.js =(참조)=> userBuildInterfaces.js
            와 같은 구조로 분명하게 나눠주는 것이 맞는 그림이라고 생각하자.
            -MainClass에서 발생 시간 로그 등의 정보를 저장하는 역할을 하고
            userBuild 및 boardBuild 클래스는 MainClass를 상속받아 다형성의 메서드나 속성을 갖고, 댓글Class도 있어야하는데 상속받는 것을 통해 메모리 사용량을 줄일 수 있는 설계를 하는것이 중요하다. 복잡한 일이다. 프레임워크는 자신들이 제공하는 리소스에서 어떤식으로 주제와 기능에 따라 분할할지 정도는 권고해주고 있으니, class관련 문제만 해결하면 꽤 잘 설계된 편으로 생각될만한 코드가 아닐까 생각해본다. 
    -------------boarder-------------line----------------------
    
    -- tsconfig basic options에 대한 이해 --
        {
        "compilerOptions": {
            /* Basic Options */
            
            "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */
                // ts file을 어느 버전의 javascript로 변환할 건지 에 대한 선택. module옵션과 함께 사용해야 합니다.

            "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
                //  모듈 형식지정 target이 es6면 ES6모듈로 자동설정, 그외의 default는 commonjs.
                //  --outFile 플래그 사용시 AMD와 System 형식만 사용할 수 있으며, ES6와 ES2015는 target이 ES5포함 그 이하 일때만 사용할 수 있음.
            
            // "lib": [],                             /* Specify library files to be included in the compilation. */
                // lib 옵션 사용시 target( 버전에 따른 polyfill ? )을 따르는 디폴트 라이브러리를 가져올 수 없음. 같이 기입해줘야함.
            
            // "allowJs": true,                       /* Allow javascript files to be compiled. */
                // js파일이 ts파일과 함께 컴파일 될 수 있도록 함.(js 와 ts를 같이 운용할 경우 서로를 인식 시켜줌.)
            
            // "checkJs": true,                       /* Report errors in .js files. */
                // allowjs 옵션과 결합해 사용하는 편이며, js파일의 오류가 있다면 같이 보고 해줌.
            
            // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
                // tsx파일에서 JSX를 지원 할지 설정함.
                <!-- 
                JSX란?
                https://www.typescriptlang.org/docs/handbook/jsx.html
                JSX는 embeddable XML 같은 Syntax입니다. 이것은 변환이 이행가능한 특정한 요소들 이라 칭해지는 시멘틱들을 따라서 유효한 자바스크립트로 변환 될 수 있음을 의미합니다. JSX는 React를 따라서 유명해 지고 있습니다. 타입스크립트는 embedding, 타입체킹, JSX를 자바스크립트로 바로 컴파일링 하는 것을 허락하고 있습니다.
                -- 사용법 --
                    1. TSX파일을 생성
                    2. JSX옵션을 허용
                        2.옵션에 따른 차이
                            option(mode)    /   input   /   output  / ouput File Extension
                            preserve         =>    <div />    =>    <div />                                            =>    .jsx
                            react                =>    <div />    =>   React.createElement("div")     =>    .js
                            react-native   =>    <div />    =>     <div />                                           =>    .js  
                -->
            
            // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
                //  타입스크립트 파일에 대응하는 .d.ts파일을 생성합니다. (default = false)
            
            // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
                //  .d.ts 파일에 각각 대응하는 .map파일을 생성합니다.
                <!--
                sourcemap, .map 이란?
                .map 파일은 장치가 컴파일하여 생성된 자바스크립트코드와 원본 타입스크립트 소스파일들 사이에서 map하도록 해주는 소스-맵파일입니다.
                많은 디버거툴(vscode, chrome dev tool)이 이러한 파일을 소비할 수 있으며 따라서 당신이 자바스크립트 파일이 아니라 타입스크립트 파일을 디버그 할 수 있도록 해줍니다.

                실질적인 디버깅 목적:
                source map이 당신에게 하게 하는 것은 타입스크립트 파일에 break포인트를 설정하여 코드를 디버그 할 수 있도록 하는 것입니다. 
                -->

            // "sourceMap": true,                     /* Generates corresponding '.map' file. */
                // .map파일을 생성할지 설정합니다.

            // "outFile": "./",                       /* Concatenate and emit output to single file. */
                //  출력을 연결해 단일파일로 내보냅니다. 순서는 triple-slash의 references와 imports를 따라 컴파일러에 전달된 파일 리스트에 따라 결정됩니다. 
            
            // "outDir": "./",                        /* Redirect output structure to the directory. */
                // 출력 결과를 담을 폴더위치 설정.

            // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
                // 인풋(컴파일될)파일의 위치 --outdir와 함꼐 사용되어야 합니다.

            // "composite": true,                     /* Enable project compilation */
                //  프로젝트 참조를 위해 필요항목 declatrion, composite. project모음(편집)을 허가합니다. ts3.0추가항목

            // "removeComments": true,                /* Do not emit comments to output. */
                // 컴파일 후 js파일에 comment를 제거합니다.

            // "noEmit": true,                        /* Do not emit outputs. */
                //  컴파일 결과를 생성하지 않습니다.(default = false).
                // 왜 있는지 조금 의아한 항목.
            
            // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
                //  tslib에서 emit heplers[예) __extends, __rest, ...]을 import합니다. 
            
            // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
                //  target을 ES5, ES3로 설정했을때 for...of, ...(spread), destructuring을 지원합니다.(es6 문법)

            // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */
                //  각 파일을 개별 모듈로 변환(transpile)합니다. 'ts.transpileModule'과 유사합니다.(default = false)
            }
        }

        -----
        0. special
            1.why not to use New String()
                -string을 new String으로 선언할 시에 단순한 문자 데이터가 들어가는 일에 비해 많은 리소스, 즉 객체의 형태로 전달되어 온다.
                -거기엔 프로토타입 메서드들이 delagation 된다. 즉, new로 선언하는 일은 객체를 돌려받는다. 
                    const str = new String("sample")에서
                    (str.__proto__ === String)
                -"", 즉 string literal로 값을 할당하면 strObj.constructor.prototype.valueOf() 로 추정되는 메서드가 호출되어 반환된 원형 문자열을 돌려받는다.
                    String.prototype.valueOf === strObj.valueOf: true
                    String.valueOf === strObj.valueOf: false
                    String.valueOf === Object.constructor.prototype.valueO: true
                    String.constructor === Function: true
                    String.constructor === Object.constructor: true
                    Object.valueOf === Function.prototype.valueOf: true
                    Object가 String을 만들고 String이 new String을 가능하게 한다.
                -자바스크립트는 원시자료형이라는 타입을 만들어야했고, 그에 따라 반환하는 것이 객체의 형태에서 벗어난 것이어야 한다는 이야기이다.
                -객체의 형태로 존재할때 String의 메서드에 new String의 객체가 prototype으로 수정하는 가능성을 방지.
                
                2.함수형 프로그래밍과 싱글톤 객체
                    -함수형 프로그래밍은 가능한 함수에 의존하는 방식으로 코드를 구성하며, 그 함수는parameter-arguments에 따라 유연한 대처를 가능하도록 함으로써, void의 함수를 줄이고, same-input => same-output이 항상 적용되는 형태이어야 한다.
                    -1차:유저 리스트를 받아 콜백 실행하는 함수가 담긴 변수 myFunc
                        -2차: myFunc를 호출하면서 변수에 할당하되 argument에 콜백을 포함하여 유저리스트를 어떻게 필터링을하고, 어떤 결과로 출력한 리스트를 뽑을 것인지 선언시 정할 수 있게 되면, 수행한 이후!
                            -3차: 해당 로직은 전달되고 사용된 이후 사라지고,돌아오는 것은 필터링 된 배열객체가 돌아오게 되는 비교적 깔끔한 형태.
                                -4차: 이것을 또한 즉, 원본(온전한) 배열객체를 싱글턴객체로 하여, 리턴하는 것이 delegation을 갖도록 하면, 그만큼 코드 복사를 줄일 수 있다.
                    -싱글톤과 함수형에 대한 구체적인 것은 0-3에서 구현.