var op1="";
var op2="";
var opr="";

var text=document.getElementById('text');
var zero=document.getElementById('zero');
var one=document.getElementById('one');
var two=document.getElementById('two');
var three=document.getElementById('three');
var four=document.getElementById('four');
var five=document.getElementById('five');
var six=document.getElementById('six');
var seven=document.getElementById('seven');
var eight=document.getElementById('eight');
var nine=document.getElementById('nine');
var clear=document.getElementById('clear');
var dot=document.getElementById('dot');
var module=document.getElementById('module');
var divide=document.getElementById('divide');
var multiply=document.getElementById('multiply');
var minus=document.getElementById('minus');
var plus=document.getElementById('plus');
var equal=document.getElementById('equal');


function operandone(){
    zero.onclick=()=>{
        op1+="0";
        text.value+="0";
    }
    one.onclick=()=>{
        op1+="1";
        text.value+="1";
    }
    two.onclick=()=>{
        op1+="2";
        text.value+="2";
    }
    three.onclick=()=>{
        op1+="3";
        text.value+="3";
    }
    four.onclick=()=>{
      op1+="4";
        text.value+="4";
    }
    five.onclick=()=>{
       op1+="5";
        text.value+="5";
    }
    six.onclick=()=>{
        op1+="6";
        text.value+="6";
    }
    seven.onclick=()=>{
       op1+="7";
        text.value+="7";
    }
    eight.onclick=()=>{
        op1+="8";
        text.value+="8";
    }
    nine.onclick=()=>{
        op1+="9";
        text.value+="9";
    
    }
}

    module.onclick=()=>{
        opr="%";
        text.value+="%";
        operandtwo();
    }
     divide.onclick=()=>{
        opr="/";
        text.value+="/";
        operandtwo();
    }
     multiply.onclick=()=>{
        opr="*";
        text.value+="*";
        operandtwo();
    }
     minus.onclick=()=>{
        if(text.value===""){
            op1+="-";
        }
        opr="-";
        text.value+="-";
        operandtwo();
    }
     plus.onclick=()=>{
        opr="+";
        text.value+="+";
        operandtwo();
    }


function operandtwo(){
if(opr!==""){
     zero.onclick=()=>{
        op2+="0";
        text.value+="0";
    }
    one.onclick=()=>{
        op2+="1";
        text.value+="1";
    }
    two.onclick=()=>{
        op2+="2";
        text.value+="2";
    }
    three.onclick=()=>{
        op2+="3";
        text.value+="3";
    }
    four.onclick=()=>{
      op2+="4";
        text.value+="4";
    }
    five.onclick=()=>{
       op2+="5";
        text.value+="5";
    }
    six.onclick=()=>{
        op2+="6";
        text.value+="6";
    }
    seven.onclick=()=>{
       op2+="7";
        text.value+="7";
    }
    eight.onclick=()=>{
        op2+="8";
        text.value+="8";
    }
    nine.onclick=()=>{
        op2+="9";
        text.value+="9";
    }
}
}


    clear.onclick=()=>{
        text.value="";
        op1="";
        op2="";
        opr="";
        operandone();
    }



    dot.onclick=()=>{
        if(op2==="")
        {
            op1+=".";
        }
        else{
            op2+=".";
        }
        text.value+=".";
    }



    equal.onclick=()=>{
        const res=eval(op1+opr+op2);
        text.value=res;
        op1=res;
        opr="";
        op2="";
        
    }

