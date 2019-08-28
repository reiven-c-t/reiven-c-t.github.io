var COME_CONSTANT = "last-coming-reiven-c-t";
var commingFlg = Cookies.get(COME_CONSTANT);
if (!commingFlg) {
    Cookies.set(COME_CONSTANT, 'True', {expires: 2});
    UIkit.modal('#modal-center').show();
}
$(function () {
    // TOC
    $(".toc>ul").addClass("uk-hidden");
    var content = "<h3>Contents</h3>" +
        "<ul class=\"uk-nav uk-nav-default\">";

    $(".toc>ul").find("a").each(function(i, item){
        content += "<li class='content-scroll'>"+item.outerHTML+"</li>";
    });
    content += "</ul>";
    $("#content-nav").html(content);
    UIkit.scroll('.content-scroll>a', {duration:500,offset:80});


    // Table Prettify
    $('#article table').addClass('uk-table uk-table-divider uk-table-small uk-table-justify uk-table-middle  uk-table-striped')
        .wrap("<div class='uk-overflow-auto'></div>");

    // lightbox
    $('#article img:not(.og-image img)').each(function(img, element){
        var link = $(element).attr('src');

        $(element).wrap('<a class="venobox" href="' + link + '"></a>');
    });
    $('.venobox').venobox();

    $('.link-preview .link-area').addClass('uk-width-4-5@s uk-width-3-5@m');
});