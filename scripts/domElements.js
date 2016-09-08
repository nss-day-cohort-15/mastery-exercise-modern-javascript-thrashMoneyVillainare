"use strict";
let battleBots = require("./bots");
let userName1,
userName2,
robotChoice1,
robotChoice2,
player1,
player2;

// $(".battleZone").hide();

let stageBattleZone = function(){

  $(".get-ready").on("click", function(){
    $(".battleZone").show();
    userName1 = $("#name-input1").val();
    userName2 = $("#name-input2").val();
    robotChoice1 = $("#drop-down1").val();
    robotChoice2 = $("#drop-down2").val();
    player1 = new battleBots.RoboWar[robotChoice1](userName1);
    player2 = new battleBots.RoboWar[robotChoice2](userName2);
    console.log(player1, player2);
    return player1, player2;
  });

};

let roboBattle = function(){

  $(".get-it-on").on("click", function(){
    $(".battleZone").append();
    console.log(player1);
  });
};






roboBattle();



module.exports = {stageBattleZone};
