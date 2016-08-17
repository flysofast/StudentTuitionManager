<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Create
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

<script src="../../Scripts/Controller/Invoice.js"></script>
<form role="form">
  <div class="form-group">
    <label for="StudentId">StudentId:</label>
    <input type="text" class="form-control" id="StudentId">
  </div>
  <div class="form-group">
    <label for="ClassID">ClassID:</label>
    <input type="text" class="form-control" id="ClassID">
  </div>
  <div class="form-group">
    <label for="ClassTypeID">ClassTypeID:</label>
    <input type="text" class="form-control" id="ClassTypeID">
  </div>
  <div class="form-group">
    <label for="FeeLevelId">FeeLevelId:</label>
    <input type="text" class="form-control" id="FeeLevelId">
  </div>
  <div class="form-group">
    <label for="RegisterInGroup">RegisterInGroup:</label>
    <input type="text" class="form-control" id="RegisterInGroup">
  </div>
  <div class="form-group">
    <label for="ActivatedDate">ActivatedDate:</label>
    <input type="text" class="form-control" id="ActivatedDate">
  </div>
  <div class="form-group">
    <label for="Notes">Notes:</label>
    <input type="text" class="form-control" id="Notes">
  </div>
  <button type="button" class="btn btn-default" onclick="CreateInvoice()">Submit</button>
</form>


</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Title" runat="server">
</asp:Content>
