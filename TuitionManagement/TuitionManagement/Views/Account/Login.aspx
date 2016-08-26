<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Bootstrap Snippet: Login Form</title>

    <link href="../../Content/bootstrap.min.css" rel="stylesheet" />
    <link href="../../Content/login.css" rel="stylesheet" />

</head>

<body>
    <div data-vide-bg="/video/student"
        data-vide-options="posterType: jpg, loop: true, muted: true, position: 0% 0%"
        style="width: 100%; height: 100%;padding-top:80px">
        <div class="wrapper">
            <form class="form-signin">
                <h2 class="form-signin-heading">Please login</h2>
                <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
                <input type="password" class="form-control" name="password" placeholder="Password" required="" />
                <label class="checkbox">
                    <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe">
                    Remember me
                </label>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
            </form>
        </div>
    </div>



    <script src="../../Scripts/jquery-2.0.0.min.js"></script>
    <script src="../../Scripts/jquery.vide.min.js"></script>


</body>
</html>

