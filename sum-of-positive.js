// function sumOfPostivieOfArray(arr)
// {
//     let sum =0
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]>=0)
//         {
//             sum+=arr[i]
//         }
//     }
//     return sum
// }
function sumOfPostivieOfArray(arr){
    return arr.filter((current)=>current>=0).reduce((acc,current)=>current+acc,0)
}

console.log(sumOfPostivieOfArray([-1,5,10,-2]))