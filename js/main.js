$(document).ready(function () {

  // Typewriter
  var $phrases = $('.hero--phrases li'),
      phrases = [],
      $phrase = $('.hero--phrase')

  $phrases.each(function(i, phrase) {
    phrases.push(phrase.innerHTML)
  })

  do_typewriter($phrase, phrases)

})

// === TYPEWRITER === //

var i = 0
function do_typewriter($phrase, phrases) {
  i++
  update_typewriter_text($phrase, phrases[i % phrases.length], function() {
    setTimeout(function() {
      do_typewriter($phrase, phrases)
    }, 2500)
  })
}

function update_typewriter_text(jquery_obj, new_msg, cb) {
  var backspace_timeout = 25;
  var old_msg = jquery_obj.text();
  var old_msg_length = old_msg.length;
  var cur_pos = old_msg_length;
  // backspace the old msg
  var backspacer = setInterval(function () {
    if (cur_pos === 0) {
      clearInterval(backspacer);
      // start the new message only after the old message is backspaced
      do_typing(jquery_obj, new_msg, cb);
    }
    jquery_obj.text(old_msg.substr(0, cur_pos));
    cur_pos--;
  }, backspace_timeout);
}

function do_typing(jquery_obj, new_msg, cb) {
  var cur_pos = 0;
  var typewriter_timeout = 50;
  var typewriter = setInterval(function () {
    if (cur_pos === new_msg.length) {
      clearInterval(typewriter);
      //cur_pos = 0;
      cb()
    }
    jquery_obj.text(new_msg.substr(0, cur_pos));
    cur_pos++;
  }, typewriter_timeout);
}
