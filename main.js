function btnCal(){
        
        var x = document.getElementById("input1").value
        var y = document.getElementById("input2").value
        var add = parseInt(x)+parseInt(y)  
        z = document.getElementById("rs").value="= "+add
    }

    function btnSub(){
        
        var x = document.getElementById("input1").value
        var y = document.getElementById("input2").value
        var add = parseInt(x)-parseInt(y)  
        z = document.getElementById("rs").value="= "+add
    }

    function btnMul(){
        
        var x = document.getElementById("input1").value
        var y = document.getElementById("input2").value
        var add = parseInt(x)*parseInt(y)  
        z = document.getElementById("rs").value="= "+add
    }

    function btnDiv(){
        
        var x = document.getElementById("input1").value
        var y = document.getElementById("input2").value
        var add = parseInt(x)/parseInt(y)  
        z = document.getElementById("rs").value="= "+add
    }
    
    function btnClear(){
        document.getElementById("input1").value=""
        document.getElementById("input2").value=""
        document.getElementById("rs").value=""

    }
