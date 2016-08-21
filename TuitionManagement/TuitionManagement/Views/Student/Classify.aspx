<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Class specification
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="Title" runat="server">
    Class specification
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Header" runat="server">
    <link href="../../Content/bootstrap-table.min.css" rel="stylesheet" />
    <link href="../../Content/bootstrap-select.min.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#Classified">Classified</a></li>
        <li><a data-toggle="tab" href="#Unclassified">Unclassified</a></li>
    </ul>

    <div class="tab-content">
        <div id="Classified" class="tab-pane fade in active">
            <h3></h3>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <label for="email">Class type: </label>
                    <select id="opClassType" class="form-control">
                    </select>


                </div>
                <div class="col-md-3"></div>

            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">

                    <br />
                    <table id="StudentList"
                        data-toggle="table"
                        data-show-columns="false"
                        data-mobile-responsive="true"
                        data-check-on-init="true"
                        data-row-style="rowStyle"
                        data-height="400"
                        data-clicktoselect="true"
                        data-striped="true"
                        data-unique-id="studentID"
                        class="table">
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
        <div id="Unclassified" class="tab-pane fade">
            <h3>Menu 1</h3>
            <p>Some content in menu 1.</p>
        </div>

    </div>
    <script src="../../Scripts/bootstrap-table.min.js"></script>
    <script src="../../Scripts/bootstrap-select.min.js"></script>
    <script src="../../Scripts/Controller/StudentClassification.js"></script>
</asp:Content>


