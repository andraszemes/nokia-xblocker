<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Login | X-BLOCKER</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link rel="stylesheet" href="../assets/css/bulma.min.css">
    <link rel="stylesheet" href="../assets/css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <main id="mainform">
      <div class="block has-text-centered">
        <span class="is-flex">
          <h3 class="title is-3 text-main nomargin-fix">X</h3>
          <h3 class="title is-3 text-unim">&nbsp;BLOCKER</h3>
        </span>
        <h4 class="subtitle is-4 f-cookie">By F1reWall-Es</h4>
      </div>
      <div class="box">
        <form method="post" action="../logic/login.php">
          <div class="field">
            <label class="label">E-Mail</label>
            <div class="control has-icons-left">
              <input type="text" class="input" placeholder="someone@example.com" name="email">
              <span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input type="password" class="input" placeholder="Password" name="password">
              <span class="icon is-small is-left"><i class="fas fa-lock"></i></span>
            </div>
          </div>
          <div class="field has-centered-h">
            <div class="control">
              <input class="button is-primary" type="submit" name="login" value="Login">
            </div>
          </div>
        </form>
      </div>
    </main>
  </body>
</html>
