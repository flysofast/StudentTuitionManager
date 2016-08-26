<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Class specification
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="Title" runat="server">
    Class specification
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Header" runat="server">
    <link href="../../Content/bootstrap-table.min.css" rel="stylesheet" />
    <link href="../../Content/student.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <ul id="StudentSpecificationTab" class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#Unclassified">Unclassified</a></li>
        <li><a data-toggle="tab" href="#Classified">Classified</a></li>
    </ul>

    <div class="tab-content">
        <div id="Unclassified" class="tab-pane fade in active">
            <h3></h3>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <label for="opClassType">Class type: </label>
                    <select id="opClassType" class="form-control">
                    </select>
                </div>
                <div class="col-md-3"></div>

            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">

                    <br />
                    <div id="toolbar">
                        <button id="btDone" class="btn btn-success btn-md" onclick="Classify()">
                            <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                            &nbsp;Done
                        </button>
                        <button id="btClassManager" class="btn btn-info btn-md">
                            <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                            &nbsp;Class manager...
                        </button>
                    </div>
                    <table id="StudentList"
                        data-toolbar="#toolbar"
                        data-toggle="table"
                        data-search="true"
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
                                <th data-field="studentID" data-sortable="true">ID</th>
                                <th data-field="name" data-sortable="true">Student name</th>
                                <th data-field="birthday" data-sortable="true">Date of birth</th>
                                <th data-field="classType" data-sortable="true">Class type</th>
                                <th data-field="activatedDate" data-sortable="true">Activation date</th>
                                <th data-field="classOptions">Class</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="col-md-1"></div>

            </div>
        </div>
        <div id="Classified" class="tab-pane fade">
            <h3></h3>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <label for="opClassType2">Class type: </label>
                    <select id="opClassType2" class="form-control">
                    </select>
                </div>
                <div class="col-md-3"></div>

            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">

                    <br />
                    <div id="toolbar2">
                        <button id="btRemove" class="btn btn-danger btn-md" onclick="RemoveStudentFromClass()">
                            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                            &nbsp;Remove from class
                        </button>

                    </div>
                    <table id="StudentList2"
                        data-checkbox="true"
                        data-toolbar="#toolbar2"
                        data-toggle="table"
                        data-search="true"
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
                                <th data-field="studentID" data-sortable="true">ID</th>
                                <th data-field="name" data-sortable="true">Student name</th>
                                <th data-field="birthday" data-sortable="true">Date of birth</th>
                                <th data-field="classType" data-sortable="true">Class type</th>
                                <th data-field="activatedDate" data-sortable="true">Activation date</th>
                                <th data-field="classOptions">Class</th>
                                <th data-field="classID">ID</th>

                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="col-md-1"></div>

            </div>
        </div>

    </div>
    <script src="../../Scripts/bootstrap-table.min.js"></script>
    <script src="../../Scripts/Controller/StudentClassification.js"></script>
</asp:Content>


