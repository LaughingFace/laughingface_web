isLoadProducts = false;
isLoadContracts = false;
isLoadTeam = false;
isLoadAbout = false;

isLoadTeam = false;
var dynamic_load = function()
{
//下面这句主要是获取网页的总高度，主要是考虑兼容性所以把Ie支持的documentElement也写了，这个方法至少支持IE8
    var htmlHeight=document.body.scrollHeight||document.documentElement.scrollHeight;
    //clientHeight是网页在浏览器中的可视高度，
    var clientHeight=document.body.clientHeight||document.documentElement.clientHeight;
    //scrollTop是浏览器滚动条的top位置，
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    console.log(scrollTop);
    EleProductsTop = $("#products").offset().top;
    EleContractsTop = $("#contracts").offset().top;
    EleTeamTop = $("#team").offset().top;
    EleAboutTop=$("#about").offset().top;
    if (scrollTop>100)
    {
        $("#toTop").css("opacity",1);
    }
    else {
        $("#toTop").css("opacity",scrollTop/100);
    }
    if (!isLoadProducts)
    {

        if(clientHeight+scrollTop>EleProductsTop)
        {
            $("#products_img1").attr("src","images/products_show.png");
            $("#products_img2").attr("src","images/product1.jpg");
            isLoadProducts = true;
        }
    }

    if (!isLoadContracts)
    {
        if(clientHeight+scrollTop>EleContractsTop)
        {
            $("#dy_contracts_1").attr("src","images/contract_show.png");
            $("#dy_contracts_2").attr("src","location.html");
            $("#dy_contracts_3").attr("src","images/contract_person.jpg");
            isLoadContracts = true;

        }
    }
    if (!isLoadAbout)
    {
        if (clientHeight+scrollTop>EleAboutTop)
        {
            $("#dy_about_1").attr("src","images/tuanduijieshao.png");
            isLoadAbout = true;
        }

    }
    if (!isLoadTeam)
    {
        if(clientHeight+scrollTop>EleTeamTop)
        {
            $("#ceo").hover(function(){
                $("#ceo-img").css({
                    background: "url(images/p1.jpg) no-repeat 0px -200px",
                    display: "block"})

            },function(){
                $("#ceo-img").css({
                    background: "url(images/p1.jpg) no-repeat 0px 0px",
                })
            });
            $("#ceo-img").css({
                background: "url(images/p1.jpg) no-repeat 0px 0px",
            })
            // --------------------------------------------------

            $("#ooo").hover(function(){
                $("#ooo-img").css({
                    background: "url(images/p2.jpg) no-repeat 0px -200px",
                    display: "block"})

            },function(){
                $("#ooo-img").css({
                    background: "url(images/p2.jpg) no-repeat 0px 0px",
                })
            });
// --------------------------------------------------
            $("#ooo-img").css({
                background: "url(images/p2.jpg) no-repeat 0px 0px",
            });
            $("#cto").hover(function(){
                $("#cto-img").css({
                    background: "url(images/p3.jpg) no-repeat 0px -200px",
                    display: "block"})

            },function(){
                $("#cto-img").css({
                    background: "url(images/p3.jpg) no-repeat 0px 0px",
                })
            });
            $("#cto-img").css({
                background: "url(images/p3.jpg) no-repeat 0px 0px",
            });
            isLoadTeam = true;

        }
    }
};


$(window).scroll(function(){
    dynamic_load();
});
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i) ? true: false;
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i) ? true: false;
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true: false;
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) ? true: false;
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
};
$(window).load(function() {

    if (!isMobile.any()){
        var clientHeight=document.body.clientHeight||document.documentElement.clientHeight;
        $("#home").css({
            background: "url('images/home_bg.jpg') no-repeat 0px -165px",
            height:clientHeight+30
        });
    }
    else{
        $("#home").css({
            background: "url('images/home_bg.jpg') no-repeat 0px -165px"

        });
    }
    document.documentElement.scrollTop = 1;
    document.body.scrollTop = 1;

});
