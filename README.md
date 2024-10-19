# javascript-calculator-precourse


## 🔎 구현할 기능 목록
1. 문자열 입력 처리
- [x] 사용자에게 "덧셈할 문자열을 입력해 주세요." 라는 문구를 출력하고 입력을 받는다.
- [x] 입력값이 빈 문자열이거나 공백만 있는 경우, 결과를 0으로 반환한다.

2. 구분자 처리
- [] 입력된 값이 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열인지 확인한다. 
- [] 구분자를 기준으로 입력된 문자열에서 숫자를 분리한다.
- [] 숫자가 하나일 경우 숫자를 그대로 반환하고, 여러 개일 경우 숫자들을 합산하여 결과를 반환한다.

3. 커스텀 구분자 처리
- [] 입력된 값이 "//"와 "\n" 사이에 커스텀 구분자가 있는지 확인한다.
- [] 커스텀 구분자를 기준으로 입력된 문자열에서 숫자를 분리한다.
- [] 숫자가 하나일 경우 숫자를 그대로 반환하고, 여러 개일 경우 숫자들을 합산하여 결과를 반환한다.

4. 오류 처리
- [] 입력된 문자열에 숫자와 구분자(쉼표, 콜론, 커스텀 구분자) 외에 다른 값이 포함된 경우, 유효하지 않은 입력으로 처리한다.
- [] 사용자가 유효하지 않은 입력값을 입력할 경우 "[ERROR]"로 시작하는 메세지를 보여준다.
- [] Error를 발생시킨 후 애플리케이션은 종료된다.

5. 결과 출력
- [] 반환된 결과값을 "결과: 합" 형식으로 출력한다. 


--------------
## 과제 진행 요구 사항
- [ ] 문자열 덧셈 계산기 저장소를 포크하고 클론한다.
- [ ] 기능을 구현하기 전 README.md에 구현할 기능 목록을 정리해 추가한다.
- [ ] Git의 커밋 단위는 README.md에 정리한 기능 목록 단위로 한다.
- [ ] AngularJS Git Commit Message Conventions을 참고해 커밋 메시지를 작성한다.
- [ ] 프리코스 진행 가이드 문서를 참고하여 과제를 진행한다.

## 기능 요구 사항
- [ ] 입력된 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.
- [ ] 쉼표(`,`) 또는 콜론(`:`)을 구분자로 가지는 문자열을 분리하여 각 숫자의 합을 반환한다.
- [ ] 커스텀 구분자를 사용할 수 있도록 구현한다.
- [ ] 잘못된 입력 값이 주어지면 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 프로그램을 종료한다.

## 프로그래밍 요구 사항
- [ ] Node.js 20.17.0 버전에서 실행 가능해야 한다.
- [ ] 프로그램의 시작점은 `App.js`의 `run()` 함수로 한다.
- [ ] `package.json` 파일은 변경하지 않는다.
- [ ] 외부 라이브러리 사용을 금지하고, 제공된 라이브러리만 사용한다.
- [ ] 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- [ ] 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- [ ] 자바스크립트 코드 컨벤션을 준수한다.
- [ ] @woowacourse/mission-utils에서 제공하는 Console API를 사용하여 입력 및 출력을 구현한다.
  - [ ] `Console.readLineAsync()`를 사용해 사용자 입력을 받는다.
  - [ ] `Console.print()`를 사용해 결과를 출력한다.
