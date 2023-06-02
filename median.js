// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
   let len = input.length;
   let mid = Math.floor(len/2);
   if(len % 2 != 0){
    return input[mid];
   }else{
    return (input[mid - 1] + input[mid]) / 2
   }   
}

console.log(result(input));