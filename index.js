function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!'; // Free sample for rides <= 400 feet
  } else if (distance > 400 && distance <= 2000) {
    return 'That will be twenty bucks.'; // Changed to 'twenty bucks' to match the expected output
  } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.'; // Changed to 'thirty bucks' to match the expected output
  } else {
    return 'No can do.'; // No rides over 2500 feet allowed
  }
}

// Example usage:
console.log(scuberGreetingForFeet(500));  // Output: "That will be twenty bucks."
console.log(scuberGreetingForFeet(1500)); // Output: "That will be twenty bucks."
console.log(scuberGreetingForFeet(2200)); // Output: "I will gladly take your thirty bucks."
console.log(scuberGreetingForFeet(2600)); // Output: "No can do."




function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// Example usage:
console.log(ternaryCheckCity('NYC'));  // Output: "Ok, sounds good."
console.log(ternaryCheckCity('Los Angeles'));  // Output: "No go."


function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

// Example usage:
console.log(switchOnCharmFromTip('generous')); // Output: "Thank you so much."
console.log(switchOnCharmFromTip('not as generous')); // Output: "Thank you."
console.log(switchOnCharmFromTip('nothing')); // Output: "Bye."