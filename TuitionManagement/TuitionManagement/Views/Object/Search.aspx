<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>
<%@ Import Namespace="TuitionManagement.Models" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Search
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

<script src="../../Scripts/Controller/Account.js"></script>
<% var data = (List<TuitionManagement.Models.Object>)ViewData["data"]; %>
<table class="table table-striped" id="tableResult">
    <thead>
      <tr>
        <th>#</th>
        <th>ObjectName</th>
        <th>Class</th>
        <th>Notes</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        <% foreach (TuitionManagement.Models.Object each in data)
           { %>
        <tr>
            <td><%= each.ObjectId %></td>
            <td><%= each.ObjectName %></td>
            <td><%= each.Class %></td>
            <td><%= each.Notes %></td>
            <td><a href="Edit/<%= each.ObjectId %>">Edit</a> | <a href="#" onclick="DeleteObject(<%= each.ObjectId %>)">Deactivate</a></td>
        </tr>
        <% } %>
    </tbody>
  </table>


</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Title" runat="server">
</asp:Content>
