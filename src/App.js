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
      return;
    }

    if (input.includes(',') || input.includes(':')) {
      Console.print('쉼표(,) 또는 콜론(:)이 포함된 문자열입니다.');
      return;
    }

    Console.print('쉼표(,) 또는 콜론(:)이 포함되지 않은 문자열입니다.');
  }
}

export default App;
