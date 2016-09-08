(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var RoboWar = RoboWar || {};

var Robot = function(){
  this.baseHealth = 50;
  this.baseDamage = 50;
  this.canCrushSkulls = true;
  this.says = "I'm a robot.";
};
//ATV BOTS//
var ATV = function(){
  this.says = "I got wheels";
  this.id = 1;
};
ATV.prototype = new Robot();

RoboWar.ArmorDillo = function(name){
  this.says = "Good luck piercing my armor!";
  this.name = name;
};

RoboWar.ArmorDillo.prototype = new ATV();

RoboWar.ShelobOT = function(name){
  this.says = "I'm a scary roboSpider";
  this.name = name;
};

RoboWar.ShelobOT.prototype = new ATV();

//BIPEDAL BOTS//
var Bipedal = function(){
  this.id = 2;
};
Bipedal.prototype = new Robot();

RoboWar.Arnie = function(name){
  this.says = "Arnie quote goes here";
  this.name = name;
};
RoboWar.Arnie.prototype = new Bipedal();

RoboWar.Hillary = function(name){
  this.says = "All my emails are belong to you";
  this.name = name;
};

RoboWar.Hillary.prototype = new Bipedal();

//DRONE BOTS//
var Drone = function(idnum){
  this.id = idnum;
};
Drone.prototype = new Robot();

RoboWar.Viper = function(name){
  this.says = "Have you seen the rebel base?";
  this.name = name;
};

RoboWar.Viper.prototype = new Drone();

RoboWar.UFO = function(name){
  this.says = "Take me to your leader";
  this.name = name;
};

RoboWar.UFO.prototype = new Drone();

module.exports = {RoboWar};

},{}],2:[function(require,module,exports){
"use strict";

let domElements = require("./domElements");

  domElements.stageBattleZone();
},{"./domElements":3}],3:[function(require,module,exports){
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

},{"./bots":1}],4:[function(require,module,exports){
"use strict";

let battleBots = require("./bots");
let domElements = require("./domElements");
let controller = require("./controller");
},{"./bots":1,"./controller":2,"./domElements":3}]},{},[4]);
