<?php 

$name = $_POST['name'];  															// Значения атрибута name из нашей формы
$phone = $_POST['phone'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');			// Запускает PHP скрипт
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->SMTPDebug = 3;                              // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP. Предоставляем скрипту свою почту. SMTP сервер есть у каждого почтовика.
$mail->Host = 'smtp.gmail.com';  										// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'bookervoss@gmail.com';      // Наш логин
$mail->Password = 'gsqwgfnewjdkplkh';                 // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('bookervoss@gmail.com', 'Pulse');   		// От кого письмо Почта/Название
$mail->addAddress('bkmrfrbkmrf326915@mail.ru');     	// Add a recipient
//$mail->addAddress('ellen@example.com');             // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Пользователь запросил звонок';
$mail->Body    = '
		Данные пользователя: <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>