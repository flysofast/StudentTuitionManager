<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Create
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

<script src="../../Scripts/Controller/Object.js"></script>
<form role="form">
  <div class="form-group">
    <label for="ObjectName">Email address:</label>
    <input type="text" class="form-control" id="ObjectName">
  </div>
  <div class="form-group">
    <label for="Class">Password:</label>
    <input type="text" class="form-control" id="Class">
  </div>
    <div class="form-group">
    <label for="Notes">Password:</label>
    <input type="text" class="form-control" id="Notes">
  </div>
  <button type="button" class="btn btn-default" onclick="CreateObject()">Submit</button>
</form>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Title" runat="server">
</asp:Content>
