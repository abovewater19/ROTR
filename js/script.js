
  
function checkAnswer() {
var check = document.getElementById("response").value;
var correctlyAnswered = 0;
console.log(check);
var rules = [
 //rule 1 a
 "these rules shall apply to all vessels upon the high seas and in all waters connected therewith navigable by seagoing vessels",
 //rule 1 b
 "nothing in these rules shall interfere with the operation of special rules made by an appropriate authority for roadsteads harbours rivers lakes or inland waterways connected with the highseas and navigable by seagoing vessels",
// rule 1 c
 "nothing in these rules shall intefere with the operation of any special rule made by the government of any state with respect to additional station of signal lights shapes or whistle signals for ships or war and vessels proceeding under convoy or with respect to additional station or signal lights or shaps for fishing vessels engaged in fishing as a fleet these additional station or signal lights shapes or whistle signals shall so far as possible be such that they cannot be mistaken for any light shape or signal authorised elsewhere under these rules",
// rule 2 a
"nothing in these rules shall exonerate any vessel owner master crew thereof from the consequences of any neglect of failure to comply with these rules or of the neglect of any precaution which may be required by the ordinary practice of seaman or by the special circumstance of the case",
 // rule 2 b
  "in contruing and complying with these rules due regard shall be had to all dangers of navigation and collision and any special circumtstances including limitations of the vessels involved which may make a departure from these rules necessary to avoid collision"];
// rule 3 a
"the term vessel means any description of watercraft including non displacement craft wig craft seaplaces used or capable of being used as a means of transportation on water",
// rule 3 b
"the term power driven vessel means any vessel propelled by machinery",
// rule 3 c
"the term sailing vessel means any vessel under sail provided that propelling machinery if fitted is not being used",
//rule 3 d
"the term vessel engaged in fishing means any vessel that is fishing with nets lines trawls or other fishing apparatus that restricts manoeuvrability but does not include any vessel that is fishing with trolling lines or other fishing apparatus that does not restrict manoeuvrability",
// rule 3 e
"the word seaplace includes an aircraft designed to manouvre on the water",
//rule 3 f
"the term vessel not under command means any vessel which through some exceptional circumstance is unable to maneouvre as required by these rules and is therefor unable to keep out of the way of another vessel",
//rule 3 g
"the term vessel restricted in her ability to maneouvre means any vessel which from the nature of her work is restricted in her ability to maneouvre as required by these rules and is therefore unable to keep out of the way of another vessel",
]

  if (check == rules[0]) {
    alert("That is correct. Try the next question");
    correctlyAnswered += 1;
    console.log(correctlyAnswered);
    document.getElementById("nextQ").innerHTML = "<h3>What is rule Two A?</h3>";
    document.getElementById("nextQ").style.display = "block";
    document.getElementById("response").value=" ";
    
  } else if (check == rules[1]) {
      alert("That is correct. Try the next question");
      correctlyAnswered += 1;
      console.log(correctlyAnswered);
      document.getElementById("nextQ").innerHTML = "<h3>What is rule two b?</h3>";
      document.getElementById("nextQ").style.display = "block";
      document.getElementById("response").value=" ";
} else if (check == rules[2]) {
      alert("That is correct. Try the next question");
      correctlyAnswered += 1;
      console.log(correctlyAnswered);
      document.getElementById("nextQ").innerHTML = "<h3>What is rule three a?</h3>";
      document.getElementById("nextQ").style.display = "block";
      document.getElementById("response").value=" ";
} else if (check == rules[3]) {
      alert("That is correct. Try the next question");
      correctlyAnswered += 1;
      console.log(correctlyAnswered);
      document.getElementById("nextQ").innerHTML = "<h3>What is rule three a?</h3>";
      document.getElementById("nextQ").style.display = "block";
      document.getElementById("response").value=" ";
} else if (check == rules[4]) {
      alert("That is correct. Try the next question");
      correctlyAnswered += 1;
      console.log(correctlyAnswered);
      document.getElementById("nextQ").innerHTML = "<h3>What is rule three a?</h3>";
      document.getElementById("nextQ").style.display = "block";
      document.getElementById("response").value=" ";
} else if (check == rules[5]) {
      alert("That is correct. Try the next question");
      correctlyAnswered += 1;
      console.log(correctlyAnswered);
      document.getElementById("nextQ").innerHTML = "<h3>What is rule three a?</h3>";
      document.getElementById("nextQ").style.display = "block";
      document.getElementById("response").value=" ";
}
else {
      alert("Try again.")
      document.getElementById("response").value=" ";
      document.getElementById("startAgain").style.display = "block";
      return document.getElementById("nextQ").innerHTML = "try again next time. you got " + correctlyAnswered + " correct.";
      
 }
}

function ruleOne() {
  document.getElementById("nextQ").innerHTML = "What is Rule One A?"
}

function ruleTwo() {
  document.getElementById("nextQ").innerHTML = "What is Rule Two A?"
}

function ruleThree() {
  document.getElementById("nextQ").innerHTML = "What is Rule One A?"
}

function ruleFour() {
  document.getElementById("nextQ").innerHTML = "What is Rule One A?"
}

function startAgain () {
	location.reload();
}