import { calculateMaxProfit } from "./profit";

const mockData = [
  [1,4,6,7,3,9,2],
  [4,1,6,7,3,9,2,1], 
  [4,1,6,7,3,10,2,1], 
  [1,2,1,2,3,2,3,6,1,2,1,4,1],
];

const plummetingData = [
  [9,5,4,2,1],
]

describe("Profit Test", () => {
  describe("calculateMaxProfit", () => {
    it('should be calculate max profit result with mock data 1 and result 8', () => {
      const profit = calculateMaxProfit(mockData[0]);
      expect(profit).not.toBeNull();
      expect(profit).toBeGreaterThan(0);
      expect(profit).toEqual(8);
    });
  
    it('should be calculate max profit result with mock data 2 and result 8', () => {
      const profit = calculateMaxProfit(mockData[1]);
      
      expect(profit).not.toBeNull();
      expect(profit).toBeGreaterThan(0);
      expect(profit).toEqual(8);
    });
  
    it('should be calculate max profit result with mock data 3 and result 9', () => {
      const profit = calculateMaxProfit(mockData[2]);
      
      expect(profit).not.toBeNull();
      expect(profit).toBeGreaterThan(0);
      expect(profit).toEqual(9);
    });
  
    it('should be calculate max profit result with mock data 3 and result 5', () => {
      const profit = calculateMaxProfit(mockData[3]);
      
      expect(profit).not.toBeNull();
      expect(profit).toBeGreaterThan(0);
      expect(profit).toEqual(5);
    });
  });


  describe("CalculateMaxProfitAndPlummettingPrice", () => {
    it('should be calculate max profit result with plummeting price', () => {
      const profit = calculateMaxProfit(plummetingData[0]);
      
      expect(profit).not.toBeNull();
      expect(profit).toEqual(0);
    });

    it('should be calculate max profit(mock data 3) result with plummeting price and result 5', () => {
      const profit = calculateMaxProfit(mockData[3]);
      
      expect(profit).not.toBeNull();
      expect(profit).toEqual(5);
    });

    it('should be return 0 if prices < 2', () => {
      const profit = calculateMaxProfit([1]);
      
      expect(profit).not.toBeNull();
      expect(profit).toEqual(0);
    });
  });
});