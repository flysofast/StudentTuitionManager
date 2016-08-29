<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Navbar.ascx.cs" Inherits="TuitionManagement.WebUserControl1" %>
<li class="dropdown">
<a class="dropdown-toggle" data-toggle="dropdown" href="#">Account Management
    <span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li><a href="/Users/search">Account Management</a></li>
        <li><a href="/Users/create">Account Create</a></li>
    </ul>
</li>
<li class="dropdown">
<a class="dropdown-toggle" data-toggle="dropdown" href="#">Student Management
    <span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li><a href="/student/register">Student Information</a></li>
        <li><a href="/student/classify">Class Specification</a></li>
    </ul>
</li>
<li class="dropdown">
<a class="dropdown-toggle" data-toggle="dropdown" href="#">Course Management
    <span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li><a href="/rate/Create">Rate</a></li>
        <li><a href="#">Class</a></li>
        <li><a href="/FeeObject/index">Fee Object</a></li>
    </ul>
</li>
<li><a href="/invoice/Create">Invoices Management</a></li>
<li><a href="#">Tuition Management</a></li>
<li class="dropdown">
<a class="dropdown-toggle" data-toggle="dropdown" href="#">Statics Management
    <span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li><a href="#">Unpaid invoices</a></li>
        <li><a href="#">Payment Statics</a></li>
    </ul>
</li>