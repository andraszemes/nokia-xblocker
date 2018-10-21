<?php
include('../logic/loginverify.php');
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Add Child | X-BLOCKER</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link rel="stylesheet" href="../assets/css/bulma.min.css">
    <link rel="stylesheet" href="../assets/css/style.css">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <span class="is-flex">
            <h3 class="title is-3 text-main nomargin-fix">X</h3>
            <h3 class="title is-3 text-unim">&nbsp;BLOCKER</h3>
          </span>
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar-list" class="navbar-menu">
        <div class="navbar-start">
          <a href="dashboard.php" class="navbar-item is-active">
            <span class="icon is-small">
              <i class="fas fa-users-cog"></i>
            </span>
            &nbsp;Children
          </a>

          <a href="filters.php" class="navbar-item">
            <span class="icon is-small">
              <i class="fas fa-filter"></i>
            </span>
            &nbsp;Filters
          </a>
          <!--
          <a href="settings.php" class="navbar-item">
            <span class="icon is-small">
              <i class="fas fa-cog"></i>
            </span>
            &nbsp;Settings
          </a>
          -->
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a href="../logic/signout.php" class="button is-danger" id="signout_btn">
                <span class="icon is-small">
                  <i class="fas fa-sign-out-alt"></i>
                </span>
                &nbsp;Log out
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main id="addChild">
      <div class="box">
        <form method="post" action="../logic/addchild.php">
          <h3 class="title is-3">
            Add your child
          </h3>
          <div class="field">
            <div class="control has-icons-left">
              <input name="name" placeholder="Name" type="text" class="input">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <div class="control has-icons-left">
              <input name="phone" placeholder="Contact" type="text" class="input">
              <span class="icon is-small is-left">
                <i class="fas fa-phone"></i>
              </span>
            </div>
          </div>
          <div class="field">
              <div class="control has-icons-left">
                <input type="date" class="input" name="birthday">
                <span class="icon is-small is-left">
                  <i class="fas fa-calendar"></i>
                </span>
              </div>
          </div>
          <div class="field">
            <div id="multipleChoice">
              <div class="choiceBox">
                <?php
                require('../logic/mysql_connector.php');
                $puid = $_SESSION['uid'];
                $sql = "SELECT * FROM filters WHERE parent_id = '".$puid."'";
                $result = $conn->query($sql);

                if($result->num_rows > 0) {
                  while ($row = $result->fetch_assoc()) {
                    echo('<div class="choiceEntry"><input type="checkbox" name="filters[]" value="'.$row["id"].'">'.$row["name"].'</div>');
                  }
                }
                $conn->close();
                 ?>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-primary" type="submit" name="add">
                <span class="icon is-small">
                  <i class="fa fa-user-plus"></i>
                </span>
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  </body>
  <script src="../assets/js/app.js" charset="utf-8"></script>
</html>
