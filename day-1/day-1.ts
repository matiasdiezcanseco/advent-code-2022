const decoder = new TextDecoder("utf-8");
const file = await Deno.readFile("./input.txt");
const data = decoder.decode(file);

const caloriesArray = data.split("\n");

const elvesCalories = [] as number[];
let sum = 0;

caloriesArray.forEach((cal) => {
  if (isNaN(parseInt(cal))) {
    elvesCalories.push(sum);
    sum = 0;
    return;
  }
  sum += parseInt(cal);
});

const max = elvesCalories.reduce((a, b) => (a > b ? a : b));
console.log(max);

const orderedCalories = [...elvesCalories].sort((a, b) => b - a);
console.log(orderedCalories[0] + orderedCalories[1] + orderedCalories[2]);
