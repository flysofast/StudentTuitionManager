<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>
<%@ Import Namespace="TuitionManagement.Models" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Search
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
<script src="../../Scripts/Controller/Account.js"></script>
<% var data = (List<FeeAccount>)ViewData["data"]; %>
<table class="table table-striped" id="tableResult">
    <thead>
      <tr>
        <th>#</th>
        <th>Username</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        <% foreach(FeeAccount each in data){ %>
        <tr>
            <td><%= each.AccountId %></td>
            <td><%= each.Username %></td>
            <td><%= each.Role.RoleName %></td>
            <td><a href="Edit/<%= each.AccountId %>">Edit</a> | <a href="#" onclick="DeleteAccount(<%= each.AccountId %>)">Deactivate</a></td>
        </tr>
        <% } %>
    </tbody>
  </table>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Title" runat="server">
</asp:Content>
