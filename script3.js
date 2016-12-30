$().ready(function () {
    $("td[colspan='2']").click(function () {
        $(".b").fadeToggle(1000);
        $(this).show;

    });

})