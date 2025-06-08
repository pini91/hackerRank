// The Tower of Hanoi is a famous game consisting of  rods and a number of discs of incrementally different diameters. The puzzle starts with the discs neatly stacked on one rod, ordered by ascending size with the smallest disc at the top. The game's objective is to move the entire stack to another rod, obeying the following rules:

// Only one disk can be moved at a time.
// In one move, remove the topmost disk from one rod and move it to another rod.
// No disk may be placed on top of a smaller disk.
// Gena has a modified version of the Tower of Hanoi. This game of Hanoi has  rods and  disks ordered by ascending size. Gena has already made a few moves following the rules above. Given the state of Gena's Hanoi, determine the minimum number of moves needed to restore the tower to its original state with all disks on rod .

// Note: Gena's rods are numbered from  to . The radius of a disk is its index in the input array, so disk  is the smallest disk with a radius of , and disk  is the largest with a radius of .

// Example

// In this case, the disks are arranged from large to small across the four rods. The largest disk, disk , is already on rod , so move disks  and  to rod , in that order. It takes  moves to reset the game.


// The largest disk, disk  with radius , is already on rod . Disk  is on rod  and must be below disk . Move disk  to rod , disk  to rod  and disk  to rod . Now move disk  to rod . It takes  moves to reset the game.

// Function Description

// Complete the hanoi function below.

// hanoi has the following parameters:

// int posts[n]:  is the location of the disk with radius 
// Returns

// int: the minimum moves to reset the game to its initial state
// Input Format

// The first line contains a single integer, , the number of disks.
// The second line contains  space-separated integers, where the  integer is the index of the rod where the disk with diameter  is located.

// Constraints

// Sample Input

// STDIN   Function
// -----   --------
// 3       size of posts[] n = 3
// 1 4 1   posts = [1, 4, 1]
// Sample Output

// 3
// Explanation

//  moves are enough to build the tower. Here is one possible solution:
// gena1.png
// gena2.png

function hanoi(posts) {
    const n = posts.length;
    let moves = 0;
    
    // Create a working copy of the posts array
    const state = [...posts];
    
    // Process disks from largest to smallest
    for (let disk = n; disk >= 1; disk--) {
        // If this disk is already on rod 1, skip it
        if (state[disk - 1] === 1) {
            continue;
        }
        
        // Count how many smaller disks are on rod 1 that we need to move out of the way
        let blockers = 0;
        for (let i = 1; i < disk; i++) {
            if (state[i - 1] === 1) {
                blockers++;
            }
        }
        
        // Step 1: Move blockers out of rod 1 (takes 2^blockers - 1 moves)
        if (blockers > 0) {
            moves += (1 << blockers) - 1;
        }
        
        // Step 2: Move current disk to rod 1 (takes 1 move)
        moves += 1;
        
        // Step 3: Move blockers back to rod 1 on top of current disk (takes 2^blockers - 1 moves)
        if (blockers > 0) {
            moves += (1 << blockers) - 1;
        }
        
        // Update state: current disk and all blockers are now on rod 1
        state[disk - 1] = 1;
    }
    
    return moves;
}


