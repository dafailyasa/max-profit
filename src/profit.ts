export const calculateMaxProfit = (prices: number[]): number => {
  if (prices.length < 2 ) {
    return 0;
  }

  let minPrice: number = prices[0];
  let maxProfit: number = 0;

  prices.forEach((price: number) => {
    if(price < minPrice){
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  });

  return maxProfit;
};


// handle another function for prices is plummetting
export const CalculateMaxProfitAndPlummettingPrice = (prices: number[]): number => {
  const maxProfit = calculateMaxProfit(prices);
  if(maxProfit < 0) return 0

  return maxProfit;
}

