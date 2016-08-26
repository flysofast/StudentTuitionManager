<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Create
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
<link rel="stylesheet" type="text/css" media="screen" href="../../Content/bootstrap-datetimepicker.min.css">
<script src="../../Scripts/Controller/Rate.js"></script>
<script type="text/javascript" src="../../Scripts/bootstrap-datetimepicker.min.js"> </script>
<form role="form">
  <div class="form-group">
    <label for="DateCreated">Date:</label>
    <input size="16" type="text" value="2012-06-15 14:45" readonly class="form_datetime form-control">
  </div>
  <div class="form-group">
    <label for="USD">USD:</label>
    <input type="number" class="form-control" id="USD">
  </div>
  <div class="form-group">
    <label for="VND">VND:</label>
    <input type="number" class="form-control" id="VND">
  </div>
  
  <button type="button" class="btn btn-default" onclick="CreateRate()">Submit</button>
</form>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Title" runat="server">
</asp:Content>
