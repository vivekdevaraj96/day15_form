form=document.querySelector('#form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    parent=document.querySelector('.tbody')

    row=document.createElement('tr');

    fname=document.createElement('td')
    fnamevalue=document.querySelector('[placeholder="FirstName"]')
    fname.innerText=fnamevalue.value

    lname=document.createElement('td')
    lnamevalue=document.querySelector('[placeholder="LastName"]')
    lname.innerText=lnamevalue.value

    address=document.createElement('td')
    addressvalue=document.querySelector('[placeholder="Address"]')
    address.innerText=addressvalue.value

    pincode=document.createElement('td')
    pincodevalue=document.querySelector('[placeholder="Pincode"]')
    pincode.innerText=pincodevalue.value

    Gender=document.createElement('td')
    Gendervalue=document.querySelectorAll('[name="Gender"]')
    Gende=[]
    for(i=0;i<Gendervalue.length;i++){
        if(Gendervalue[i].checked==true){
            Gende.push(Gendervalue[i].value)
            
        }
    }
      Gender.innerText=Gende;

    Food=document.createElement('td')
    Foodvalue=document.querySelectorAll('[name="food"]')
    foods=[]
    for(i=0;i<Foodvalue.length;i++){
        if(Foodvalue[i].checked==true){
            foods.push(Foodvalue[i].value)
            // console.log(Foodvalue[i].value);
        }
    }
    Food.innerText=foods

    State=document.createElement('td')
    Statevalue=document.querySelector('[placeholder="State"]')
    State.innerText=Statevalue.value

    Country=document.createElement('td')
    Countryvalue=document.querySelector('[placeholder="Country"]')
    Country.innerText=Countryvalue.value


    
  

    row.append(fname, lname, address,pincode,Gender,Food,State,Country)
    parent.append(row)
    
    fnamevalue.value=''
    lnamevalue.value=''
    addressvalue.value=''
    pincodevalue.value=''
    
    for(i=0;i<Gendervalue.length;i++){
        if(Gendervalue[i].checked==true){
            Gendervalue[i].checked=false
           
        }
    }

    for(i=0;i<Foodvalue.length;i++){
        if(Foodvalue[i].checked==true){
            Foodvalue[i].checked=false
            // console.log(Foodvalue[i].value);
        }
    }
   
    Statevalue.value=''
    Countryvalue.value=''


}
)