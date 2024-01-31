window.sdk = {
  ready: function () {},
  setScore: function (s) {},
  ready: function () {},
  start: function () {},
  loose: function () {},
}
try {
  GrandGames.init()
    .then(function (sdk) {
      window.sdk = sdk
    })
    .catch(function (err) {
      console.error("Can't initialize GrandGames SDK", err)
    })
    .finally(function () {
      Delta()
    })
} catch (e) {
  console.error('GrandGames SDK not available')
  Delta()
}
