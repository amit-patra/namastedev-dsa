// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
var maxProfit = function(prices) {
   let min = prices[0];
   let maxProfit = 0;
   for(let i=1; i<prices.length; i++){
    if((prices[i]-min)>maxProfit){
        maxProfit = prices[i]-min
    }
    if(min> prices[i]){
        min = prices[i]
    }
   }
   console.log(maxProfit);
    
};
let prices = [7,1,5,3,6,4]
// let prices =  [7,6,4,3,1] 
maxProfit(prices);