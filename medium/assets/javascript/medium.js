/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){

    const resetButton = $("#reset");
    let numberOfResets = $("#num-resets");

    const teamOneShootButton = $("#teamone-shoot");
    let teamOneNumberShots = $("#teamone-numshots");
    let teamOneNumberHits = $("#teamone-numhits"); 

    const teamTwoShootButton = $("#teamtwo-shoot");
    let teamTwoNumberShots = $("#teamtwo-numshots");
    let teamTwoNumberHits = $("#teamtwo-numhits"); 

   const shoot_clip = new Audio(URL="assets/sounds/shoot-sound.wav");

    resetButton.click(function(){
      numberOfResets.html( parseInt(numberOfResets.html()) + 1 );

      teamOneNumberShots.html(0);
      teamOneNumberHits.html(0);

      teamTwoNumberShots.html(0);
      teamTwoNumberHits.html(0);

      $("body").css("background-color", "white");
    })
    

    teamOneShootButton.click(function(){
      shoot_clip.play();
      teamOneNumberShots.html( parseInt(teamOneNumberShots.html()) + 1 );

      let randomNumber = getRandomInt();
      if (randomNumber > 50) {
        teamOneNumberHits.html( parseInt(teamOneNumberHits.html()) + 1 );
        $("body").css("background-color", "yellow");
      } else {
        $("body").css("background-color", "white");
      }
    })


    teamTwoShootButton.click(function(){
     shoot_clip.play();
      teamTwoNumberShots.html( parseInt(teamTwoNumberShots.html()) + 1 );

      let randomNumber = getRandomInt();
      if (randomNumber > 50) {
        teamTwoNumberHits.html( parseInt(teamTwoNumberHits.html()) + 1 );
        $("body").css("background-color", "red");
      } else {
        $("body").css("background-color", "white");
      }
    })


    function getRandomInt() {
      return Math.floor(Math.random() * (100));
    }

    $(".left .hits").before(`<img src="assets/images/yellow-jacket.jpeg" alt="yellow jacket" width=90px>`);
    $(".right .hits").before(`<img src="assets/images/fireant.jpg" alt="yellow jacket" width=90px>`);


    $(".btn").css({
      "color": "#ffffff",
      "background": "#000000",
      "padding": "10px 20px 10px 20px"
    });

    $(".left, .right").css("text-align", "center");

    $("#title").css("text-align", "center")



  })

})();
