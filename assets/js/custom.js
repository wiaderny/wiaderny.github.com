/*Custom JS*/

$(document).ready(function () {

    // Add break after duration in CV and show on hover

    $("span.duration").after("<br />");
    $("p").hover(function(){
        $(this).find("span.duration").fadeIn("slow");
    },function(){
        $(this).find("span.duration").fadeOut("slow");
    });

    // Responsive Menue
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

    // Prevents # being appended to URL. Also Prevents jumping to the top of the page because of the # anchor.

    $(function () {
        $(".menubutton").click(function (event) {
            event.preventDefault();
        });
    });

    // Markdown Footnotes
    $(function () {

        $("a[rel=footnote]").each(function () {
            var link = $(this);
            var token = link.attr('href').substr(1);
            var footnoteContent = $(document.getElementById(token)).html();

            // There is an issue with the line below that stops the clock-tap-scroll-to-top on iOS
            $('body').append('<div id="overlay-' + token + '" class="footnoteContent">' + footnoteContent + '</div>');

            link.click(function () {
                var $currentFootnote = $(document.getElementById('overlay-' + token));

                // If the footnote is already displayed, hide it instead
                if ($currentFootnote.is(':visible')) {
                    $currentFootnote.slideUp('fast');

                } else {
                    $('.footnoteContent').hide();
                    $currentFootnote.slideDown('fast');
                }

                return false;
            });
        });

        $('.footnoteContent a[rev=footnote]').remove();
        $('.footnoteContent').prepend('<a href="#" class="closeFootnote">&times;</a>');
        $('.closeFootnote').click(function () {
            $(this).closest('.footnoteContent').slideUp('fast');
            return false;
        });
    });

    // Active Nav Class
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