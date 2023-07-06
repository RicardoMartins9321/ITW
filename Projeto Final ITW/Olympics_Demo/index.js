$('document').ready(function () {
    const carousel = new bootstrap.Carousel('#myCarousel', {
        interval: 10000
    });
    $(".input-group-text").click(function(){
        var pesquisado=$("#barraProcura").val().toLowerCase();
        if (pesquisado.length>0) window.location.href="pieChart.html?search=" + pesquisado;
        return false
    })
});
