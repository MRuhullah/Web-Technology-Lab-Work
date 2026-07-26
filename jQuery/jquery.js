$(document).ready(function () {

    $("p").click(function () {
        $(this).hide();
    });

    $(".link").hover(function () {
        alert("You hovered over me")
    })

    $("#hideBtn").click(function () {
        $("#text").hide()
    })

    $("#changecolor").click(function () {
        $('div').css("color", "red")
    })


    $(".butt").click(function () {
        $(".ppp").toggle(3000)
    })

    $(".ani").slideToggle(5000) // slideUp,slideDown 

    $(".anime").animate({
        opacity: 0.5,
        height: '150px',
        width: '350px',
        opacity: 0.8
    }, 3000)

    $('body').addClass("holo")// will add class="holo" on body tag. removeClass: will remove class in tags.

    $("#pic").attr("src", "camera.jpg")

    $(".prepend").prepend("<div>Qasimm</div>")

    $(".fadein").fadeOut(5000); // fadeIn:slowly appears. fadeToggle: swithes between fadeIn and fadeOut

});