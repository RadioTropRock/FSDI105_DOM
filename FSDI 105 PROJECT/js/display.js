function display(aPet){
    //display number of pets
    document.getElementById("numberPets").innerHTML=`Registered pets: ${salon.pets.length}`;
//clear the field
//document.getElementById("pets").innerHTML="";
//travel the pets array
//for(var i=0;i<salon.pets.length;i++){


if(aPet.service==="nails"){
    aPet.price=15;
}else if(aPet.service==="shower"){
    aPet.price=20;
}else if(aPet.service==="hair"){
    aPet.price=15;
}else if(aPet.service==="full"){
    aPet.price=25;
}

//create a template
 var tmp=`<div id="${aPet.id}" class="pet">
    <h3>${aPet.name}</h3>
    <p>Age: ${aPet.age}</p>
    <p>Gender: ${aPet.gender}</p>
    <p>Breed: ${aPet.breed}</p>
    <p>Service: ${aPet.service}</p>
    <p>Owner: ${aPet.owner}</p>
    <p>Phone: ${aPet.phone}</p>
    <p>$${aPet.price}</p> 
    <button onclick="deletePet(${aPet.id})">Delete</button>
    </div>`;

    //concatenate all info
    document.getElementById("pets").innerHTML+=tmp;
//}
profitCalculation();
}

