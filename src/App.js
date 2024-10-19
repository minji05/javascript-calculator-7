import { Console } from '@woowacourse/mission-utils';

class App {
  static async run() {
    const input = await App.getUserInput();
    App.printResult(input);
  }

  static async getUserInput() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
    return input;
  }

  static printResult(input) {
    if (!input || !input.trim()) {
      Console.print(0);
    } else {
      Console.print(input);
    }
  }
}

export default App;
