const decoder = new TextDecoder("utf-8");
const file = await Deno.readFile("./input.txt");
const data = decoder.decode(file);

const rounds = data.split("\n");

const maps = new Map();
maps.set("A", "rock");
maps.set("B", "paper");
maps.set("C", "scissors");
maps.set("X", "rock");
maps.set("Y", "paper");
maps.set("Z", "scissors");

const evaluateGame = (enemy: string, me: string) => {
  switch (enemy + me) {
    case "scissorsrock":
    case "paperscissors":
    case "rockpaper":
      return 6;
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      return 3;
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
    default:
      return 0;
  }
};

const evaluateOption = (option: string) => {
  switch (option) {
    case "rock":
      return 1;
    case "paper":
      return 2;
    case "scissors":
    default:
      return 3;
  }
};

let score = 0;

rounds.forEach((round) => {
  const [left, right] = round.trim().split(" ");
  const enemy = maps.get(left);
  const me = maps.get(right);
  score += evaluateGame(enemy, me);
  score += evaluateOption(me);
});

console.log(score);
