console.log("lucky sevens");
let diceOne;
let diceTwo;
let diceTotal;
let totalRolls = 0;
let highRolls = 0;
let highMoney = 0;

function rollDice() {
  totalRolls += 1;
  diceOne = Math.floor(Math.random() * 6) + 1;
  diceTwo = Math.floor(Math.random() * 6) + 1;

  return {
    diceOne: diceOne,
    diceTwo: diceTwo
  };
}

document.querySelector(".play").addEventListener("click", function() {
  let bet = parseInt(document.querySelector(".bet").value);

  let money = bet;

  if (bet === 0) {
    alert("Please bet more than 0");
  } else if (isNaN(bet)) {
    alert("Not a valid bet");
  } else {
    while (money > 0) {
      console.log(rollDice());

      diceTotal = diceOne + diceTwo;

      console.log(`Dice Total: ${diceTotal}`);
      console.log(`Current Money: ${money}`);
      console.log(`Roll Count: ${totalRolls}`);

      if (diceTotal === 7) {
        money += 4;
        if (money > highMoney) {
          highMoney = money;
          highRolls = totalRolls;
        }
      } else {
        money -= 1;
      }
    }
    console.log("=================");
    console.log("Game Over");
    console.log(`Total Rolls: ${totalRolls}`);
    console.log(`High Winnings: ${highMoney}`);
    console.log(`Rolls at High Winnings: ${highRolls}`);

    const table = `
        <h1>Results</h1>
          <table> 
            <tr>
              <td>Starting Bet</td>
              <td>$${bet}</td>
            </tr>
            <tr>
              <td>Total Rolls Before Going Broke</td>
              <td>${totalRolls}</td>
            </tr>
            <tr>
              <td>Highest Amount Won</td>
              <td>$${highMoney}</td>
            </tr>
            <tr>
              <td>Roll Count at Highest Amount Won</td>
              <td>${highRolls}</td>
            </tr>
          </table>`;

    document
      .querySelector(".resultTable")
      .insertAdjacentHTML("beforeend", table);

    document.querySelector(".play").innerHTML = "Play Again";
    document.querySelector(".play").className = "playAgain";
  }

  document.querySelector(".playAgain").addEventListener("click", function() {
    window.location.reload();
  });
});
