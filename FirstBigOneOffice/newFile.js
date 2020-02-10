let arrayI = [12,3,6,23,7,9,14]  

//array.reduce//////////////////////////////////////////////////////////////////////////////////////////

/* let reduArr = 0;                    
for(let j=0; j<arrayI.length; j++){  
    reduArr = reduArr + arrayI[j]    
}                                   
console.log('>',reduArr)  */


Array.prototype.myReducer = (callback) => {
    let acc
    acc =+ callback
    console.log('>', acc)
    return acc
}

function calbFun(prp){
    let sum = 0
    for(let i=0; i<prp.length; i++){
        sum += prp[i]
    }
    return sum
}

Array.prototype.myReducer(calbFun(arrayI))


//array.map//////////////////////////////////////////////////////////////////////////////////////////

mapArr = [];                        
/* for(let i=0; i<arrayI.length; i++){  
    mapArr.push(arrayI[i]+2)    
}                               
console.log('->',mapArr)  */



Array.prototype.myMapper = (callback) => {
    mapArr.push(...callback)
    return mapArr
}

mapCallBack = (array) => { 
    let emptyAr=[]
    for(let i=0; i < array.length; i++){
        emptyAr.push(array[i]*2)
    }
    return emptyAr
}

Array.prototype.myMapper(mapCallBack(arrayI))
console.log(mapArr)



//array.filter//////////////////////////////////////////////////////////////////////////////////////////

filArr = [];                      
for(let i=0; i<arrayI.length; i++) { 
    if (arrayI[i] % 2 == 0) { 
        filArr.push(arrayI[i])
    }    
}                                
console.log('-->', filArr) 






//array.filter[with reduce]/////////////////////////////////////////////////////////////////////////////

filRedArr = arrayI.reduce((a,b)=>{  
    if (b % 2==0) {
        a.push(b)
    }
    return a
},[])

console.log('--->',filRedArr) 



//array.filter[with reduce]//////////////////////////////////////////////////////////////////////////

mapRedArr = arrayI.reduce((a,b)=>{  
        a.push((b+2))
    return a
},[])

console.log('---->',mapRedArr) 

let data = [
    {
      country: 'China',
      pop: 1409517397,
    },
    {
      country: 'India',
      pop: 1339180127,
    },
    {
      country: 'USA',
      pop: 324459463,
    },
    {
      country: 'Indonesia',
      pop: 263991379,
    }
  ]

  let sum = data.reduce((acc,cur)=>cur.country == 'China'?acc:acc + cur.pop,0)

  console.log('asd', sum)