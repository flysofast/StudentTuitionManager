<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>
<%@ Import Namespace="TuitionManagement.Models" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Search
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    
<script src="../../Scripts/Controller/Function.js"></script>
<% var data = (List<Function>)ViewData["data"]; %>
<table class="table table-striped" id="tableResult">
    <thead>
      <tr>
        <th>#</th>
        <th>FunctionName</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        <% foreach (Function each in data)
           { %>
        <tr>
            <td><%= each.FunctionId %></td>
            <td><%= each.FunctionName %></td>
            <td><%= each.Description %></td>
            <td><a href="Edit/<%= each.FunctionId %>">Edit</a> | <a href="#" onclick="DeleteFunction(<%= each.FunctionId %>)">Deactivate</a></td>
        </tr>
        <% } %>
    </tbody>
  </table>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Title" runat="server">
</asp:Content>
