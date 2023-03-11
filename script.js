// OpeningCeremony() → Race100M() → LongJump() → HighJump() → AwardCeremony()
function OpeningCeremony(Race100M) {
  setTimeout(() => {
    console.log("Let the games begin");
    let score = { red: 0, blue: 0, green: 0, yellow: 0 };
    console.log(score);
    Race100M(score, longJump);
  }, 1000);
}
function Race100M(score, longJump) {
  console.log("Race 100M started now...");
  setTimeout(() => {
    const redTime = Math.floor(Math.random() * 6) + 10;
    const greenTime = Math.floor(Math.random() * 6) + 10;
    const yellowTime = Math.floor(Math.random() * 6) + 10;

    const blueTime = Math.floor(Math.random() * 6) + 10;
    const times = {
      red: redTime,
      blue: blueTime,
      green: greenTime,
      yellow: yellowTime,
    };
    const sortedTimes = Object.entries(times).sort((a, b) => a[1] - b[1]);
    const firstColor = sortedTimes[0][0];
    const secondColor = sortedTimes[1][0];
    score[firstColor] += 50;
    score[secondColor] += 25;
    console.log(`${firstColor}  have won the  Race  100M and got 50 points`);
    console.log(
      `${secondColor} came's the second in Race 100M and got 25 points`
    );
    console.log(`Current score: ${JSON.stringify(score)}`);
    longJump(score, HighJump);
  }, 3000);
}

function longJump(score, HighJump) {
  setTimeout(() => {
    const colors = ["red", "blue", "green", "yellow"];
    const chosenColor = colors[Math.floor(Math.random() * 4)];
    score[chosenColor] += 150;
    console.log(`${chosenColor} won Long Jump and got 150 points`);
    console.log(`Current score: ${JSON.stringify(score)}`);
    HighJump(score, AwardCeremony);
  }, 2000);
}

function HighJump(score, AwardCeremony) {
  const input = prompt("What colour secured the highest jump?");
  if (input === null || input === "") {
    console.log("Event was cancelled,sorry");
    callbackFnc(score);
  } else {
    const color = input.toLowerCase();
    if (score[color] !== undefined) {
      score[color] += 100;
      console.log(
        `${color}  color has won the High Jump and got 100 points congratulations`
      );
      console.log(`Current score: ${JSON.stringify(score)}`);
      callbackFnc(score);
    } else {
      console.log("Event was cancelled,sorry");
      callbackFnc(score, AwardCeremony);
    }
  }
}

function AwardCeremony(score) {
  console.log("Award Ceremony has now  started...");
  const sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
  console.log(
    `${sortedScores[0][0]}  came first with ${sortedScores[0][1]} points many many congratulations `
  );
  console.log(
    `${sortedScores[1][0]} came second with ${sortedScores[1][1]} points congratulations to you too`
  );
}

OpeningCeremony(Race100M);
