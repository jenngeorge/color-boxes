// 1. add doctype and html skeleton
// 2. make a css file and create a link tag to it in head
// 3. Add jquery to your page with a script tag in the head
// 4. make a js file and create a script tag in the head
// 5. create a h1 with a title for you page, center it
// 6. create a div with class easel, it will have some pre-made styles, but now, center it

// 7. now we want to dynamically fill the easel with 500 squares. These will be divs with the class square. how might we do this?

// 8. Let's write a function for that and have it run when the page finishes loading

// 9. now we want our page to do something when we click on a square, for now let's how our page console.log "hi!". How do we do this?

// $(function () {

    init = function() {
        window.setUpEasel();
        window.visitBox();
        window.changeBorder();
    }

    var colors = [
    'green',
    'purple',
    'yellow',
    'blanchedalmond',
    'bisque',
    'cornflowerblue',
    'chartreuse',
    'darkgoldenrod',
    'mauve',
    'darksalmon',
    'dodgerblue',
    'lightgoldenrodyellow'
  ]

  var box = '<div class="square"></div>'
  var boxString = ''

  window.setUpEasel = function() {
    for (i=0; i< 500; i++) {
        boxString += box
    };
    $('.easel').append(boxString);
  };

  window.visitBox = function() {
    $('.easel').on('mouseenter', '.square', function() {
        var randColor = Math.floor((Math.random()*colors.length));
        $(this).css('background-color', colors[randColor])
    });
  }

  window.changeBorder = function() {
    $('div').click(function() {
        var randColor = Math.floor((Math.random()*colors.length));
        $('.easel').css('border-color', colors[randColor])
    });
  }


    


