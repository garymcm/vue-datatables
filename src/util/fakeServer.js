import getRandomInt from "./getRandomInt";
import shuffle from ".//shuffle";

export default () => {
  const data = ["Jane", "Mary", "Bob", "Mike", "Bill", "Judy"];
  return new Promise(res =>
    setTimeout(
      () => res(shuffle(data.slice(0, getRandomInt(1, data.length)))),
      1000
    )
  );
};
