let temp = 55

//logical AND operator - true if both sides are true, false otherwise
if (temp >= 60  && temp <= 90) {
   console.log ('It is pretty nice out!')
} else if (temp <= 0 || temp >= 120) {
    console.log ('Do not go outside!')
 } else {
     console.log ('Do what you want.')
 }

 let isGuestOneVegan = true
 let isGuestTwoVegan = false

 //Are both Vegan?  Only offer up Vegan dishes
 //At least one guest is Vegan? Make sure to offer up some Vegan options.
 //Else, Neither is Vegan.  Offer up anything on the menu

 if (isGuestOneVegan && isGuestTwoVegan ) {
    console.log ('Here are some Vegan dishes!')
 } else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log ('Here are some Vegan and/non-Vegan options!')
 } else {
    console.log ('Here is the entire menu for you to choose from!')
 }
