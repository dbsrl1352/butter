window.onload = function () {
    $("#closeBtn").hide();
    $("#butterVideo").hide();
    $(".menu").hide();
    $(".right").hide();
    $(".info").hide();

    $(".mem").siblings().hide();
    $(".mem").eq(0).show();
}

function playButter() {
    $(".menu-bar").hide();
    $(".mainImg").hide();
    $("#closeBtn").show();
    $("#butterVideo").show();
    $("#butterVideo")[0].play();
    // console.log($("#butterVideo")[0]);
}

function closeAll() {
    $(".menu-bar").show();
    $(".mainImg").show();
    $("#closeBtn").hide();
    $("#butterVideo").hide();
    $(".menu").hide();
    $(".right").hide();
    $(".left p").css({
        "width": "400px",
        "left": "38%"
    }, 500);

    $("#butterVideo")[0].pause();
}

function openMenu() {
    $(".menu").show();
    $(".menu-bar").hide();
    $("#closeBtn").show();
}

function openSideMenu() {
    $(".right").show(500);
    $(".left p").animate({
        "width": "350px",
        "left": "30%"
    }, 500);
}

function goBack() {
    location.href = 'index.html';
}

function closeInfo() {
    $(".info").hide();
}

function openInfo(idx) {
    $(".info").show();
    $(".i-left > img").attr("src", "/images/" + idx + ".jpg");
    $(".mem").siblings().hide();
    $(".mem").eq(idx).show();
}

