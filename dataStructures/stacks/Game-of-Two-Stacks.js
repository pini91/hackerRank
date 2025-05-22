// Alexa has two stacks of non-negative integers, stack  and stack  where index  denotes the top of the stack. Alexa challenges Nick to play the following game:

// In each move, Nick can remove one integer from the top of either stack  or stack .
// Nick keeps a running sum of the integers he removes from the two stacks.
// Nick is disqualified from the game if, at any point, his running sum becomes greater than some integer  given at the beginning of the game.
// Nick's final score is the total number of integers he has removed from the two stacks.
// Given , , and  for  games, find the maximum possible score Nick can achieve.

// Example


// The maximum number of values Nick can remove is . There are two sets of choices with this result.

// Remove  from  with a sum of .
// Remove  from  and  from  with a sum of .
// Function Description
// Complete the twoStacks function in the editor below.

// twoStacks has the following parameters: - int maxSum: the maximum allowed sum
// - int a[n]: the first stack
// - int b[m]: the second stack

// Returns
// - int: the maximum number of selections Nick can make

// Input Format

// The first line contains an integer,  (the number of games). The  subsequent lines describe each game in the following format:

// The first line contains three space-separated integers describing the respective values of  (the number of integers in stack ),  (the number of integers in stack ), and  (the number that the sum of the integers removed from the two stacks cannot exceed).
// The second line contains  space-separated integers, the respective values of .
// The third line contains  space-separated integers, the respective values of .
// Constraints

// Subtasks

//  for  of the maximum score.
// Sample Input 0

// 1
// 5 4 10
// 4 2 4 6 1
// 2 1 8 5
// Sample Output 0

// 4
// Explanation 0

// The two stacks initially look like this:

// image

// The image below depicts the integers Nick should choose to remove from the stacks. We print  as our answer, because that is the maximum number of integers that can be removed from the two stacks without the sum exceeding .

// image

// (There can be multiple ways to remove the integers from the stack, the image shows just one of them.)

// Language

let a= [4, 2, 4, 6, 1]
let b= [2, 1, 8, 5]

function twoStacks(maxSum, a, b) {
    //the number of cylinders Nick can take
    let cylinders=0
    //tracking the sum of the values of each cyliners
    let sumCount = 0

    //counter for the stacks
    let countA=0
    let countB=0

    //first we grab the elements of stack a
    while(countA<a.length && sumCount+a[countA]<=maxSum){
        sumCount += a[countA]
        countA++
    }
    cylinders=countA

    //we then take elements from stack b
    while(countB < b.length){
        sumCount += b[countB]
        countB++
        //cylinders++

        while(sumCount>maxSum && countA>0){
            countA--; // we  first remove the counter low. So that when we "le restemos" to sumCount we grab the correct index
            sumCount-=a[countA]//we deleted the last cylinders we previousley add to the sumCount
        }

        if(sumCount<=maxSum){
            cylinders= Math.max(cylinders, countA+countB)//Math.max is used to update the maximum count. Was the previous counter(cylinders) or a+b is greater
        }

        //The final conditional if (countA === 0 && sum > maxSum) is a check to break out of the loop if we are at the beginning of stack a and the sum still exceeds x. 
        if(countA ===0 &&sumCount>maxSum){
            break
        }
    }
    return cylinders
}

twoStacks(10, a, b)
    

////////////////////////////////

// let maxCount = 0;
// let sum = 0;
// let countA = 0;
// let countB = 0;

// // Initial phase: Take elements from stack 'a'
// while (countA < a.length && sum + a[countA] <= maxSum) {
//     sum += a[countA];
//     countA++;
// }
// maxCount = countA;

// // Sliding window: Take elements from stack 'b'
// while (countB < b.length) {
//     sum += b[countB];
//     countB++;

//     while (sum > maxSum && countA > 0) {
//     countA--;
//     sum -= a[countA];
//     }

//     if (sum <= maxSum) {
//     maxCount = Math.max(maxCount, countA + countB);
//     }

//     if (countA === 0 && sum > maxSum) {
//     break;
//     }
// }
// return maxCount;

