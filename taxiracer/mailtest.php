<?php
// ���� ����������
$to = "3065081@gmail.com";
 
// ����
$subject = "e-mail ����";
 
// ���������
$message = "��� �������� ���������.\n
� �� ������� ��������?\n
����� ���������.";
 
// ������� �����
$message = wordwrap($message, 70);
 
// �������� �����
// ���������� TRUE, ���� ������ ���������� (������, ���� ������� �������� ���������, ������� ���������� �����, ��������, exim)
if ( mail($to, $subject, $message) )
{

    echo("����� ���������� ... ����� ��");
}
else
{
    echo("����� �� ����������");
}
?>