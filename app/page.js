import AboutMe from "./components/aboutme/aboutme";
import FavouriteTools from "./components/favourite-tools.jsx/favourite-tools";
import Footer from "./components/footer/footer";
import HeroSection from "./components/Herosection/herosection";
import Portfolio from "./components/Portfoliosection/portfolio";
import Projects from "./components/projects/projects";
import Resume from "./components/resume/resume";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Portfolio />
      <Projects />
      <AboutMe />

      <Resume />
      <FavouriteTools />
      <Footer />
    </>
  );
}

// function findDuplicaates() {
//   const seen = new Set();
//   const duplicates = new Set();
//   for (const num of arr) {
//     if (seen.has(num)) {
//       duplicates.add(num);
//     } else {
//       seen.add(num);
//     }
//   }
//   return Array.from(duplicates);
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 8, 2, 1, 6, 7, 3, 10];
// const result = findDuplicaates(arr);
// console.log(result);

// const array = [
//   { id: "1", marks: "30" },
//   { id: "2", marks: "40" },
//   { id: "3", marks: "30" },
//   { id: "4", marks: "10" },
//   { id: "5", marks: "40" },
// ];

// const marksset = {};

// array.forEach((element) => {
//   const { id, marks } = element;

//   if (!marksset[marks]) {
//     marksset[marks] = [];
//   }
//   marksset[marks].push(id);
// });
// const result = Object.keys(marksset).map((marks) => ({
//   marks: marks,
//   id: marksset[marks],
// }));
// console.log(result);

// const cart = [
//   { name: "Laptop", price: 1000, quantity: 1 },
//   { name: "Mouse", price: 20, quantity: 2 },
//   { name: "Keyboard", price: 50, quantity: 1 },
// ];
// const taxRate = 0.1; // 10% tax
// const discount = 50; // $50 discount

// function calculatetotal(cart, taxRate, discount) {
//   let subTotal = 0;

//   for (let i = 0; i < cart.length; i++) {
//     let item = cart[i];
//     const itemTotal = item.price * item.quantity;
//     subTotal = subTotal + itemTotal;
//   }
//   const discountTotal = subTotal - discount;
//   const taxedTotal = discountTotal * taxRate;
//   const finalcost = discountTotal + taxedTotal;
//   return Number(finalcost.toFixed(2));
// }
// console.log(calculatetotal(cart, taxRate, discount));

// function frequencycounter(arr) {
//   const uniquehash = {};

//   for (const num of arr) {
//     if (uniquehash[num] === undefined) {
//       uniquehash[num] = 1;
//     } else {
//       uniquehash[num]++;
//     }
//     console.log(uniquehash);
//   }

//   let morefrequency = arr[0];
//   let highestfrequency = 1;

//   for (let element in uniquehash) {
//     console.log(element);
//     if (uniquehash[element] > highestfrequency) {
//       highestfrequency = uniquehash[element];
//       morefrequency = element;
//     }
//   }
//   return isNaN(morefrequency) ? mostFrequent : Number(morefrequency);
// }

// const array1 = [2, 3, 4, 5, 6, 7, 8, 1, 2, 1, 1, 4, 4, 3, 2, 6, 4, 9, 10];
// console.log("final", frequencycounter(array1));
