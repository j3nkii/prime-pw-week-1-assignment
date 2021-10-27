var pets = 0;

function noPetsOnlyLooks() {
  pets++

  if (pets <= 1) {
      console.log('You\'ve pet the kitty ' + pets + ' time!')
  } else  {
    console.log('You\'ve pet the kitty ' + pets + ' times!')
  }
}
