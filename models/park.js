const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function(dino) {
  this.dinosaurs.push(dino);
};

Park.prototype.removeDinosaur = function (dino) {
  let index = this.dinosaurs.indexOf(dino);
  if (index !== -1) {this.dinosaurs.splice(index,1);}
};

Park.prototype.mostPopular = function () {
  let mostPopularDino = this.dinosaurs[0];
  for (dino of this.dinosaurs) {
    if (dino.guestsAttractedPerDay > mostPopularDino.guestsAttractedPerDay) {
      mostPopularDino = dino
    }
  }
  return mostPopularDino
};

Park.prototype.findBySpecies = function (species) {
  let foundDinos = []
  for (dino of this.dinosaurs) {
    if (dino.species === species) {
      foundDinos.push(dino);
    }
  }
  return foundDinos;
};

Park.prototype.totalVisitors = function() {
  let total = 0
  for (dino of this.dinosaurs) {
    total += dino.guestsAttractedPerDay;
  }
  return total
};

Park.prototype.dailyVisitors = function () {
  return this.mostPopular().guestsAttractedPerDay
};

Park.prototype.yearlyVisitors = function () {
  return this.totalVisitors() * 363;
};

Park.prototype.revenue = function () {
  return this.yearlyVisitors() * this.ticketPrice;
};

Park.prototype.removeBySpecies = function (species) {
  for (dino of this.dinosaurs) {
    if (dino.species === species) {
      let index = this.dinosaurs.indexOf(dino);
      if (index !== -1) {this.dinosaurs.splice(index,1);}
    }
  }
};

Park.prototype.dinosaursByDiet = function () {
  let dinos = {};
  for (dino of this.dinosaurs) {
    if (Object.keys(dinos).includes(dino.diet)){
      dinos[`${dino.diet}`] += 1;
    } else {
      dinos[`${dino.diet}`] = 1;
    }
  }
  return dinos;
};

module.exports = Park;
