<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>
<%@ Import Namespace="TuitionManagement.Models" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Edit
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
<script src="../../Scripts/Controller/Object.js"></script>
<% var data = (TuitionManagement.Models.Object)ViewData["data"]; %>
<form role="form">
  <div class="form-group">
    <label for="ObjectName">Email address:</label>
    <input type="hidden" id="ObjectId" value="<%= data.ObjectId %>">
    <input type="text" class="form-control" id="ObjectName" value="<%= data.ObjectName %>">
  </div>
  <div class="form-group">
    <label for="Class">Password:</label>
    <input type="text" class="form-control" id="Class" value="<%= data.Class %>">
  </div>
    <div class="form-group">
    <label for="Notes">Password:</label>
    <input type="text" class="form-control" id="Notes" value="<%= data.Notes %>">
  </div>
  <button type="button" class="btn btn-default" onclick="CreateObject()">Submit</button>
</form>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Title" runat="server">
</asp:Content>
