const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;
  let dino2;
  let dino3;
  let dino4;
  let dino5;
  beforeEach(function () {
    dino1 = new Dinosaur('T-rex', 'carnivore', 100);
    dino2 = new Dinosaur('Raptor', 'carnivore', 75);
    dino3 = new Dinosaur('Triceratops', 'herbivore', 25);
    dino4 = new Dinosaur('Stegosaurus', 'omnivore', 50)
    dino5 = new Dinosaur('Brontosaurus', 'herbivore', 60);
    park1 = new Park('Jurassic Park', 50, [dino1, dino2, dino3, dino4]);
  });

  it('should have a name', function(){
    let actual = park1.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    let actual = park1.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function() {
    let actual = park1.dinosaurs;
    assert.deepStrictEqual(actual, [dino1, dino2, dino3, dino4]);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park1.addDinosaur(dino5);
    let actual = park1.dinosaurs;
    assert.deepStrictEqual(actual, [dino1, dino2, dino3, dino4, dino5]);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park1.removeDinosaur(dino3);
    let actual = park1.dinosaurs;
    assert.deepStrictEqual(actual, [dino1, dino2, dino4]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    let actual = park1.mostPopular();
    assert.strictEqual(actual, dino1);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    let actual = park1.findBySpecies('T-rex')
    assert.deepStrictEqual(actual, [dino1]);
  } );

  it('should be able to calculate the total number of visitors per day', function() {
    let actual = park1.totalVisitors();
    assert.strictEqual(actual, 250)
  });

  it('should be able to calculate the total number of visitors per year', function() {
    let actual = park1.yearlyVisitors()
    assert.strictEqual(actual, 90750)
  });

  it('should be able to calculate total revenue for one year', function() {
    let actual = park1.revenue();
    assert.strictEqual(actual, 4537500)
  });

});
