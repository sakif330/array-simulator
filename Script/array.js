let array = ["Banana", "Orange", "Apple", "Mango"];
let dummy = ["Grapes", "Strawberries", "Watermelon"];
let initialArray = document.getElementById("initialArray");
let arrayCutResult = document.getElementById("arrayCutResult");
let userInputArray = document.getElementById("input");
let userIndexArray = document.getElementById("index");
let dummyResultArray = document.getElementById("dummyResult");
initialArray.innerHTML = array.toString();
document.getElementById("dummyArray").innerHTML = dummy.toString();

var validationCollection = {
  isEmpty(x) {
    if(x !=""){
      return true;
     }
     else{
      return false;
      }
    
  },
  isEmptyOrNaN(x){
     
    if(x =="" || isNaN(x)){
      return true;
     }
     else{
      return false;
      }
   
  }
};

function errorMsg(){
       return(alert("Invalid Input"));
}


function onPop() {
    arrayCutResult.style.visibility = 'hidden';
    array.pop();  
    initialArray.innerHTML = array;
  }

  function onPush() {
    arrayCutResult.style.visibility = 'hidden';
    let input = userInputArray.value;
    if(validationCollection.isEmpty(input)){   
    array.push(input);  
    initialArray.innerHTML = array;
    userInputArray.value = "";
    }
    else{     
       errorMsg();
    }
  }

  function onShift() {
    arrayCutResult.style.visibility = 'hidden';
    array.shift();  
    initialArray.innerHTML = array;
  }

  function onUnshift() {
    arrayCutResult.style.visibility = 'hidden';
    let input = userInputArray.value; 
    if(validationCollection.isEmpty(input)){ 
    array.unshift(input);  
    initialArray.innerHTML = array;
    userInputArray.value = "";
    }
    else{
       
        errorMsg();
    }

  }
  function onSlice() { // change method name to camlecase , // CleanCode, CodeSmell, Code Refactoring, 
    let index = userIndexArray.value; 
    let arrSplit = index.split(',');
    let arrLength = arrSplit.length;  // change variable names to meaningfull name
    // slice(2,1)
    if(arrLength==1){
    
    if(validationCollection.isEmptyOrNaN(index) || index>array.length){   
     userIndexArray.value = "";
    arrayCutResult.style.visibility = 'hidden';
    errorMsg();
    }
    else{
        let slicedItem =array.slice(index);  
        initialArray.innerHTML = array;
        arrayCutResult.innerHTML = slicedItem;
        arrayCutResult.style.visibility = 'visible';
       
        userIndexArray.value = "";
    }
    }
    else if(arrLength==2){

        if(validationCollection.isEmptyOrNaN(arrSplit[0]) || validationCollection.isEmptyOrNaN(arrSplit[1])  || arrSplit[0]>=arrSplit[1]|| arrSplit[0] < 0 || arrSplit[1]> array.length){   
            userIndexArray.value = "";
            arrayCutResult.style.visibility = 'hidden';           
            errorMsg();
            }
            else{
                let slicedItems=array.slice(arrSplit[0],arrSplit[1]);  
                initialArray.innerHTML = array;
                arrayCutResult.innerHTML = slicedItems;
                arrayCutResult.style.visibility = 'visible';
               
                userIndexArray.value = "";
            }
    }

    else{
       
       errorMsg();

      
    }
  }

function onSplice() { 
        let indexArray = userIndexArray.value;
        let inputArray = userInputArray.value; 
        let indexSplit = indexArray.split(',');
        let inputSplit = inputArray.split(',');
        let arrLength = indexSplit.length;
        if(arrLength ==2 && inputArray!=""){
    
            if(validationCollection.isEmptyOrNaN(indexSplit[0]) || validationCollection.isEmptyOrNaN(indexSplit[1])||  indexSplit[0] < 0 || indexSplit[1]>= array.length || indexSplit[0]>= array.length){   
                userIndexArray.value = "";
                arrayCutResult.style.visibility = 'hidden';
               
                errorMsg();
                }
                else{

                  for(let i=inputSplit.length-1;i>=0;i--){
                    if(i==inputSplit.length-1){
                    let splicedItem = array.splice(indexSplit[0],indexSplit[1],inputSplit[i]);

                    }
                    else{
                      array.splice(indexSplit[0],0,inputSplit[i]);
                    }

                  }
                   initialArray.innerHTML = array; 
                    
                   arrayCutResult.innerHTML = splicedItem;
                   arrayCutResult.style.visibility = 'visible';
                   
                     userIndexArray.value = "";
                    userInputArray.value = ""; 
                }      
        }
        else if(arrLength ==2 && inputArray==""){
          if(validationCollection.isEmptyOrNaN(indexSplit[0]) || validationCollection.isEmptyOrNaN(indexSplit[1]) || indexSplit[0] < 0 || indexSplit[1]>= array.length || indexSplit[0]>= array.length){   
            userIndexArray.value = "";
            arrayCutResult.style.visibility = 'hidden';
            
            errorMsg();
            }
            else{
                 
                let spliedItem =array.splice(indexSplit[0],indexSplit[1]); 
                initialArray.innerHTML = array; 
                
                arrayCutResult.innerHTML = spliedItem;
                arrayCutResult.style.visibility = 'visible';
               
                userIndexArray.value = "";
                userInputArray.value = ""; 
            } 

        }
    
        else{
           
           errorMsg();
    
        }
  } 
  function onReplace() {
    let input = userInputArray.value; 
    let index = userIndexArray.value; 
    if(validationCollection.isEmpty(input) && validationCollection.isEmpty(index) &&  index<array.length){ 
    array[index]=input;  
    initialArray.innerHTML = array;
    userInputArray.value = "";
    userIndexArray.value = "";
    }
    else{
       
       errorMsg();
    }

  }

  function onDelete() {
    
    let index = userIndexArray.value; 
    if(validationCollection.isEmpty(index)){ 
    delete array[index];  
    initialArray.innerHTML = array;
    userInputArray.value = "";
    userIndexArray.value = "";
    }
    else{
       
       errorMsg();
    }

  }

  function onSort() {
    arrayCutResult.style.visibility = 'hidden';
    array.sort();  
    initialArray.innerHTML = array;
  }

  function onReverse() {
    arrayCutResult.style.visibility = 'hidden';
    array.reverse();  
    initialArray.innerHTML = array;
  }


  function onConcat() {
    
    let concatArray = array.concat(dummy);
    dummyResultArray.innerHTML = concatArray;
    dummyResultArray.style.visibility = 'visible';

  }
  function onJoin() {
    let joinInput = document.getElementById("input2").value; 
    if(validationCollection.isEmpty(joinInput)){    
    dummyResultArray.innerHTML = dummy.join(joinInput);
    dummyResultArray.style.visibility = 'visible';
    document.getElementById("input2").value="";
    }
    else{
      
      errorMsg();
     }

  }

  function onMore() {
    arrayCutResult.style.visibility = 'hidden';
    let moreDiv = document.getElementById('myDIV');
    
    if (moreDiv.style.visibility === 'hidden') {
      moreDiv.style.visibility = 'visible';
    } else {
      moreDiv.style.visibility = 'hidden';
    }
    dummyResultArray.style.visibility = 'hidden';
  }