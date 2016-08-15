<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>
<%@ Import Namespace="TuitionManagement.Models" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Edit
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
<script src="../../Scripts/Controller/Account.js"></script>
<% var data = (FeeAccount)ViewData["data"]; %>
<form role="form">
  <div class="form-group">
    <input type="hidden" class="form-control" id="FeeAccountId" value="<%= data.AccountId %>">
    <label for="username">Username:</label>
    <input type="text" class="form-control" id="username" value="<%= data.Username %>">
  </div>
  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password" class="form-control" id="password" value="<%= data.Password %>">
  </div>
  <div class="form-group">
      <label for="role">Role:</label>
      <select class="form-control" id="role">
        <option value>Please select Role</option>
        <option value="1" <% if (data.RoleId == 1) Response.Write("Selected"); %>>Admin</option>
        <option value="2" <% if (data.RoleId == 2) Response.Write("Selected"); %>>Staff</option>
      </select>
    </div>
  <button type="button" class="btn btn-default" onclick="UpdateAccount()">Submit</button>
</form>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Title" runat="server">
</asp:Content>
