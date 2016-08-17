<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>
<%@ Import Namespace="TuitionManagement.Models" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Edit
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <% var data = (Function)ViewData["data"]; %>

<script src="../../Scripts/Controller/Function.js"></script>
<form role="form">
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="hidden"id="FunctionId" value="<%= data.FunctionId %>">
    <input type="text" class="form-control" id="Name" value="<%= data.FunctionName %>">
  </div>
  <div class="form-group">
    <label for="password">Description:</label>
    <input type="text" class="form-control" id="Description" value="<%= data.Description %>">
  </div>
  <button type="button" class="btn btn-default" onclick="UpdateFunction()">Submit</button>
</form>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Title" runat="server">
</asp:Content>
