var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 9) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
          if((this.txt.length) >= 22){
/*
            var concat = document.getElementById("concatinate");
            var title = document.getElementById("title");
            setTimeout(function(){concat.style.display = "none";
          title.style.visibility = "visible";}, 1000); */

            return;
          }
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>'; //creates a temporary class for the text its giving out

        var that = this;
        var delta = 200 - Math.random() * 100;


        if (this.isDeleting) { delta /= 2; } // this is for time of erasing

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = 200; //time to switch from writing to erasing
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 900;  //900 delta is the time it take for the message o switch after erasing it
        }

        setTimeout(function() {
        that.tick();
        }, delta);

    };

    window.onload = function start() {

        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type'); // string of digits
            var period = elements[i].getAttribute('data-period'); //How long it goes on for
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }


        }

        //-------------------  C S S
        var css = document.createElement("style");
        css.type = "boardA1/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff; font-family: serif;}";
        document.body.appendChild(css);


        return;
    };
