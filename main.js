const calc=()=>{
    const number=document.getElementById('temp').value;
    const tempselected=document.getElementById('temp_diff');
    const valuetemp=temp_diff.options[tempselected.selectedIndex].value;
    const celToFah=(cel)=>{
        let fahrenhiet=Math.round((cel*9/5)+32);
        return fahrenhiet;

    }
    const FahToCel=(fahr)=>{
        let celcius=Math.round((fahr-32)*5/9);
        return celcius;

    }

    let result;
    if(valuetemp=='cel'){
        result=celToFah(number);
        document.getElementById('resultContainer').innerHTML=`=${result}°Fahrenheit`;
    }
    else{
        result=FahToCel(number);
        document.getElementById('resultContainer').innerHTML=`=${result}°Celcius`;

    }
}
