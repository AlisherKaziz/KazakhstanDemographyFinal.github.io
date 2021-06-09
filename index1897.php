<?php
    require "blocks/header.php"
?>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <div class="container_wrap">

                <div class="text">
                    <p>Численность казахского населения на территории Казахстана:</p>
                </div>
                <div class="texttwo">
                    <p >Первая всеобщая перепись населения Российской империи, проведенной в 1897 году, зарегистрировала 4084139 казахов на основе родного языка и «родственные кайсакам» 7607 кипчаков. Численность казахского населения, по их подсчетам, составляла 4091746 человек. Казахи составляли 30,08% от тюркских народов (13601251 чел.), проживавших в пределах Российской империи. Среди тюркских народов, по данным переписи 1897 года.
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
                    <p>Численность казахского населения на территории Казахстана:</p>
                </div>
                <div class="texttwo">
                    <p >1,14% (46833 чел.) казахов проживали в городах. В Семипалатинской области в городах проживали 2,65%, Сырдарьинской – 2,29%, Акмолинской – 3,33%, Семиреченской – 1,80%, Уральской – 1,39%, Тургайской области – 0,69% и т.д.
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
    $way = "stat/script.js";
    require "blocks/footer.php"
?>
