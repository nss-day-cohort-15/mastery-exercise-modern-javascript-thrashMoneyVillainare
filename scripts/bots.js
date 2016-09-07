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
