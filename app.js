alert("Wellcome to Rock paper Scissor game click ok to proceed")
var comp_choice = Math.round(Math.random() * 2);
console.log(comp_choice);
function computer() {
    document.querySelector(".comp").style.display = "flex";
    document.querySelector(".result1").style.display = "none";

    document.querySelector(".btnc").style.display = "none";
    document.querySelector(".last").style.display = "none";
}
var person_choice = "";
function rock() {
    person_choice = 0;
    document.querySelector(".comp").style.display = "none";
    document.querySelector(".result1").style.display = "inline";
    calc();
}
function paper() {
    person_choice = 1;
    document.querySelector(".comp").style.display = "none";
    document.querySelector(".result1").style.display = "inline";
    calc();
}
function sci() {
    person_choice = 2;
    document.querySelector(".comp").style.display = "none";
    document.querySelector(".result1").style.display = "inline";
    calc();
}

function calc() {
    let pc = "";
    let cc = "";
    if (person_choice == 0) {
        pc = "Rock";
    } else if (person_choice == 1) {
        pc = "Paper";
    } else if (person_choice == 2) {
        pc = "Scissor";
    }

    if (comp_choice == 0) {
        cc = "Rock";
    } else if (comp_choice == 1) {
        cc = "Paper";
    } else if (comp_choice == 2) {
        cc = "Scissor";
    }

    if (person_choice == comp_choice) {
        document.querySelector(".result").innerText = "Match Draw!";
        document.querySelector(".resultp1").innerText = "Your choice = " + pc;
        document.querySelector(".resultp2").innerText = "Computers choice = " + " " + cc;
    } else if (person_choice == 0 && comp_choice == 1) {
        document.querySelector(".result").innerText = "You Win!";
        document.querySelector(".resultp1").innerText = "Your choice = " + pc;
        document.querySelector(".resultp2").innerText = "Computers choice = " + " " + cc;
    } else if (person_choice == 0 && comp_choice == 2) {
        document.querySelector(".result").innerText = "You Win!!!";
        document.querySelector(".resultp1").innerText = "Your choice = " + pc;
        document.querySelector(".resultp2").innerText = "Computers choice = " + " " + cc;
    } else if (person_choice == 1 && comp_choice == 0) {
        document.querySelector(".result").innerText = "You Win!";
        document.querySelector(".resultp1").innerText = "Your choice = " + pc;
        document.querySelector(".resultp2").innerText = "Computers choice = " + " " + cc;
    } else if (person_choice == 1 && comp_choice == 2) {
        document.querySelector(".result").innerText = "You Lose!";
        document.querySelector(".resultp1").innerText = "Your choice = " + pc;
        document.querySelector(".resultp2").innerText = "Computers choice = " + " " + cc;
    } else if (person_choice == 2 && comp_choice == 0) {
        document.querySelector(".result").innerText = "You Lose!";
        document.querySelector(".resultp1").innerText = "Your choice = " + pc;
        document.querySelector(".resultp2").innerText = "Computers choice = " + " " + cc;
    } else if (person_choice == 2 && comp_choice == 1) {
        document.querySelector(".result").innerText = "You Win!";
        document.querySelector(".resultp1").innerText = "Your choice = " + pc;
        document.querySelector(".resultp2").innerText = "Computers choice = " + " " + cc;
    }
    document.querySelector(".result").style.display = "inline";
    document.querySelector(".last").style.display = "inline";
    comp_choice = Math.round(Math.random() * 2);
}

function enter_name() {
    document.querySelector(".nam").style.display = "Inline";
    document.querySelector(".btnc").style.display = "none";
    document.querySelector(".last").style.display = "none";
    document.querySelector(".result").style.display = "none";
}

var first_name = "";
var second_name = "";
var up_first = "";
var up_second = "";

function submit() {
    first_name = document.querySelector("#name1").value;
    second_name = document.querySelector("#name2").value;
    document.querySelector(".nam").style.display = "none";
    friend();
}

function friend() {
    document.querySelector(".fri").style.display = "flex";
    up_first = first_name.toUpperCase();
    document.querySelector(".heading1").innerText =
        up_first + " " + "Select Your Option";
}
var person_choice1 = "";
function rock1() {
    person_choice1 = 0;
    document.querySelector(".fri").style.display = "none";
    friend2();
}
function paper1() {
    person_choice1 = 1;
    document.querySelector(".fri").style.display = "none";
    friend2();
}
function sci1() {
    person_choice1 = 2;
    document.querySelector(".fri").style.display = "none";
    friend2();
}

function friend2() {
    document.querySelector(".fri1").style.display = "flex";
    up_second = second_name.toUpperCase();
    document.querySelector(".heading2").innerText =
        up_second + " " + "Select Your Option";
}

var person_choice2 = "";
function rock2() {
    person_choice2 = 0;
    document.querySelector(".fri1").style.display = "none";
    calc1();
}
function paper2() {
    person_choice2 = 1;
    document.querySelector(".fri1").style.display = "none";
    calc1();
}
function sci2() {
    person_choice2 = 2;
    document.querySelector(".fri1").style.display = "none";
    calc1();
}

function calc1() {
    let p1c = "";
    let p2c = "";
    if (person_choice2 == 0) {
        p2c = "Rock";
    } else if (person_choice2 == 1) {
        p2c = "Paper";
    } else if (person_choice2 == 2) {
        p2c = "Scissor";
    }

    if (person_choice1 == 0) {
        p1c = "Rock";
    } else if (person_choice1 == 1) {
        p1c = "Paper";
    } else if (person_choice1 == 2) {
        p1c = "Scissor";
    }

    if (person_choice1 == person_choice2) {
        document.querySelector(".result").innerText = "Match Draw!!";
        document.querySelector(".resultp1").innerText = "Player 1 selected =" + " " + p1c;
        document.querySelector(".resultp2").innerText = "Player 2 selected =" + " " + p2c;
    } else if (person_choice1 == 0 && person_choice2 == 1) {
        document.querySelector(".result").innerText = "Player 2 Wins!";
        document.querySelector(".resultp1").innerText = "Player 1 selected =" + " " + p1c;
        document.querySelector(".resultp2").innerText = "Player 2 selected =" + " " + p2c;
    } else if (person_choice1 == 0 && person_choice2 == 2) {
        document.querySelector(".result").innerText = "Player 1 Wins!";
        document.querySelector(".resultp1").innerText = "Player 1 selected =" + " " + p1c;
        document.querySelector(".resultp2").innerText = "Player 2 selected =" + " " + p2c;
    } else if (person_choice1 == 1 && person_choice2 == 0) {
        document.querySelector(".result").innerText = "Player 1 Wins!";
        document.querySelector(".resultp1").innerText = "Player 1 selected =" + " " + p1c;
        document.querySelector(".resultp2").innerText = "Player 2 selected =" + " " + p2c;
    } else if (person_choice1 == 1 && person_choice2 == 2) {
        document.querySelector(".result").innerText = "Player 2 Wins!";
        document.querySelector(".resultp1").innerText = "Player 1 selected =" + " " + p1c;
        document.querySelector(".resultp2").innerText = "Player 2 selected =" + " " + p2c;
    } else if (person_choice1 == 2 && person_choice2 == 0) {
        document.querySelector(".result").innerText = "Player 2 Wins!";
        document.querySelector(".resultp1").innerText = "Player 1 selected =" + " " + p1c;
        document.querySelector(".resultp2").innerText = "Player 2 selected =" + " " + p2c;
    } else if (person_choice1 == 2 && person_choice2 == 1) {
        document.querySelector(".result").innerText = "Player 1 Wins!";
        document.querySelector(".resultp1").innerText = "Player 1 selected =" + " " + p1c;
        document.querySelector(".resultp2").innerText = "Player 2 selected =" + " " + p2c;
    }
    document.querySelector(".last2").style.display = "inline";
    document.querySelector(".result1").style.display = "inline";
    document.querySelector(".result").style.display = "inline";
    comp_choice = Math.round(Math.random() * 2);
}
function retry() {
    document.querySelector(".result1").style.display = "none";
}
function retry2() {
    document.querySelector(".result1").style.display = "none";
    document.querySelector(".result").style.display = "none";
    document.querySelector(".last2").style.display = "none";
}
function home() {
    document.querySelector(".result1").style.display = "none";
    document.querySelector(".last").style.display = "none";
    document.querySelector(".last2").style.display = "none";
    document.querySelector(".btnc").style.display = "flex";
}
