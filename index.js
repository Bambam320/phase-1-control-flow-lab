function scuberGreetingForFeet(distance){

  if (distance < 400) { return 'This one is on me!';
} else if (distance < 2500) {return 'I will gladly take your thirty bucks.';
} else if (distance > 2500) {return 'No can do.';
}
}

function ternaryCheckCity(location){
  return location == 'NYC' ? ('Ok, sounds good.') : ('No go.');
}

function switchOnCharmFromTip(cash){
  switch (cash) {
    case cash = 'generous':
      return 'Thank you so much.';
      break;
      case cash = 'not as generous':
        return 'Thank you.';
        break;
        default:
          return 'Bye.';
  }
}


scuberGreetingForFeet(3500);
ternaryCheckCity(NYC);
switchOnCharmFromTip(45);