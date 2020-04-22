const foxley = {
  name: "",
  species: "",
  nicknames: [],
  age: 0,
  favoriteToys: [],
  play: function play(toy) {
    if (toy.includes("soft")) {
      this.favoriteToys.push(toy);
    }
  },
  whimper: function () {
    window.alert("~whimper~");
  },
  bark: function () {
    window.alert("woof, woof!");
  },
  growl: function () {
    window.alert("grrrr");
  },
};

foxley.bark();
foxley.whimper();
foxley.growl();

foxley.play("soft bunny");
