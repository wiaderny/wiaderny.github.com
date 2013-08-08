/*-----------------------------------------------------------------------------------

    Custom JS - All front-end jQuery
 
-----------------------------------------------------------------------------------*/

$(document).ready(function () {

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
        var images = ["bg-1.jpg", "bg-2.jpg", "bg-3.jpg", "bg-4.jpg"],
        randImage = images[Math.floor(Math.random() * images.length)];

        var fullLink= ("assets/images/" + randImage);

        $("img#preload").attr("src", fullLink);

        $("img#preload").load(function(){
        
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
        if ($("h2.postsubtitle").length) {
            $("h1.posttitle").css("margin-bottom", "-8px");
        } else {
            $("h1.posttitle").css("margin-bottom", "20px");
        }
    });

/*-----------------------------------------------------------------------------------*/
/*  Estimate Reading Time
/*-----------------------------------------------------------------------------------*/

    $.fn.readingTime = function () {

        //Common reading speeds
        var readingSpeed = {
            slow: 150,
            average: 200,
            fast: 250
        };

        //Set deafults
        var defaults = {

            //Set read-rate - Deafult is national average
            wordsPerMinute: readingSpeed.average,

            minSuffix: " min read",

            secSuffix: " sec read",

            //Set the MMSS separator - Default is colon
            separator: ":",

            //Set the container class
            containerClass: "reading-time"
        };

        //Extend default options with those provided
        var options = $.extend(defaults, options);

        //Apply to each article
        return this.each(function () {

            var $this = $(this);
            var o = options;

            //Get article word-count

            if ($("span.words").length) {
                var wordCount = $this.find("span.words").html();
            } else {

                var wordCount = $this.text().split(" ").length;
            }

            //Calculate estimated reading time based on default/user WPM rate
            var minutes = Math.floor(wordCount / o.wordsPerMinute);
            var seconds = Math.floor(wordCount % o.wordsPerMinute / (o.wordsPerMinute / 60));

            //Prettify estimate

            if (minutes > 0) {

                var estimate = minutes;
                estimate += o.minSuffix;
            } else {

                var estimate = seconds;
                estimate += o.secSuffix;

            };

            //Display estimated reading time for article
            $this.find("p.date.articledate").append('<span class="' + o.containerClass + '">' + estimate + '</span>');
        });

    };

    $("article.post-item, #content.post").readingTime();

/*-----------------------------------------------------------------------------------*/
/*  Add break after duration in CV and show on hover
/*-----------------------------------------------------------------------------------*/

    $("span.duration").after("<br />");
    $("p").hover(function () {
        $(this).find("span.duration").fadeIn("slow");
    }, function () {
        $(this).find("span.duration").fadeOut("slow");
    });

/*-----------------------------------------------------------------------------------*/
/*  Responsive Menu
/*-----------------------------------------------------------------------------------*/

    var header,
        menu,
        menuButton;


    header = $("#masthead");
    menu = $("ul#pagenav");
    menuButton = $("<div class='menubutton'><a href='#'><span></span><span></span><span></span></a></div>");
    menuButton.click(showMenu);
    header.append(menuButton);


    function showMenu(event) {
        if (menu.is(":visible")) menu.slideUp({
            complete: function () {
                $(this).css('display', '');
            }
        });
        else menu.slideDown();
    }

/*-----------------------------------------------------------------------------------*/
/*  Prevents # being appended to URL and jumping to the top of the page because of the # anchor.
/*-----------------------------------------------------------------------------------*/

    $(function () {
        $(".menubutton").click(function (event) {
            event.preventDefault();
        });
    });

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