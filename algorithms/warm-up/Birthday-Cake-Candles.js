// You are in charge of the cake for a child's birthday. It will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Your task is to count how many candles are the tallest.

// Example


// The tallest candles are 4 units high. There are 2 candles with this height, so the function should return 2.

// Function Description

// Complete the function  with the following parameter(s):

// : the candle heights
// Returns

// : the number of candles that are tallest
// Input Format

// The first line contains a single integer, , the size of .
// The second line contains  space-separated integers, where each integer  describes the height of .

// Constraints

// Sample Input 0

// 4
// 3 2 1 3
// Sample Output 0

// 2
// Explanation 0

// Candle heights are . The tallest candles are  units, and there are  of them.

let nums ="3 2 1 3"
const arr = nums.split(' ').map(el => parseInt(el))


function birthdayCakeCandles(candles) {

    let candleObj ={}

    for(let i=0; i<candles.length ;i++){
        let num = candles[i]

        candleObj[num]= candleObj[num]? candleObj[num]+1:1

    }

    console.log(Math.max(... Object.values(candleObj)))

}

birthdayCakeCandles(arr)