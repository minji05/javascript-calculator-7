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

    const validNumbers = App.getValidNumbers(input);

    App.printSumOrNumber(validNumbers);
  }

  static getValidNumbers(input) {
    return input
      .split(/[, :]/)
      .map(Number)
      .filter(num => !Number.isNaN(num));
  }

  static printSumOrNumber(numbers) {
    if (numbers.length === 1) {
      Console.print(numbers[0]);
    } else {
      const sum = App.sumNumbers(numbers);
      Console.print(sum);
    }
  }

  static sumNumbers(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

export default App;
