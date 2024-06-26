(function (window, $) {
  'use strict';
  $.fn.useSound = function (_event, _id) {
    var se = $(_id);
    this.on(_event, function () {
      se[0].currentTime = 0;
      se[0].play();
    });
    return this;
  };
})(this, this.jQuery);
$('.btn a').useSound('mousedown touchstart', '#sound');


(function (window, $) {
  'use strict';
  $.fn.useSound = function (_event, _id) {
    var se = $(_id);
    this.on(_event, function () {
      se[0].currentTime = 0;
      se[0].play();
    });
    return this;
  };
})(this, this.jQuery);
$('.btn2 a').useSound('mousedown touchstart', '#sound2');

(function (window, $) {
  'use strict';
  $.fn.useSound = function (_event, _id) {
    var se = $(_id);
    this.on(_event, function () {
      se[0].currentTime = 0;
      se[0].play();
    });
    return this;
  };
})(this, this.jQuery);
$('.btn3 a').useSound('mousedown touchstart', '#sound3');

(function (window, $) {
  'use strict';
  $.fn.useSound = function (_event, _id) {
    var se = $(_id);
    this.on(_event, function () {
      se[0].currentTime = 0;
      se[0].play();
    });
    return this;
  };
})(this, this.jQuery);
$('.btn4 a').useSound('mousedown touchstart', '#sound4');





// [audio]には、<audio></audio>のエレメントが入っているとする

// ブラウザが[.mp3]に対応している場合は[.mp3]を読み込む
if (audio.canPlayType('audio/mp3')) {
  audio.src = 'https://syncer.jp/hello.mp3';
}

// ブラウザが[.wav]に対応している場合は[.wav]を読み込む
else if (audio.canPlayType('audio/wav')) {
  audio.src = 'https://syncer.jp/hello.wav';
}
