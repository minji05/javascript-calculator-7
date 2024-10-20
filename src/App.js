import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await this.getUserInput();
    this.printResult(input);
  }

  // 사용자에게 입력을 받는 메서드
  static async getUserInput() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
    return input;
  }

  static printResult(input) {
    Console.print(`입력한 문자열: ${input}`);
  }
}

export default App;
