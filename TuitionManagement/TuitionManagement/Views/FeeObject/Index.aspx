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
    <input type="button" class="btn btn-default" value="Fee Level Definition ..." id="FeeLevelButton" onclick="FeeLevelModal()">
  </div>  
</form>
    <input type="button" class="btn btn-default" value="Add" id="addBtn" onclick="create()">
    <input type="button" class="btn btn-default" value="Edit" id="editBtn"  onclick="update()">
    <input type="button" class="btn btn-default" value="Delete" id="deleteBtn"  onclick="delete_function()">

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">FeeLevel Management</h4>
      </div>
      <div class="modal-body">
        <form role="form">
          <div class="form-group">
            <label for="PaidTime">Paid Time:</label>
            <input type="hidden" class="form-control" id="FeeLevelId">
            <input type="text" class="form-control" id="PaidTime">
          </div>  
            <div class="form-group">
            <label for="TotalMoney">Total Money:</label>
            <input type="text" class="form-control" id="TotalMoney">
          </div> 
          <div class="form-group">
            <label for="Period">Period:</label>
            <input type="text" class="form-control" id="Period">
          </div> 
          <div class="form-group">
            <input type="button" class="btn btn-default" id="AddFeeLevel" value="Add" >
            <input type="button" class="btn btn-default" id="EditFeeLevel" value="Edit" >
            <input type="button" class="btn btn-default" id="RemoveFeeLevel" value="Delete" >
          </div> 
        </form>
        <table id="FeeLevelTab"
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
                  <th data-field="PaidTime" data-sortable="true" >Paid Time</th>
                  <th data-field="TotalMoney" data-sortable="true" >Total Money</th>
                  <th data-field="Period" data-sortable="true">Period</th>
              </tr>
            </thead>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Header" runat="server">
</asp:Content>

<asp:Content ID="Content4" ContentPlaceHolderID="Title" runat="server">
</asp:Content>
