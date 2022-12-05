const decoder = new TextDecoder("utf-8");
const file = await Deno.readFile("./input.txt");
const data = decoder.decode(file);

const rounds = data.split("\n");

const maps = new Map();
maps.set("A", "rock");
maps.set("B", "paper");
maps.set("C", "scissors");
maps.set("X", "loose");
maps.set("Y", "draw");
maps.set("Z", "win");

const evaluateCondition = (option: string) => {
  switch (option) {
    case "win":
      return 6;
    case "draw":
      return 3;
    case "loose":
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

const evaluateSelection = (enemy: string, condition: string) => {
  switch (enemy + condition) {
    case "rockwin":
      return "paper";
    case "paperwin":
      return "scissors";
    case "scissorswin":
      return "rock";
    case "rockloose":
      return "scissors";
    case "paperloose":
      return "rock";
    case "scissorsloose":
      return "paper";
    case "rockdraw":
    case "paperdraw":
    case "scissorsdraw":
    default:
      return enemy;
  }
};

let score = 0;

rounds.forEach((round) => {
  const [left, right] = round.trim().split(" ");
  const enemy = maps.get(left);
  const condition = maps.get(right);
  score += evaluateCondition(condition);
  const me = evaluateSelection(enemy, condition);
  score += evaluateOption(me);
});

console.log(score);
