/*-----------------------------------------------------------------------------------

    Custom JS - All front-end jQuery
 
-----------------------------------------------------------------------------------*/

$(document).ready(function () {


/*-----------------------------------------------------------------------------------*/
/*  Read next functionality
/*-----------------------------------------------------------------------------------*/

    $(function(){

        if(window.location.pathname.indexOf("notes") > -1){

        	var h = $("p.read-next-exc"),
        		i = $(".read-next-title"),
        		j = $(".related-post"),
        		k = $("p.related-post-meta"),
        		l = $("span.relpost");

            
            h.not(":first").remove();
            i.not(":first").addClass("read-next-small");
            j.eq(0).addClass("read-next-primary").after("<div class='secondary-container'></div>");
            j.not(":first").addClass("read-next-secondary").prependTo(".secondary-container");
            k.not(":first").addClass("articledate-secondary");
            
            l.first().text(l.text().substr(0,130)+'...');
    }
    });

/*-----------------------------------------------------------------------------------*/
/*  Block Crappy Internet Explorer. Sorry.
/*-----------------------------------------------------------------------------------*/

if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { 
    var ieversion = new Number(RegExp.$1) 
    if (ieversion >= 5) document.write("You're using Internet Explorer, which is probably the worst browser on earth. This website uses modern web standards, something that is totally alien to the Internet Explorer. If you are forced to use it because you are at work, you should probably work. If you are at home get a modern browser like <a href='https://www.google.com/chrome/'>Google Chrome</a>, that complies to standards to see this page.")
}

/*-----------------------------------------------------------------------------------*/
/*  Bit.ly on-the-fly shortening and twitter sharing element
/*-----------------------------------------------------------------------------------*/

function bit_url(url) {
    
    var u = url,
        un = "o_nqsn6keu6",
        k = "R_6d28544c4fe09562b99f25797e9511f8",
        t = document.title.slice(0,-17);

    $.ajax({
        url: "http://api.bit.ly/v3/shorten",
        data: {
            longUrl: u,
            apiKey: k,
            login: un
        },
        dataType: "jsonp",
        success: function (v) {
            var s = v.data.url;
            window.open("http://twitter.com/share?url=" + encodeURIComponent(s) + "&text=" + encodeURIComponent(t) + "&via=jonahwiaderny", "twitsharer", "toolbar=0,status=0,width=626,height=436");
        }
    });
}


$("a.twitter").click(function (e) {
        e.preventDefault();
    var url = window.location.toString();
    var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    var urltest = urlRegex.test(url);
    if (urltest) {
        bit_url(url);
        window.open("http://twitter.com/share?url=", "twitsharer", "toolbar=0,status=0,width=626,height=436");
    } else {
        console.log("Bad URL");
    }
});   

/*-----------------------------------------------------------------------------------*/
/*  Show and Hide Floating element
/*-----------------------------------------------------------------------------------*/

    $(function (){

         var $document = $(".screen-content"),
    $element = $('#floating'),
    className = 'hide-floating';

    $(window).resize(function() {

    if($(window).width() <= 499) {
    $document.scroll(function() {
  $element.toggleClass(className, $document.scrollTop() >= 50);
});
}
    if($(window).width() <= 499) {
     $(document).scroll(function() {
  $element.toggleClass(className, $(document).scrollTop() >= 50);
});
 }
    }).resize();

    });

/*-----------------------------------------------------------------------------------*/
/*  Randomize Homepage Image
/*-----------------------------------------------------------------------------------*/

    $(function randomImage(){
        var images = ["bg-1.jpg", "bg-2.jpg", "bg-3.jpg", "bg-4.jpg", "bg-5.jpg"],
        randImage = images[Math.floor(Math.random() * images.length)];

        var f = ("assets/images/" + randImage);

        $("img#preload").attr("src", f).load(function(){
        
        $(".cover-img").css({"background-image": "url(assets/images/" + randImage + ")"});
});
        
        
       
    });

/*-----------------------------------------------------------------------------------*/
/*  Slide Menu
/*-----------------------------------------------------------------------------------*/

    $(function () {
        var showmenu = document.getElementById("floating");

        showmenu.onclick = function () {
            $("body").addClass("bodypushed");
            $("nav.pushmenu").addClass("pushmenu-open");
            $("#floating").css("cursor", "default");
        };

        $(document).mouseup(function (e) {

            var container = $("nav.pushmenu");

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container.removeClass("pushmenu-open");
                $("body").removeClass("bodypushed");
                $("#floating").css("cursor", "pointer");
            }
        });

    });

/*-----------------------------------------------------------------------------------*/
/*  Loading Bar
/*-----------------------------------------------------------------------------------*/
    $('.loadingBar').css("display", "none");

    $('a.articletitle,a.excerptlink,.nav-wrapper a').click(function (e) {
        e.preventDefault();
        var goTo = this.href;

        $('.loadingBar').css("display", "block");


        setTimeout(function () {
            window.location = goTo;
           $('.loadingBar').css("display", "none");
        }, 1000);
    });

/*-----------------------------------------------------------------------------------*/
/*  Add H1 margin if H2 not present
/*-----------------------------------------------------------------------------------*/

    $(function () {
    	var i = $("h1.posttitle");

        if ($("h2.postsubtitle").length) {
            i.css("margin-bottom", "-8px");
        } else {
            i.css("margin-bottom", "20px");
        }
    });

/*-----------------------------------------------------------------------------------*/
/*  Estimate Reading Time
/*-----------------------------------------------------------------------------------*/

    $.fn.readingTime = function () {

        var readingSpeed = {
            slow: 150,
            average: 200,
            fast: 250
        };

        var defaults = {

            wordsPerMinute: readingSpeed.average,
            minSuffix: " min read",
            secSuffix: " sec read",
            containerClass: "reading-time"
        };

        //Extend default options with those provided
        var options = $.extend(defaults, options);

        return this.each(function () {

            var $this = $(this),
                o = options
                wordCount = $this.find("span.words").html(),
                minutes = Math.floor(wordCount / o.wordsPerMinute),
                seconds = Math.floor(wordCount % o.wordsPerMinute / (o.wordsPerMinute / 60));

            if (minutes > 0) {

                var estimate = minutes;
                estimate += o.minSuffix;
            } else {

                var estimate = seconds;
                estimate += o.secSuffix;
            };

            $this.find("p.date.articledate").append('<span class="' + o.containerClass + '">' + estimate + '</span>');
        });

    };

    $("article.post-item, #content.post, .related-post").readingTime();

/*-----------------------------------------------------------------------------------*/
/*  Add break after duration in CV and show on hover
/*-----------------------------------------------------------------------------------*/

	if(window.location.pathname.indexOf("curriculum-vitae") > -1){

    $("span.duration").after("<br />");
    $("p").hover(function () {
        $(this).find("span.duration").fadeIn("slow");
    }, function () {
        $(this).find("span.duration").fadeOut("slow");
    });
}

/*-----------------------------------------------------------------------------------*/
/*  Active Nav Class
/*-----------------------------------------------------------------------------------*/

    $(function () {
        var url = window.location.pathname,
            urlRegExp = new RegExp(url == '/' ? window.location.origin + '/?$' : url.replace(/\/$/, ''));
        $('#pagenav a').each(function () {
            if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
                $(this).addClass('active');
            }
        });
    });
});