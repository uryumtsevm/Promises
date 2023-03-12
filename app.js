const wringOutTime = 500;
const squattingTime = 200;

function wringOut(count) {
  return new Promise((resolve, reject) => {
    if (count > 100) {
      reject(new Error("Слишком много отжиманий"));
    }
    setTimeout(() => {
      resolve();
    }, count * wringOutTime);
  });
}

function squatting(count) {
  return new Promise((resolve, reject) => {
    if (count > 50) {
      reject(new Error("Слишком много приседаний"));
    }
    setTimeout(() => {
      resolve();
    }, count * squattingTime);
  });
}

async function myTraining() {
  try {
    console.log("Начинаем отжимания");
    await wringOut(10);
    console.log("Отжался 10 раз");
    await squatting(20);
    console.log("Присел 20 раз");
    return true;
  } catch (err) {
    console.log(err.toString());
    return false;
  }
}

myTraining().then((result) => {
  console.log(result);
});
