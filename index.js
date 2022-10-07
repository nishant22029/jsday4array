function greatest()
{

    let a=parseInt(document.getElementById("in1").value)
    let b=parseInt(document.getElementById("in2").value)
    
    let rs=a>b?a:b;
    document.getElementById("rs").innerHTML="Greatest number is :"+rs
}

function maxLength(){
    let words = ['George', 'Alice', 'Alex', 'John', 'Infanta', 'Xavior', 'LourdhAntony'];
    let big= words[0];
   
   for(let i=0;i<words.length;i++)
   {
    if(words[i].length>big.length)
        big=words[i]
   }
   
document.getElementById("max").innerHTML="maximum character="+big

}






function netPrice()
{
    let prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];
    let sum=0;
 for(let i=0;i<prices.length;i++)
 {   
     sum=sum+prices[i]

 }

 document.getElementById("net").innerHTML="Net price="+sum
}

// sum of array element with mixed input 
function sum()
{
    let sum=0
    
    let mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
    for(let i of mixedArr)
    {
        if(typeof i==="string")
            sum+=i.length;
        else if(typeof i===true)
             sum+=1
        else if(typeof i===false)
               sum+=0;
        else
            sum+=i
    }
   

    document.getElementById("sum_mixed").innerHTML="sum ="+sum

}


/////average of given array elements

function average(){

    let sum=0
    let levels = [22, 16, 9, 10, 7, 14, 11, 9];
for(let i=0;i<levels.length;i++)
{
    sum=sum+parseInt(levels[i])
}
let avg=sum/levels.length

       
  document.getElementById("avg").innerHTML="Average="+avg
}
/////////////////////////////
////average of words
function wordsavg(){
    const items = ['bread','jam','milk','egg','flour','oil','rice','coffee powder','sugar','salt'];
    let sum=0;
    for(let i of items)
    {
        sum=sum+i.length

    }
  let avg=sum/items.length
  document.getElementById("word").innerHTML="Average="+avg

}
///////////////////////////////
function mixedAvg(){
    const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
    let sum=0;
    for(let i of mixedArr)
    {
        if(typeof i==="string")
        sum+=i.length;
    else if(typeof i===true)
         sum+=1
    else if(typeof i===false)
           sum+=0;
    else
        sum+=i
    }
    let avg=sum/mixedArr.length
    document.getElementById("mix").innerHTML="Average="+avg
    
}


/////////////////////////////unique array
function removeEle(){
    const items = ['bread','jam','milk','egg','flour','oil','rice','coffee powder','sugar','salt','egg','flour'];

    
let uniqueItems =items.filter((c, index) => {
    return items.indexOf(c) === index;
});

document.getElementById('unique').innerHTML="New Array="+uniqueItems
}
///////////////////////////////

let rs;
function search() {
    let word=document.getElementById("search").value
    const words1 = [ 'door', 'window', 'ceiling','roof','plinth','tiles', 'ceiling','flooring'];
    document.getElementById("sr").innerHTML="Element is present or not:"+words1.includes(word)
  
  }
  //////////////////////////////////////

  function countEle(){
    let c=-1;
    const words = ['machine','matter','subset','trouble','starting','matter','eating','matter','truth','disobedience', 'matter'];
    let ele=document.getElementById("search_count").value
         for(let i of words){
            if(i===ele)
                c++        
         }

    document.getElementById("co").innerHTML="No. of count :="+c
  }
  ////////////////////////////
  
function calculate(){
    const arr = [
        [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
        [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
        [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
        [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
        [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
        [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
        [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
        [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
        [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
        [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
      ];
    let product=0;
    let rs;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (!(j + 3 > arr[i].length - 1)) {
           rs = parseInt(arr[i][j]) * parseInt( arr[i][j + 1] )*parseInt( arr[i][j + 2]) *parseInt( arr[i][j + 3]);
          if (rs > product) 
                product = rs;
        }
        if (!(i + 3 > arr.length - 1)) {
          let rs =parseInt( arr[i][j] )*parseInt( arr[i + 1][j]) * parseInt(arr[i + 2][j]) *parseInt( arr[i + 3][j]);
          if (rs > product) 
                product = rs;
        }
      }
    }
    console.log(product);
  }
 
 
  