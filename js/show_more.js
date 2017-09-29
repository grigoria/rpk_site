$(document).ready(function () {
    size_li = $(".photo-listing li").size();
    x=12;
    $('.photo-listing li:lt('+x+')').show();
    $('#loadMore').click(function () {
        x= (x+3 <= size_li) ? x+3 : size_li;
        $('.photo-listing li:lt('+x+')').show();
    });
});
