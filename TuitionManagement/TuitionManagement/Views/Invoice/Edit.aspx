<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>
<%@ Import Namespace="TuitionManagement.Models" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Edit
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <% var data = (Invoice)ViewData["data"]; %>
<script src="../../Scripts/Controller/Invoice.js"></script>
<form role="form">
  <div class="form-group">
    <label for="StudentId">StudentId:</label>
    <input type="hidden" class="form-control" id="InvoiceId" value="<%= data.InvoiceId %>">
    <input type="text" class="form-control" id="StudentId">
  </div>
  <div class="form-group">
    <label for="ClassID">ClassID:</label>
    <input type="text" class="form-control" id="ClassID" value="<%= data.ClassID %>">
  </div>
  <div class="form-group">
    <label for="ClassTypeID">ClassTypeID:</label>
    <input type="text" class="form-control" id="ClassTypeID" value="<%= data.ClassTypeID %>">
  </div>
  <div class="form-group">
    <label for="FeeLevelId">FeeLevelId:</label>
    <input type="text" class="form-control" id="FeeLevelId" value="<%= data.FeeLevelId %>">
  </div>
  <div class="form-group">
    <label for="RegisterInGroup">RegisterInGroup:</label>
    <input type="text" class="form-control" id="RegisterInGroup" value="<%= data.RegisterInGroup %>">
  </div>
  <div class="form-group">
    <label for="ActivatedDate">ActivatedDate:</label>
    <input type="text" class="form-control" id="ActivatedDate" value="<%= data.ActivatedDate %>">
  </div>
  <div class="form-group">
    <label for="Notes">Notes:</label>
    <input type="text" class="form-control" id="Notes" value="<%= data.Notes %>">
  </div>
  <button type="button" class="btn btn-default" onclick="UpdateInvoice()">Submit</button>
</form>


</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Title" runat="server">
</asp:Content>
