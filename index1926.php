<?php
    require "blocks/header.php";
?>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">

            <div class="container_wrap">

                <div class="text">
                    <p>По данным перепеси 1926 года:</p>
                </div>
                <div class="texttwo">
                    <p >По данным Всесоюзной переписи населения 1926 г. в Казахстане насчитывалось 6503 тысяч человек, расселившихся на территории 6 губерний, Кустанайский Округа, Адеивского уезда и Каракалпакской автономной области.
                    </p>
                </div>

                <div class="exampels1">
                    <canvas id="exampels1"></canvas>
                </div>

            </div>

        </div>
        <div class="carousel-item">
            <div class="container_wrap">

                <div class="text">
                    <p>Распределение населения по городам и селам-фермерским хозяйствам</p>
                </div>
                <div class="texttwo">
                    <p >Распределение жителей по территории Казахстана, таким образом, было неравномерным, что объясняется различными природными условиями, а также исторческими факторами развития хозяйства отдельных районов.
                    </p>
                </div>

                <div class="exampels1">
                    <canvas id="stat2"></canvas>
                </div>

            </div>

        </div>
        <div class="carousel-item">
            <div class="container_wrap">

                <div class="text">
                    <p>Национальный состав населния Казахстана на момент 1926 года</p>
                </div>
                <div class="texttwo">
                    <p >Казахстан всегда был много национальной страной, и на это диаграме это хорошо видно.
                    </p>
                </div>

                <div class="exampels1">
                    <canvas id="stat3"></canvas>
                </div>

            </div>

        </div>

    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
<?php
    $way = "stat1926/script.js";
    require "blocks/footer.php";
?>