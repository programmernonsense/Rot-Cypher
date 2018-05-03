document.querySelector("#button").onclick = function(){
  myFunction();
}

function myFunction(){
  let input = document.querySelector("#input").value;
  let words = input.toUpperCase().split(" ");
  let newChar;
  let newWord ="";
  let newMessage ="";
  // let rot = document.querySelector("#ROT").value;
  let ROT = document.querySelector("#ROT").value;
  let n = Number(ROT);
  

  //iterates through each word of the message
  for (let i=0; i<words.length; i++){
    for (let j=0; j<words[i].length; j++){

      let value = words[i].charCodeAt(j)+n;
      if (value > 90){
        while(value > 90){
          let leftOver = value-90;
          value = 65 + (leftOver-1);
        }
        newChar = String.fromCharCode(value);
      }else {
        newChar = String.fromCharCode(words[i].charCodeAt(j)+n);
      }
      newWord += newChar;
    }
    newMessage += newWord;
    newMessage += " ";
    newWord = "";
  }

    document.querySelector("#output").innerHTML = newMessage;
  }

  