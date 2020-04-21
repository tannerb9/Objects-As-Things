const foxley = {
  name: "",
  species: "",
  nicknames: [],
  age: 0,
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
