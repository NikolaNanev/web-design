<?php
	session_start();
?>

<!DOCTYPE html>
<head>
	<title>Quiz App</title>
  <meta charset = "utf-8">
	<link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div>
        <div class="home-box custom-box">
            <a href="Изпитни тестове за шофьорски изпит.html"><img sre="img/logo-white.png" alt="Blogs logo">
            <ul>
                <li><a href="index.php">Home</a›</li>
                <li><a href="discover.php">About Us</a></1i>
                <li><a href="blog.php">Find Blogs</ax</li>
		<?php
			if(isset($_SESSION["useruid"])) {
				
                		echo "<li><a href='includes/logout.inc.php'>Log out</a›</li>";
			}
			else {
				echo "<li><a href='signup.php'>Sign up</a></li>";
				echo "<li><a href='login.php'>Log in</a></li>";
			}
		?>
            </ul>
        </div>
    </div>
    
 <div class="home-box custom-box">