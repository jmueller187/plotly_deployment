// Plot a line chart.
// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// // Plot drinks vs. percent ordered in a bar chart.
// var drinkData = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
// };

// var layout = {
//     title: "'Bar' Chart",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "Percent of Drinks Ordered"}
// };

// Plotly.newPlot("plotArea", [drinkData], layout);

// // Plot drinks vs. percent ordered in a pie chart.
// var drinkData = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
// };

// var data = [drinkData]
// var layout = {
//     title: "'Pie' Chart",
// };

// Plotly.newPlot("plotArea", data, layout);

// // Plot drinks vs. percent ordered in a scatter plot.
// var drinkData = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     mode: 'markers',
//     type: 'scatter'
// };

// var data = [drinkData]
// var layout = {
//     title: "Drinks Scatter Plot",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "Percent of Drinks Ordered"}
// };

// Plotly.newPlot("plotArea", data, layout);

// // Using map() method to double an array of numbers.
// var numbers = [1, 2, 3, 4, 5];

// // var doubled = numbers.map(num => num * 2);
// var doubled = numbers.map(function(num) {
//     return num * 2;
// });

// console.log(doubled);

// // Using map() method to add 5 to an array of numbers.
// var numbers = [0, 2, 4, 6, 8];

// var addFive = numbers.map(num => num + 5);

// console.log(addFive);

// // Using map() method to extract population from an array of city objects.
// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityPopulation = cities.map(function(city) {
//     return city.population;
// });

// console.log(cityPopulation);

// // Using filter() method
// var numbers = [1, 2, 3, 4, 5];

// var larger = numbers.filter(function(num) {
//     return num > 1;
// });

// console.log(larger);

// // Using filter() method, filter words starting with a specific letter.
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

// var firstS = words.filter(word => word.startsWith("s"));

// console.log(firstS);

// var firstS = words.filter(function(word) {
//     return word.startsWith("s");
// });

// console.log(firstS);

// // Using sort() method to sort an array of numbers.
// var familyAge = [3,2,39,37,9];

// sortedAge = familyAge.sort((a,b) => b - a);

// console.log(sortedAge);

// sortedAge = familyAge.sort((a,b) => a - b);

// console.log(sortedAge);

// Using slice() method
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var slice1 = words.slice(0, 3); // Slices first three elements of the array.
var slice2 = words.slice(3, ); // Slices from a selected element to the end of the array.

console.log(slice1);
console.log(slice2);