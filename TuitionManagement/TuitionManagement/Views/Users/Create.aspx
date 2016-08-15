<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Create
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <script src="../../Scripts/Controller/Account.js"></script>
<form role="form">
  <div class="form-group">
    <label for="username">Email address:</label>
    <input type="email" class="form-control" id="username">
  </div>
  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password" class="form-control" id="password">
  </div>
  <div class="form-group">
      <label for="role">Role:</label>
      <select class="form-control" id="role">
        <option value>Please select Role</option>
        <option value="1">Admin</option>
        <option value="2">Staff</option>
      </select>
    </div>
  <button type="button" class="btn btn-default" onclick="CreateAccount()">Submit</button>
</form>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Title" runat="server">
</asp:Content>
