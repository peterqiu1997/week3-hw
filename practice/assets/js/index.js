$(document).ready(function() {
  // YOUR CODE GOES HERE
  var interval = null;
  var now = 0;
  var whoo = function(err, res) {
    if (!err) {
        console.log(res);
        var rand = Math.floor((Math.random() * 100) + 1);
        var meme = res.body.data.memes[rand].url;
        $('.jquery-img').attr('src', meme);
        var elapsed = Date.now() - now;
        $('.gates').text("bill gates earned \$" + (114.16*elapsed/1000).toFixed(2) + " dollars before you decided you wanted to see this meme");
    }
  };

  var get_callback = function(err, res) {
    if (err) {
        console.log("Something went wrong!");
    } else {
        var hex = res.body.hex;
        hex_color = hex;
        $('.jquery-id').text("LETS LOAD SOME INTERNET CULTURE");
        superagent.get('https://api.imgflip.com/get_memes').end(whoo);
        $('.jquery-id').css({color: hex_color});
        interval = setInterval(function() {
            $('.jquery-id').fadeOut(500);
            $('.jquery-id').fadeIn(500);
          }, 1000);
        }
  };

  var post_callback = function(err, res) {
    if (err) {
        alert("i cant believe you failed this too");
        clearInterval(interval);
        $('.jquery-id').text("post failure = no entertainment");
        $('.gates').text("bill gates would never have done that");
        $('.jquery-img').attr('src', './assets/innod.png');
    } else {
        alert("1 meme 1 dream");
        superagent.get('http://webtier2016.christianle.com/v1/color').end(get_callback);
    }
  };

  $('.jquery-btn').click(function() {
    now = Date.now();
    superagent.post('http://webtier2016.christianle.com/v1/contact')
      .send({
        name: 'Peter',
        email: 'apple@samsung.com',
        message: 'pleb culture'
      })
      .end(post_callback);
  });
});

