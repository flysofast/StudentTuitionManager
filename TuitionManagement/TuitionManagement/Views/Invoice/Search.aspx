<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>
<%@ Import Namespace="TuitionManagement.Models" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Search
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

<script src="../../Scripts/Controller/Invoice.js"></script>
<% var data = (List<Invoice>)ViewData["data"]; %>
<table class="table table-striped" id="tableResult">
    <thead>
      <tr>
        <th>#</th>
        <th>StudentId</th>
        <th>ClassID</th>
        <th>ClassTypeID</th>
        <th>FeeLevelId</th>
        <th>RegisterInGroup</th>
        <th>ActivatedDate</th>
        <th>Notes</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        <% foreach (Invoice each in data)
           { %>
        <tr>
            <td><%= each.InvoiceId %></td>
            <td><%= each.StudentId %></td>
            <td><%= each.ClassID %></td>
            <td><%= each.ClassTypeID %></td>
            <td><%= each.FeeLevelId %></td>
            <td><%= each.RegisterInGroup %></td>
            <td><%= each.ActivatedDate %></td>
            <td><%= each.Notes %></td>
            <td><a href="Edit/<%= each.InvoiceId %>">Edit</a> | <a href="#" onclick="DeleteInvoice(<%= each.InvoiceId %>)">Deactivate</a></td>
        </tr>
        <% } %>
    </tbody>
  </table>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Title" runat="server">
</asp:Content>
