<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Create
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <script src="../../Scripts/Controller/FeeLevel.js"></script>
<form role="form">
  <div class="form-group">
    <label for="PaidTime">PaidTime:</label>
    <input type="text" class="form-control" id="PaidTime">
  </div>
  <div class="form-group">
    <label for="TotalMoney">TotalMoney:</label>
    <input type="text" class="form-control" id="TotalMoney">
  </div>
  <div class="form-group">
    <label for="Period">Period:</label>
    <input type="text" class="form-control" id="Period">
  </div>
  <div class="form-group">
    <label for="ObjectID">ObjectID:</label>
    <input type="text" class="form-control" id="ObjectID">
  </div>
  <button type="button" class="btn btn-default" onclick="CreateFeeLevel()">Submit</button>
</form>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Title" runat="server">
</asp:Content>
