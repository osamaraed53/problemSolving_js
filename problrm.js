 
function include(arr , num){
    for(let i= 0; i <arr.length;i++){
        if(arr[i]==num){
            return true;
        }
    }
    return false;
}
// q1
function Q1(arr = [0,1] , num){
    for(let i =0 ;i <arr.length;i++){
        if(arr[i]==num){
            return i ;
        }
    }
    return -1; 
}


// q2
function Q2(arr){
    for(let i = 1 ; i<=100;i++){
        // I'am create include method
        if(!include(arr,i)){
            return i;
        }
    }
    return "not missing any thing";
}


//q3
function Q3(arr){
    let new_arr = [];
    for(let i = 0;i <arr.length;i++){
        // I'am create include method
        if(!include(new_arr,arr[i])){
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}

// q4

function Q4(arr){
    let sum =0;
    let len =arr.length;
    for(let i=0 ;i<len;i++){
        sum = sum +arr[i];
    }
    let total = sum / len;
    return total

}

//Q5 
function Q5_byForEach(arr){
    let new_arr =[];
    arr.forEach(element => {
        new_arr.push(2**element)
    });

    return new_arr;
}

function Q5_byMAp(arr){
    let new_arr =
    arr.map((element) =>2**element );

    return new_arr;
}


//q6

function Q6(arr){

    let new_arr = arr.map(
        (element) => {
            if(isNaN(element)){
                return "N/A";
            }
            else{
                if(element%2===0){
                    return  "even";
                }
                else{
                    return  "odd";
                }
            }
        }
    );
  return new_arr;

};


// Q7
function fizzbuzz(arr){ 
    let new_arr = [];
    arr.forEach((num) =>{
        if(num%3==0 && num%5 == 0){
            new_arr.push("Fizz Buzz");
        }else if(num%3 == 0){
            new_arr.push("Fizz");
        }else if(num%5 == 0){
            new_arr.push("Buzz");
        }else{
            new_arr.push(num);
        }
    }  
    );
    return new_arr;
}


// Q7
function Q7(arr){
    arr.forEach(element => {
        console.log(element);
    });
}

// Q8

function Q8(arr){
    let new_arr = [ ];
    arr.forEach(element =>{
        let newPair = {
            "id" : element.id,
            "title" : element.title
        }
        new_arr.push(newPair)
    }    
    );
    return new_arr;
}


// Q9
function Q9(arr){
    let new_arr = [ ];
    arr.map((element) =>{

    let newPair = {
        "id" : element.id,
        "title" : element.title
    }
    new_arr.push(newPair)


    } );

    return new_arr;
}


// Q10
function Q10(arr){
    let new_arr = [ ];
    arr.map((element) =>{

    let newPair = {
        "id" : element.id,
        "title" : element.title
    }
    new_arr.push(newPair)


    } );

    return new_arr;
}


// Q11
function Q11(arr) { 
    return arr.reduce((accumulator, current) => {
      if (current.length > longest.length) {
        return current;
      } else {
        return longest;
      }
    }, "");
  }
     

// Q12
function Q12(arr) { 
    return arr.reduce((accumulator, current) => {
        accumulator.push(current.version.name);
        return accumulator;
    }, []);
  }


  //q13 
//   a- Hi Coach ! Rawan
// b- Car owner? undefined
