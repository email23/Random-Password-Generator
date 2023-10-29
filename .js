// what i want to do is create a password that accepts the parameters that the user allows 

// one parameter would be the uppercase letters 
// one would be the lowercase letters
// and the last one would be the numbers

// i believe the function would look like this 

/* function newPassword(upperCase, lowerCase, numbers){
if (confirm(upperCase)){
    return uppercase
} else {
    return null
}

if (confirm(lowerCase)){
    return lowercase
} else {
    return null
}

if (confirm(numbers)){
    return numbers
} else {
    return null
}
}

I'd have to create an array for all three of the parameters so that the function could pull from these parameters   THIS WOULD COME FIRST!!!!

let upperCase = {A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z};
let lowerCase = {a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z};
let numbers = {1,2,3,4,5,6,7,8,9,0};

when they click on the button

onclick='function()'   


then the page would have to ask the user if they want to exclude some parameters as well as the length of the password (min= 8 max = 128 characters )
window.confirm  
https://www.w3schools.com/js/js_popup.asp


first i would concat the arrays that were selected by the user and run it through a loop depending on that amount of characters the user wants

i would use math.random to have the letter or number in the arrays selected 

.sort(function(){return 0.5 - Math.random()});


*/


function confirmation(){
//array loop

let characterSelection = {upperCase : "{A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z}", lowerCase : "{a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z}", Numbers :"{1,2,3,4,5,6,7,8,9,0}" };

let X
if (confirm("would you like uppercase letters")){
    X = "yes" 
    }else {
        X = "no"
    }
    let Y 
if (confirm("would you like lowercase letters")){
    Y =""
}

}