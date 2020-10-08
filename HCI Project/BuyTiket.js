
var Name;
var Ticket;
var Email;
var Address;
var Phone;
var checkbox;

function OrderButtonClicked(){
    Name = document.getElementById("NameArea").value;
    Ticket =document.getElementById("OptionArea").value;
    Email = document.getElementById("EmailArea").value;
    Phone = document.getElementById("PhoneArea").value;
    Address = document.getElementById("AddressArea").value;
    checkbox =   document.getElementById("CheckboxArea");

 
    var Validation = ValidationArea();
    
    if(Validation == 0){
        return
    }
    else{
        alert("Name :" + Name +"\nTicket :" + Ticket +"\nEmail :" + Email +"\nPhone :" + Phone +"\nAddress :" + Address)
        alert("Thanks For Buying On Our Site")
    }
}

function ValidationArea(){
  
    if(Name.length < 5){
        document.getElementById("validator").innerHTML = 'Name must be minimal 5 character length.';
        return 0;
    }
    else if(!isNaN(Name)){
        document.getElementById("validator").innerHTML = 'Name must be alphabet.';
        return 0;
    }
    else if(Ticket == ""){
        document.getElementById("validator").innerHTML = 'Please Choose Your Ticket Type';
        return 0;
    }
    else if(Email.includes("@") == false){
        document.getElementById("validator").innerHTML = 'Email invalid';
        return 0;
    }
    else if(Email.includes(".com") == false && Email.includes(".co.id") == false ){
        document.getElementById("validator").innerHTML = 'Email invalid';
        return 0;
    }
    else if(isNaN(Phone)){
        document.getElementById("validator").innerHTML = 'Phone Must be Numeric';
        return 0;
    }
    else if(Phone.length < 12){
        document.getElementById("validator").innerHTML = 'Phone Must Be Minimal 12 character lenght';
        return 0;
    }
    else if(Address.includes("street") == false && Address.includes("Street") == false ){
        document.getElementById("validator").innerHTML = 'Address Must Contains "Street"';
        return 0;
    }
    else if(!checkbox.checked  ){
        document.getElementById("validator").innerHTML = 'User Agreement must be checked.';
        return 0;
    }
    else{
        return 1;
    }
}