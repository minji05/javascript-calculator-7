import { Console } from '@woowacourse/mission-utils';

class App {
  static async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');

    if (!input || !input.trim()) {
      Console.print(0);
    }
  }
}

export default App;
