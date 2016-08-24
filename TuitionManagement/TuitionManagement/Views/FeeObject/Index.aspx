<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>
<%@ Import Namespace="TuitionManagement.Models" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Fee Object
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
<link rel="stylesheet" type="text/css" media="screen" href="../../Content/bootstrap-table.min.css">
<script src="../../Scripts/Controller/FeeObject.js"></script>
<script type="text/javascript" src="../../Scripts/bootstrap-table.min.js"> </script>

<form role="form">
  <div class="form-group">
    <label for="ClassOfObject">Class Of Object:</label>
    <select id="ClassOfObject" class="form-control">
        <option value="Class">Class</option>
        <option value="class_type">class_type</option>
    </select>
  </div>  
</form>

<table id="tab"
    data-toggle="table"
    data-show-columns="false"
    data-search="false"
    data-mobile-responsive="true"
    data-check-on-init="true"
    data-row-style="rowStyle"
    data-height=300
    data-unique-id="id"
   >
    <thead>
      <tr>
          <th data-field="id" data-sortable="true" >#</th>
          <th data-field="name" data-sortable="true" >Name</th>
          <th data-field="note" data-sortable="true">Note</th>
      </tr>
    </thead>
</table>

<form role="form">
  <div class="form-group">
    <label for="Name">Name:</label>
    <input type="hidden" class="form-control" id="ObjectID">
    <input type="text" class="form-control" id="Name">
  </div>  
  <div class="form-group">
    <label for="Class">Class:</label>
    <input type="text" class="form-control" id="Class">
  </div>  
  <div class="form-group">
    <label for="Note">Note:</label>
    <input type="text" class="form-control" id="Note">
  </div>  
  <div class="form-group">
    <input type="button" class="btn btn-default" value="Fee Level Definition ..." id="FeeLevelButton">
  </div>  
</form>
    <input type="button" class="btn btn-default" value="Add" id="addBtn" onclick="create()">
    <input type="button" class="btn btn-default" value="Edit" id="editBtn"  onclick="update()">
    <input type="button" class="btn btn-default" value="Delete" id="deleteBtn"  onclick="delete_function()">
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Header" runat="server">
</asp:Content>

<asp:Content ID="Content4" ContentPlaceHolderID="Title" runat="server">
</asp:Content>
