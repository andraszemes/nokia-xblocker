<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Register | X-BLOCKER</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link rel="stylesheet" href="../assets/css/bulma.min.css">
    <link rel="stylesheet" href="../assets/css/style.css">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
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
      <div class="box is-flex">
        <form action="../logic/register.php" method="post" id="registerForm">
          <div class="block slide act-slide" id="s1">
            <label class="label">
              General Info
            </label>
            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input name="name" type="text" class="input" placeholder="Name" required>
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input name="surname" type="text" class="input" placeholder="Surname" required>
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input name="email" type="email" class="input" placeholder="E-Mail" required>
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input name="phone" type="text" class="input" placeholder="Phone" required>
                <span class="icon is-small is-left">
                  <i class="fas fa-phone"></i>
                </span>
              </div>
            </div>
            <div class="field has-centered-h">
              <div class="control">
                <button class="button is-primary" name="buttonNext" disabled>
                  NEXT
                  &nbsp;
                  <span class="icon">
                    <i class="fa fa-arrow-circle-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div class="block slide" id="s2">
            <div class="field">
              <label class="label">Security</label>
              <div class="control has-icons-left has-icons-right">
                <input type="password" class="input" placeholder="Password" name="password" required>
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input type="password" class="input" placeholder="Repeat password" name="password_rep" required>
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <span>
                    By clicking on the "Register" you agree to the <a href="https://en.wikipedia.org/wiki/Lorem_ipsum" class="text-main">terms and conditions</a>
                  </span>
                </label>
              </div>
            </div>
            <div class="field is-grouped" style="justify-content: center">
              <div class="control">
                <button class="button" type="button" name="buttonBack">
                  <span class="icon is-small is-left"><i class="fas fa-arrow-circle-left"></i></span>
                  &nbsp;BACK
                </button>
              </div>
              <div class="control">
                <input class="button is-primary" type="submit" name="submit" value="REGISTER" disabled>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  </body>
  <script src="../assets/js/app.js" charset="utf-8"></script>
</html>
