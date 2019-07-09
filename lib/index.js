function multiples(n) {
  let mults = [];
  for(let i = 1; i <= 100; i++) {
    if(i % n === 0) {
      mults.push(i);
    }
  }
  return mults;
}


module.exports = multiples;
