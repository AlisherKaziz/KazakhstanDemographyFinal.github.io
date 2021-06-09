<?php
    require "blocks/header.php";
?>

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">

            <div class="container_wrap">

                <div class="text">
                    <p>Национальный состав Казахстана по данным текущей статистики 2009 год.</p>
                </div>
                <div class="texttwo">
                    <p >Казахстан страна многонациональная, и тут это хорошо видно.Доля казахов в населении страны 63,1 % (53,4 % в 1999 г.), русских — 23,7 % (30,0 %), узбеков — 2,8 % (2,5 %), украинцев — 2,1 % (3,6 %), уйгур — 1,4 % (1,4 %), татар — 1,3 % (1,7 %), немцев — 1,1 % (2,4 %), других этносов — 4,5 % (5,0 %). В результате неравномерной динамики естественного движения, а также величины и направленности миграций у разных этнических групп украинцы уступили 3-е место узбекам, а немцы — татарам и уйгурам
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
                    <p>По данным перепеси 2009 года:</p>
                </div>
                <div class="texttwo">
                    <p >Религиозная принадлежность населения Казахстана.
                    </p>
                </div>

                <div class="exampels1">
                    <canvas id="stat2"></canvas>
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
$way = "stat2009/script.js";
    require "blocks/footer.php"
?>