                          // first Assignment of if elseif else

let a = prompt("Enter Your Number here..");

if(a > 0){
    alert("Positive Value..");
}
else if(a < 0){
    alert("Negative Value..");
}
else if(a == 0){
    alert("The Value is Zero");
}
else{
    alert("Some Thing Else..");
}

                            // second Assignment of if elseif else

let number_checker = prompt("Enter Random Number for checking Even our Odd..");

if(number_checker % 2 == 0){
    alert("The Number is Even..");
}
else{
    alert("The Number is Odd..");
}

                            // Third Assignment of if elseif else

let age_category = prompt("Enter Your Age For Checking Are Child, Teen, or Adult..");

if(age_category == 70){
    alert("Your Are TOO Old..");
}
else if(age_category >= 25){
    alert("You Are the Adult Age..");
}
else if(age_category >= 18){
    alert("you are the Teen Age..");
}
else if(age_category < 18){
    alert("You are Child..");
}
else if(age_category <= 5){
    alert("You Are Baby..");
}
else{
    alert("Please Enter Your Correct Age");
}

                                // Fourth Assignment of if elseif else

let weather_checker = prompt("Choose Any Weather Name For Check the guidelines.."+" Sunny / Clear \n\n" +"Cloudy \n\n" +"Rainy \n\n" +"Stormy / Thunderstorm \n\n" +"Snowy \n\n" +"Windy \n\n" +"Foggy / Mist");

if(weather_checker === "Sunny" || weather_checker === "sunny" || weather_checker === "Clear" || weather_checker === "clear"){
    alert("1. Hydrated raho \n\n" +"2. Sunscreen lagao \n\n" +"3. Direct sunlight me lambe time na raho \n\n" + "4. Light clothing pehno");
}
else if(weather_checker === "Cloudy" || weather_checker === "cloudy"){
    alert("1. Weather thoda mild hota hai \n\n" +"2. Light jacket chal sakti hai \n\n" +"3. Barish ka andesha ho to umbrella saath rakho");
}
else if(weather_checker === "Rainy" || weather_checker === "rainy"){
    alert("1. Umbrella ya raincoat zaroor rakho \n\n" + "2. Paani jamy huay areas se bacho \n\n" + "3. Slippery roads par dhyan se chalo/drive karo");
}
else if(weather_checker === "Stormy"|| weather_checker === "stormy" || weather_checker === "Thunderstorm" ||weather_checker === "thunderstorm"){
    alert("1. Ghar se bahar mat niklo agar zaroori na ho \n\n" + "2. Electric appliances use na karo strong lightning me \n\n" + "3. Khule field, ped ke neeche ya pani ke paas mat raho");
}
else if(weather_checker === "Snowy" || weather_checker === "snowy"){
     alert("1. Garam kapde pehno (jacket, gloves, cap) \n\n" + "2. Slippery ice par sambhal kar chalo \n\n" + "3. Garam drinks lo \n\n" + "4. Heating system proper rakho");
}
else if(weather_checker === "Windy" || weather_checker === "windy"){
     alert("1. Halka sa dust aa sakta hai, aankhon ko protect rakho \n\n" + "2. Light cheezen hawa se udd sakti hain \n\n" + "3. Loose clothing ko secure rakho");
}
else if(weather_checker === "Foggy" || weather_checker === "Mist" || weather_checker === "foggy" || weather_checker === "Mist"){
     alert("1. Driving me extra care: slow speed, fog lights \n\n" + "2. Low visibility me rasta dhyan se cross karo \n\n" + "3. Ghar se nikalte waqt thoda extra time rakho");
}
else{
    alert("Something Went Wrong From Server Side..");
}

                                // Fifth Assignment of if elseif else

let Usergrade = prompt("Enter Your Percentage of Your Paper");

if(Usergrade >= 90){
    alert("Your Grade is A+");
}
else if(Usergrade >= 80){
     alert("Your Grade is A");
}
else if(Usergrade >= 70){
     alert("Your Grade is B");
}
else if(Usergrade >= 60){
     alert("Your Grade is C");
}
else if(Usergrade >= 50){
     alert("Your Grade is D");
}
else if(Usergrade <= 50){
     alert("Your Are Fail Bro..");
}
