<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>
<%@ Import Namespace="TuitionManagement.Models" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Search
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

<% var data = (List<FeeLevel>)ViewData["data"]; %>
<table class="table table-striped" id="tableResult">
    <thead>
      <tr>
        <th>#</th>
        <th>PaidTime</th>
        <th>TotalMoney</th>
        <th>Period</th>
        <th>ObjectID</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        <% foreach (FeeLevel each in data)
           { %>
        <tr>
            <td><%= each.FeeLevelId %></td>
            <td><%= each.PaidTime %></td>
            <td><%= each.TotalMoney %></td>
            <td><%= each.Period %></td>
            <td><%= each.ObjectID %></td>
            <td><a href="Edit/<%= each.FeeLevelId %>">Edit</a> | <a href="#" onclick="DeleteFeeLevel(<%= each.FeeLevelId %>)">Deactivate</a></td>
        </tr>
        <% } %>
    </tbody>
  </table>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Title" runat="server">
</asp:Content>
