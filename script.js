var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1000;
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
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


//SCROLL FUCNTION
// When the user scrolls the page, execute myFunction 
window.onscroll = function() { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

//CONTACT FORM
function namechange() {
    var Name = document.getElementById('name')
    if (Name.value.length != 0)
        document.getElementById('namelabel').classList.add('notempty')
    else
        document.getElementById('namelabel').classList.remove('notempty')
}

function emailchange() {
    var Email = document.getElementById('email')
    if (Email.value.length != 0)
        document.getElementById('emaillabel').classList.add('notempty')
    else
        document.getElementById('emaillabel').classList.remove('notempty')
}

function subjectchange() {
    var Subject = document.getElementById('subject')
    if (Subject.value.length != 0) {
        document.getElementById('subjectlabel').classList.add('notempty')
    } else
        document.getElementById('subjectlabel').classList.remove('notempty')
}

function messagechange() {
    var Message = document.getElementById('message')
    if (Message.value.length != 0) {
        document.getElementById('messagelabel').classList.add('notempty')
    } else
        document.getElementById('messagelabel').classList.remove('notempty')
}