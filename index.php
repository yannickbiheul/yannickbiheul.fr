<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yannick Biheul</title>
    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/normalize.css">
    <!-- Animate On Scroll -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <!-- POLICES -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">
    <script src="script.js" defer></script>
</head>
<body>
    <?php include('header.php'); ?>

    <main id="main">
        <section class="container">
            <div class="box1">
                <h1 data-aos="fade-right" data-aos-offset="400" data-aos-easing="linear" data-aos-duration="1200">Yannick Biheul</h1>
                <p>Reconversion professionnelle dans le développement web</p>
                <div class="liens">
                    <a href="#">CV</a>
                    <a href="#">GitHub</a>
                </div>
            </div>
            <div class="box2" data-aos="flip-left"             data-aos-easing="linear" data-aos-duration="1500">
                <img src="images/web5.png" alt="Web">
            </div>
        </section>
    </main>

    <!-- Animate On Scroll -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>

</body>
</html>