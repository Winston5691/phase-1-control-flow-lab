function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400){
  return 'This one is on me!'
  }else if(feet >= 401 && feet < 2000){
   return 'That will be twenty bucks.'
  }else if(feet >= 2001 && feet < 2500){
  return 'I will gladly take your thirty bucks.'
  }else if(feet >= 2501){
  return 'No can do.'
  }
}


function ternaryCheckCity(destination){
  // Write your code here!

  return (destination === 'NYC'? 'Ok, sounds good.' :"No go.")
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return "Thank you so much.";
    break;
    case 'not as generous':
      return "Thank you.";
    break;
    default:
    return "Bye." 
  }
}

// function scuberGreetingForFeet(feet){
//   // Write your code here!
//   if (feet <= 400){
//   return 'This one is on me!'
//   }else if(feet >= 401 && feet < 2000){
//    return 'That will be twenty bucks.'
//   }else if(feet >= 2001 && feet < 2500){
//   return 'I will gladly take your thirty bucks.'
//   }else if(feet >= 2501){
//   return 'No can do.'
//   }
// }

// function ternaryCheckCity(city){
//   // Write your code here!
//   if(city === 'NYC'){
//   return "Ok, sounds good."
//   }else{
//     return 'No go.'
//   }
// }

// function switchOnCharmFromTip(tip){
//   // Write your code here!
//   if(tip === 'generous'){
//     return "Thank you so much."
//   }else if(tip === 'not as generous' ){
//     return "Thank you."
//   }else if(tip === 'thanks for everything'){
//     return "Bye."
//   }
// }