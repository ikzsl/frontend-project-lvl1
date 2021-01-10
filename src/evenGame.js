import readlineSync from 'readline-sync';

const evenLogic = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let counter = 0;
  while (counter < 3) {
    const number = Math.trunc(Math.random() * 100);
    const isEven = !(number % 2);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && isEven) || (answer === 'no' && !isEven)) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${
          isEven ? 'yes' : 'no'
        }.`,
      );
      counter = 0;
    }
  }
  console.log('Congratulations, Bill!');
};
export default evenLogic;
