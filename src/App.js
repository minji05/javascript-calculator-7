import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
    Console.print(`입력된 문자열: ${input}`);
    this.processDelimiters(input);
    return input;
  }

  processDelimiters(input) {
    if (input.includes(',') || input.includes(':')) {
      Console.print(`쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열`);
    }
  }
}

export default App;
