let fruits = ["Banana", "Orange", "Apple", "Mango"];
let dummy = ["Grapes", "Strawberries", "Watermelon"];
document.getElementById("demo").innerHTML = fruits.toString();
document.getElementById("demo3").innerHTML = dummy.toString();

function onPOP() {
    document.getElementById("demo2").style.visibility = 'hidden';
    fruits.pop();  
    document.getElementById("demo").innerHTML = fruits;
  }

  function onPUSH() {
    document.getElementById("demo2").style.visibility = 'hidden';
    let x = document.getElementById("input").value;
    if(x !=""){   
    fruits.push(x);  
    document.getElementById("demo").innerHTML = fruits;
    document.getElementById("input").value = "";
    }
    else{
        alert("Invalid Input!");
    }
  }

  function onSHIFT() {
    document.getElementById("demo2").style.visibility = 'hidden';
    fruits.shift();  
    document.getElementById("demo").innerHTML = fruits;
  }

  function onUNSHIFT() {
    document.getElementById("demo2").style.visibility = 'hidden';
    let x = document.getElementById("input").value; 
    if(x !=""){ 
    fruits.unshift(x);  
    document.getElementById("demo").innerHTML = fruits;
    document.getElementById("input").value = "";
    }
    else{
        alert("Invalid Input!");
    }

  }
  function onSLICE() {
    let x = document.getElementById("index").value; 
    let sp = x.split(',');
    let n = sp.length;
    if(n==1){
    
    if(x =="" || isNaN(x) || x>fruits.length){   
    document.getElementById("index").value = "";
    document.getElementById("demo2").style.visibility = 'hidden';
    alert("Invalid Input!");
    }
    else{
        let y=fruits.slice(x);  
        document.getElementById("demo").innerHTML = fruits;
        document.getElementById("demo2").innerHTML = y;
        document.getElementById("demo2").style.visibility = 'visible';
       
        document.getElementById("index").value = "";
    }
    }
    else if(n==2){

        if(sp[0] =="" || sp[1] == "" || sp[0]>=sp[1] || isNaN(sp[0]) || isNaN(sp[1]) || sp[0] < 0 || sp[1]> fruits.length){   
            document.getElementById("index").value = "";
            document.getElementById("demo2").style.visibility = 'hidden';
            alert("Invalid Input!");
            }
            else{
                let yz=fruits.slice(sp[0],sp[1]);  
                document.getElementById("demo").innerHTML = fruits;
                document.getElementById("demo2").innerHTML = yz;
                document.getElementById("demo2").style.visibility = 'visible';
               
                document.getElementById("index").value = "";
            }
    }

    else{
        alert("Invalid Input!");

      
    }
  }

function onSPLICE() { 
        let x = document.getElementById("index").value;
        let y = document.getElementById("input").value; 
        let sp = x.split(',');
        let insputplt = y.split(',');
        let n = sp.length;
        if(n==2 && y!=""){
    
            if(sp[0] =="" || sp[1] == "" || isNaN(sp[0]) || isNaN(sp[1]) || sp[0] < 0 || sp[1]>= fruits.length || sp[0]>= fruits.length){   
                document.getElementById("index").value = "";
                document.getElementById("demo2").style.visibility = 'hidden';
                alert("Invalid Input!");
                }
                else{

                  for(let i=insputplt.length-1;i>=0;i--){
                    if(i==insputplt.length-1){
                     yz= fruits.splice(sp[0],sp[1],insputplt[i]);

                    }
                    else{
                      fruits.splice(sp[0],0,insputplt[i]);
                    }

                  }

                     
                   // let yz=fruits.splice(sp[0],sp[1],insputplt); 
                   // fruits = insputplt;
                    document.getElementById("demo").innerHTML = fruits; 
                    
                    document.getElementById("demo2").innerHTML = yz;
                    document.getElementById("demo2").style.visibility = 'visible';
                   
                    document.getElementById("index").value = "";
                    document.getElementById("input").value = ""; 
                }      
        }
        else if(n==2 && y==""){
          if(sp[0] =="" || sp[1] == "" || isNaN(sp[0]) || isNaN(sp[1]) || sp[0] < 0 || sp[1]>= fruits.length || sp[0]>= fruits.length){   
            document.getElementById("index").value = "";
            document.getElementById("demo2").style.visibility = 'hidden';
            alert("Invalid Input!");
            }
            else{
                 
                let yz=fruits.splice(sp[0],sp[1]); 
                document.getElementById("demo").innerHTML = fruits; 
                
                document.getElementById("demo2").innerHTML = yz;
                document.getElementById("demo2").style.visibility = 'visible';
               
                document.getElementById("index").value = "";
                document.getElementById("input").value = ""; 
            } 

        }
    
        else{
            alert("Invalid Input!");
    
        }
  } 
  function onREPLACE() {
    let x = document.getElementById("input").value; 
    let y = document.getElementById("index").value; 
    if(x !="" && y !="" &&  y<fruits.length){ 
    fruits[y]=x;  
    document.getElementById("demo").innerHTML = fruits;
    document.getElementById("input").value = "";
    document.getElementById("index").value = "";
    }
    else{
        alert("Invalid Input!");
    }

  }

  function onDELETE() {
    
    let y = document.getElementById("index").value; 
    if(y !=""){ 
    delete fruits[y];  
    document.getElementById("demo").innerHTML = fruits;
    document.getElementById("input").value = "";
    document.getElementById("index").value = "";
    }
    else{
        alert("Invalid Input!");
    }

  }

  function onSORT() {
    document.getElementById("demo2").style.visibility = 'hidden';
    fruits.sort();  
    document.getElementById("demo").innerHTML = fruits;
  }

  function onREVERSE() {
    document.getElementById("demo2").style.visibility = 'hidden';
    fruits.reverse();  
    document.getElementById("demo").innerHTML = fruits;
  }


  function onCONCAT() {
    
    let x = fruits.concat(dummy);
    document.getElementById("demo4").innerHTML = x;
    document.getElementById("demo4").style.visibility = 'visible';

  }
  function onJOIN() {
    let x = document.getElementById("input2").value; 
    if(x !=""){    
    document.getElementById("demo4").innerHTML = dummy.join(x);
    document.getElementById("demo4").style.visibility = 'visible';
    document.getElementById("input2").value="";
    }
    else{
      alert("Invalid Input!");
     }

  }





  function onMORE() {
    document.getElementById("demo2").style.visibility = 'hidden';
    let x = document.getElementById('myDIV');
    
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
    document.getElementById("demo4").style.visibility = 'hidden';
  }