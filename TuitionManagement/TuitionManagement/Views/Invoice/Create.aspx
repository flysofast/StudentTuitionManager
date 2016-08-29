<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Create
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

<script src="../../Scripts/Controller/Invoice.js"></script>
    <input type="hidden" id="invoiceIDSelected" />
    <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <label for="StudentName_form">Student name: </label>
                    <input type="text" class="form-control" id="StudentName_form"/>
                </div>
                <div class="col-md-3"></div>

            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <label for="opClassType">Class type: </label>
                    <select id="opClassType" class="form-control">
                    </select>
                </div>
                <div class="col-md-3"></div>

            </div>
<ul id="StudentSpecificationTab" class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#Unclassified">Actived</a></li>
        <li><a data-toggle="tab" href="#Classified">Unactivated</a></li>
    </ul>

    <div class="tab-content">
        <div id="Unclassified" class="tab-pane fade in active">
            <h3></h3>
            
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">

                    <br />
                    <table id="StudentListActive"
                        data-toolbar="#toolbar"
                        data-toggle="table"
                        data-search="false"
                        data-show-columns="false"
                        data-mobile-responsive="true"
                        data-check-on-init="true"
                        data-row-style="rowStyle"
                        data-height="400"
                        data-clicktoselect="true"
                        data-striped="true"
                        data-unique-id="studentID"
                        class="table classification-table">
                        <thead>
                            <tr>
                                <th data-field="InvoiceID" data-sortable="true">#</th>
                                <th data-field="studentID" data-sortable="true">Student Code</th>
                                <th data-field="name" data-sortable="true">Student name</th>
                                <th data-field="classType" data-sortable="true">Class type</th>
                                <th data-field="activatedDate" data-sortable="true">Activation date</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="col-md-1"></div>
               
            </div>
             <div class="row" style="padding-top:19px">
                 <div class="col-md-4"></div>
                 <div class="col-md-4">
                    <div class="form-group">
                        <button type="button" class="btn btn-default" onclick="Update()">Update</button>
                        <button type="button" class="btn btn-default" onclick="Delete()">Delete</button>
                        <button type="button" class="btn btn-default" onclick="Upgrade()">Upgrade</button>
                      </div>
                 </div>
                 <div class="col-md-4"></div>
              </div>
            
        </div>
        <div id="Classified" class="tab-pane fade">
            
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">

                    <br />
                    <table id="StudentListUnactive"
                        data-toolbar="#toolbar"
                        data-toggle="table"
                        data-search="false"
                        data-show-columns="false"
                        data-mobile-responsive="true"
                        data-check-on-init="true"
                        data-row-style="rowStyle"
                        data-height="400"
                        data-clicktoselect="true"
                        data-striped="true"
                        data-unique-id="studentID"
                        class="table classification-table">
                        <thead>
                            <tr>
                                <th data-field="InvoiceID" data-sortable="true">#</th>
                                <th data-field="studentID" data-sortable="true">ID</th>
                                <th data-field="name" data-sortable="true">Student name</th>
                                <th data-field="classType" data-sortable="true">Class type</th>
                                <th data-field="activatedDate" data-sortable="true">Activation date</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="col-md-1"></div>
               
            </div>
             <div class="row" style="padding-top:19px">
                 <div class="col-md-4"></div>
                 <div class="col-md-4">
                    <div class="form-group">
                        <button type="button" class="btn btn-default" onclick="Active()">Active</button>
                        <button type="button" class="btn btn-default" onclick="Delete()">Delete</button>
                        <button type="button" class="btn btn-default" onclick="Upgrade()">Upgrade</button>
                      </div>
                 </div>
                 <div class="col-md-4"></div>
              </div>
           
        </div>

    </div>
    <form role="form">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="StudentCode">Student Code:</label>
                            <input type="text" class="form-control" id="StudentCode">
                        </div>
                        <div class="form-group">
                            <label for="StudentName">Student name:</label>
                            <input type="text" class="form-control" id="StudentName">
                        </div>
                        <div class="form-group">
                            <label for="DOB">DOB :</label>
                            <input type="text" class="form-control" id="DOB">
                        </div>
                        <div class="form-group">
                            <label for="Gender">Gender :</label>
                            <input type="text" class="form-control" id="Gender">
                        </div>
                        <div class="form-group">
                            <label for="Email">Email :</label>
                            <input type="text" class="form-control" id="Email">
                        </div>
                        <div class="form-group">
                            <label for="Phone">Phone :</label>
                            <input type="text" class="form-control" id="Phone">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="ActDate">Reg/Act Date :</label>
                            <input type="text" class="form-control" id="ActDate">
                        </div>
                        <div class="form-group">
                            <label for="Class">Class :</label>
                            <select id="Class" class="form-control">
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="Paytime">Pay time :</label>
                            <input type="text" class="form-control" id="Paytime">
                        </div>
                        <div class="form-group">
                            <label for="InGroup">Reg. in group :</label>
                            <select id="InGroup" class="form-control">
                                <option value="1">1</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="Note">Note :</label>
                            <input type="text" class="form-control" id="Note">
                        </div>
                    </div>
                </div>
              
            </form>
    <script src="../../Scripts/bootstrap-table.min.js"></script>


</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Title" runat="server">
    
    <link href="../../Content/bootstrap-table.min.css" rel="stylesheet" />
    <link href="../../Content/student.css" rel="stylesheet" />
</asp:Content>
