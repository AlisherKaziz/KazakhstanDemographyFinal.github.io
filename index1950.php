<?php
require "blocks/header.php";
?>
    <div class="container_wrap">

        <div class="text">
            <p>Статистика за период с 1950 по 1988 года:</p>
        </div>
        <div class="texttwo">
            <p >Этот период для Казахстана стал спокойным и без каких-либо потрясений, население росло стабильно вверх.
            </p>
        </div>

        <div class="exampels1">
            <canvas id="exampels1"></canvas>
        </div>

    </div>
<?php
$way = "stat1950/script.js";
require "blocks/footer.php";
?>