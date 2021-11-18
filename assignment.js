// const ParisHeight = 1.69;
// const ParisWeight = 78;
// const OreziWeight = 92;
// const OreziHeight = 1.95;
// const ParisBMI = ParisWeight / ParisHeight ** 2;
// const OreziBMI = OreziWeight / OreziHeight ** 2;

// console.log(ParisBMI);
// console.log(OreziBMI);
// if (ParisBMI > OreziBMI) {
//   console.log('Hain🤩');
// } else {
//   console.log('Collect Your school fees😡');
// }

// ParisBMI < OreziBMI
//   ? console.log('Hain🤩')
//   : console.log('Collect Your school fees😡');

// const ParisHeight1 = 1.88;
// const ParisWeight1 = 95;
// const OreziWeight1 = 85;
// const OreziHeight1 = 1.76;
// const ParisBMI1 = ParisWeight1 / ParisHeight1 ** 2;
// const OreziBMI1 = OreziWeight1 / OreziHeight1 ** 2;

// console.log(ParisBMI1);
// console.log(OreziBMI1);
// if (ParisBMI1 < OreziBMI1) {
//   console.log('Hain🤩');
// } else {
//   console.log('Dumb! Collect Your school fees😡');
// }

// ParisBMI1 > OreziBMI1
//   ? console.log('Hain🤩')
//   : console.log('Dumb! Collect Your school fees😡');

const calcAverage = (i, d, u) => (i + d + u) / 3;
const dolphins = (44, 23, 71);
const koalas = (65, 54, 49);
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
// const avgDolphins = dolphins.sum / dolphins.length;
// const avgKoalas = koalas.sum / koalas.length;

console.log(avgDolphins, avgKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Weldone Dolphins ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Weldone Koalas ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log(`draw`);
  }
};

checkWinner(avgDolphins, avgKoalas);

const frontend = ['Lanre', 'Eggy', 'Obehi'];
const backend = ['Sam', 'Mike', 'David', 'Eniola', 'Mariam'];
const techStudioStudents = [...frontend, ...backend];
console.log(techStudioStudents);

const str = ['Paris', 'Hello'];
const number = [2, 3, 15];
const boolean = [true, false];
const dataType = [...str, ...number];

console.log(dataType);
