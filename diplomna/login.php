<?php
	include_once 'header.php';
?>
      <div>
	<h2>login up</h2>
	<form action="includes/login.inc.php" method="post">
		<input type="text" name="uid" placeholder="Username/Email..."></input>
		<input type="password" name="pwd" placeholder="Password..."></input>
		<button type="submit" name="submit">Log In</button>
	</form>
	<?php
		if(isset($_GET["error"])) {
			if($_GET["error"] == "emptyinput") {
				echo "<p> Fill in all fields!</p>";
			}
			else if($_GET["error"] == "wronglogin") {
				echo "<p>Incorrect login information!</p>";
			}
		}
	?>
	</div>
<?php
	include_once 'footer.php';
?>

