const salon={
    name:"The Fashion Pet",
    address:{
        street:"Ave. University",
        number:"192k"
    },
    hours:{
        open: "8AM",
        close: "5pm"
    },
pets:[]
}

function displayInfo(){
document.getElementById("footer-text").innerHTML=`
<p> ${salon.name} </p>
<p> ${salon.address.street}, ${salon.address.number} </p>
<p> It opens from ${salon.hours.open} to ${salon.hours.close}</p>
`;
}
var c=0;
// creat the pet class
class Pet{
    constructor(name,age,breed,gender,service,owner,phone){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
        this.price=0;
        this.id=c++;
    }
}
//creat pets using the constructor
var scooby=new Pet("Scooby",50,"Dane","Male","full", "Shaggy", "5555555");
var scrappy=new Pet("Scrappy",40,"Dane","Male","shower", "Greg","5550494");
var speedy=new Pet("Speedy",30,"Mouse","Male","full", "Shaggy", "5555555");



var txtName=document.getElementById("petNameTxt");
var txtAge=document.getElementById("petAgeTxt");
var txtBreed=document.getElementById("petBreedTxt");
var txtGender=document.getElementById("petGenderTxt");
var txtService=document.getElementById("petServiceTxt");
var txtOwner=document.getElementById("ownerNameTxt");
var txtPhone=document.getElementById("ownerPhoneTxt");
   
function clear(){
    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtGender.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";
    }

function register(){
//create generic object
       var thePet=new Pet(txtName.value,txtAge.value,txtBreed.value,txtGender.value,txtService.value,txtOwner.value,txtPhone.value);
console.log(thePet);
    // push the pet into the array
    salon.pets.push(thePet);
    //display function
    display(thePet);       
    clear();
}

function profitCalculation(){
    
    var sum=0;

    for(var i=0;i<salon.pets.length;i++){

        sum=sum+salon.pets[i].price;
    }


    //display the result on the html
    document.getElementById("profits").innerHTML=`Profits: $${sum}`;
}
function deletePet(petId){
  //travel the array
    for(var i=0;i<salon.pets.length;i++){
    var pet = salon.pets[i];
    //if thePet === petId
    if(pet.id===petId)
    {
    //remove from html
    $('#'+petId).remove();
    //remove from the array
    salon.pets.splice(i,1);
        }
}
       profitCalculation();
       document.getElementById("numberPets").innerHTML=`Registered pets: ${salon.pets.lenth}`;
}

function init(){

    console.log("Initialization");


    salon.pets.push(scooby);
    salon.pets.push(scrappy);
    salon.pets.push(speedy);
    display(scooby);
    display(scrappy);
    display(speedy);
    console.log(salon.pets);
    displayInfo();


}

function search(){
    var word=document.getElementById("inputSearch").value;
    console.log(word)
    for(var i=0;i<salon.pets.length;i++){
      if(word===salon.pets[i].name){
     $("#"+salon.pets[i].id).addClass("bordered")}else{console.log("it doesn't exist")

     }
     
    }
}

//travel the array



window.onload=init;