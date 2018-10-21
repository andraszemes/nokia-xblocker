<?php session_start(); if(isset($_SESSION["login"])) header('Location: pages/dashboard.php');  ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>About | X-BLOCKER</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/bulma.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body id="landing">
    <header>
      <nav class="navbar" role="navigation" aria-label="main navigation" id="landp">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <span class="is-flex">
                <h3 class="title is-3 has-text-primary nomargin-fix logo-x">X</h3>
                <h3 class="title is-3 has-text-grey-dark text-unim logo-blocker">&nbsp;BLOCKER</h3>
              </span>
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a href="pages/login.php" class="button is-white">
                    <span class="icon is-small">
                      <i class="fas fa-sign-in-alt"></i>
                    </span>
                    &nbsp;Log in
                  </a>
                  <a href="pages/register.php" class="button is-info">
                    <span class="icon is-small">
                      <i class="fas fa-user-plus"></i>
                    </span>
                    &nbsp;Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container">
            <span class="is-flex has-centered-h">
              <h1 class="title is-xl text-main nomargin-fix">X</h1>
              <h1 class="title is-xl text-unim" style="color: white;">&nbsp;BLOCKER</h1>
            </span>
            <span class="is-flex has-centered-h">
              <h1 class="subtitle f-cookie" style="font-size: 1.5rem; color: white;">By F1reWall-Es</h1>
            </span>
            <span class="is-flex has-centered-h">
              <a class="button is-primary is-inverted is-outlined" style="margin-top: 1rem;">LEARN MORE</a>
            </span>
          </div>
        </div>
      </section>
    </main>
    <footer>

    </footer>
  </body>
  <script src="assets/js/app.js" charset="utf-8"></script>
  <script src="http://localhost:35729/livereload.js" charset="utf-8"></script>
</html>
