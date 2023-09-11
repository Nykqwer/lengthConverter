
const fromSelectedValue = document.querySelector('.dropdown');
const toSelectedValue = document.querySelector('.dropdown1');
const inputFrom = document.getElementById('input-from')
const inputTo = document.getElementById('input-to');
const btnCal = document.getElementById('btn-cal');
const btnReset = document.getElementById('btn-reset');

let value = "";
let inputLength = 0;

btnCal.addEventListener('click', function(){
    
switch(fromSelectedValue.value){

     //centimeter
    case "centimeter":
    switch(toSelectedValue.value){
        case "centimeter":
            return inputTo.value = inputFrom.value;
            case "millimeter":
             return inputTo.value = inputFrom.value*10;
            case "kilometer":
            return inputTo.value = inputFrom.value/100000;
            case "meter": 
            return inputTo.value = inputFrom.value/100;
            case "mile":
            return inputTo.value = inputFrom.value/160900;
            case "yard":
                return inputTo.value = inputFrom.value/91.44;
            case "inch": 
            return inputTo.value = inputFrom.value/2.54;
            case "foot": 
            return inputTo.value = inputFrom.value/30.48;
       
    }
    break;

     //millimeter
    case "millimeter":
        switch(toSelectedValue.value){
            case "millimeter":
                return inputTo.value = inputFrom.value;
                case "centimeter":
                 return inputTo.value = inputFrom.value/10;
                 case "kilometer":
                return inputTo.value = inputFrom.value/100000;
                case "meter": 
                return inputTo.value = inputFrom.value/1000;
                case "mile":
                 return inputTo.value = (inputFrom.value/1.609) + 6;
                case "yard":
                return inputTo.value = inputFrom.value/914.4;
                case "inch": 
                return inputTo.value = inputFrom.value/25.4;
                case "foot": 
                return inputTo.value = inputFrom.value/304.8;
      
        }
        break;

         //kilometer
        case "kilometer":
            switch(toSelectedValue.value){
                case "kilometer":
                    return inputTo.value = inputFrom.value;
                    case "millimeter":
                     return inputTo.value = inputFrom.value/1000000;
                    case "centimeter":
                    return inputTo.value = inputFrom.value/100000;
                    case "meter": 
                    return inputTo.value = inputFrom.value/1000;
                    case "mile":
                    return inputTo.value = inputFrom.value/1.609;
                    case "yard":
                    return inputTo.value = inputFrom.value*1094;
                    case "inch": 
                    return inputTo.value = inputFrom.value* 39370;                    ;
                    case "foot": 
                    return inputTo.value = inputFrom.value*3281;

            }
            break;

            //meter
            case "meter":
                switch(toSelectedValue.value){
                    case "meter":
                        return inputTo.value = inputFrom.value;
                        case "millimeter":
                         return inputTo.value = inputFrom.value * 1000;
                        case "centimeter":
                        return inputTo.value = inputFrom.value * 100;
                        case "kilometer": 
                        return inputTo.value = inputFrom.value/1000;
                        case "mile":
                        return inputTo.value = inputFrom.value/1609;
                        case "yard":
                            return inputTo.value = inputFrom.value/1.094;
                        case "inch": 
                        return inputTo.value = inputFrom.value * 39.37;
                        case "foot": 
                        return inputTo.value = inputFrom.value * 3.281;
                   
                }

        //mile
        case "mile":
            switch(toSelectedValue.value){
                case "mile":
                    return inputTo.value = inputFrom.value;
                    case "millimeter":
                    return inputTo.value = (inputFrom.value/1.609) + 6;
                    case "centimeter":
                    return inputTo.value = inputFrom.value * 160900;                    ;
                    case "kilometer":
                    return inputTo.value = inputFrom.value * 1.609;
                    case "meter": 
                    return inputTo.value = inputFrom.value * 1609;
                    case "yard":
                    return inputTo.value = inputFrom.value * 1760;
                    case "inch": 
                    return inputTo.value = inputFrom.value * 63360;                    ;
                    case "foot": 
                    return inputTo.value = inputFrom.value * 5280;

            }
            break;
    
            //yard
            case "yard":
                switch(toSelectedValue.value){
                    case "yard":
                        return inputTo.value = inputFrom.value;
                        case "millimeter":
                         return inputTo.value = inputFrom.value * 914.4;
                        case "centimeter":
                        return inputTo.value = inputFrom.value * 91.44;
                        case "kilometer":  
                        return inputTo.value = inputFrom.value / 1094;
                        case "meter":
                        return inputTo.value = inputFrom.value / 1.094;
                        case "mile":
                            return inputTo.value = inputFrom.value / 1760;
                        case "inch": 
                        return inputTo.value = inputFrom.value * 36;
                        case "foot": 
                        return inputTo.value = inputFrom.value * 3;
                   
                }
                break;


    
            //Inch
            case "inch":
                switch(toSelectedValue.value){
                    case "inch":
                        return inputTo.value = inputFrom.value;
                        case "millimeter":
                         return inputTo.value = inputFrom.value * 25.4;
                        case "centimeter":
                        return inputTo.value = inputFrom.value * 2.54;
                        case "kilometer":  
                        return inputTo.value = inputFrom.value / 39370;
                        case "meter":
                        return inputTo.value = inputFrom.value / 39.37;
                        case "mile":
                        return inputTo.value = inputFrom.value / 63360;                           ;
                        case "yard": 
                        return inputTo.value = inputFrom.value / 36;
                        case "foot":  
                        return inputTo.value = inputFrom.value / 12;
                   
                }
                break;

             //Foot
            case "foot":
                switch(toSelectedValue.value){
                    case "foot":
                        return inputTo.value = inputFrom.value;
                        case "millimeter":
                         return inputTo.value = inputFrom.value * 304.8;
                        case "centimeter":
                        return inputTo.value = inputFrom.value * 30.48;
                        case "kilometer":  
                        return inputTo.value = inputFrom.value / 3281;                        ;
                        case "meter":
                        return inputTo.value = inputFrom.value / 3.281;
                        case "mile":
                        return inputTo.value = inputFrom.value /  5280;                        ;                           ;
                        case "yard": 
                        return inputTo.value = inputFrom.value / 3;
                        case "inch":  
                        return inputTo.value = inputFrom.value * 12;
                   
                }
                break;

}


})


btnReset.addEventListener('click', function(){
    fromSelectedValue.selectedIndex = 0;
    toSelectedValue.selectedIndex = 0;
    inputFrom.value ="";
    inputTo.value ="";
})


