// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the  function with the following parameter(s):

// : a time in  hour format
// Returns

// : the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45

function timeConversion(s) {

    const last =s.slice(-2)
    const first = s.slice(0,2)
  
    let result =""
    
    if(last ==="AM"){
        if(first ==="12"){
            result = "00"+s.slice(2,-2)
        }else{
            result = s.slice(0,-2)
        }
        console.log(result)
    }else{
        if(first==="12"){
            result = first+s.slice(2,-2)
        }else{
            const hours = Number(s.slice(0,2))+12
            result = hours.toString()+s.slice(2,-2)
        }
        
        console.log(result)   
    }
}


timeConversion("12:40:22AM") 
