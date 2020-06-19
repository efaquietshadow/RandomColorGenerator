function random_hexedecimal() {
    var random_num = Math.floor(Math.random() * 1000000)
    return random_num.toString(16)
  }
  
  console.log(random_hexedecimal())