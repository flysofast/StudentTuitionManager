<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Create
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

<script src="../../Scripts/Controller/Function.js"></script>
<form role="form">
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" id="Name">
  </div>
  <div class="form-group">
    <label for="password">Description:</label>
    <input type="text" class="form-control" id="Description">
  </div>
  <button type="button" class="btn btn-default" onclick="CreateFunction()">Submit</button>
</form>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Title" runat="server">
</asp:Content>
