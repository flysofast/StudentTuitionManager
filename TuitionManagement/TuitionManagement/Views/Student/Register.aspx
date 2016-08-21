<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content" ContentPlaceHolderID="Header" runat="server">
    <link href="../../Content/student.css" rel="stylesheet" />
    <link href="http://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel="stylesheet">
    <link href="../../Content/bootstrap-table.min.css" rel="stylesheet" />
    <%--    <link href="../../Content/themes/jquery.multiselect.css" rel="stylesheet" />
    <link href="../../Content/themes/jquery.multiselect.filter.css" rel="stylesheet" />--%>
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Student management

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Title" runat="server">
    Student management
    
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">


    <div class="container">
       <%-- <div class="form-group">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-2 ">
                    <label for="tbSearch">Student Name</label>
                </div>
                <div class="col-md-8">
                    <div class="col-md-10">
                        <input type="text" id="tbSearch" name="tbSearch" class="form-control" />
                    </div>
                    <button type="button" class="btn btn-default" onclick="">Search</button>
                    <div class="col-md-2"></div>
                </div>
                <div class="col-md-1"></div>

            </div>--%>
        </div>

        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <table id="StudentList"
                    data-toggle="table"
                    data-show-columns="false"
                    data-search="true"
                    data-mobile-responsive="true"
                    data-check-on-init="true"
                    data-row-style="rowStyle"
                    data-height="400"
                    data-clickToSelect="true"
                    data-unique-id="studentID"
                    class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th data-field="studentID" data-sortable="true">ID</th>
                            <th data-field="code" data-sortable="true">Student code</th>
                            <th data-field="name" data-sortable="true">Student name</th>
                            <th data-field="birthday" data-sortable="true">Date of birth</th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div class="col-md-1"></div>

        </div>

        <div class="row">

            <div class="col-md-2"></div>
            <div class="col-md-8">
                <form id="student-info" role="form">
                    <table id="form-table" cellspacing="0">
                        <tr>
                            <td>Student code:</td>
                            <td>
                                <input type="text" id="tbStudentCode" class="form-control" />

                            </td>
                        </tr>
                        <tr>
                            <td>Student name (*):</td>
                            <td>
                                <input type="text" id="tbStudentName" class="form-control" name="name" />

                            </td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td>
                                <label class="radio-inline">
                                    <input id="rdbMale" type="radio" name="rdbGender" value="male">Male</label>
                                <label class="radio-inline">
                                    <input id="rdbFemale" type="radio" name="rdbGender" value="female">Female</label>
                            </td>
                        </tr>
                        <tr>
                            <td>Birthday (*):</td>
                            <td>
                                <input type="text" id="dpBirthday" class="form-control"></td>
                        </tr>
                        <tr>
                            <td>Address (*):</td>
                            <td>
                                <input type="text" id="tbAddress" class="form-control" />

                            </td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>
                                <input type="text" id="tbPhone" class="form-control" />

                            </td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>
                                <input type="email" id="tbEmail" class="form-control" placeholder="Enter a valid email address" />

                            </td>
                        </tr>
                        <tr>
                            <td>Class type (*):</td>
                            <td>
                                <select id="opClassType" class="form-control readOnly" required="required">
                                </select>

                            </td>
                        </tr>
                        <tr>
                            <td>Paid times (*):</td>
                            <td>
                                <select id="opPaidTimes" class="form-control readOnly" required="required">
                                </select>

                            </td>
                        </tr>
                        <tr>
                            <td>Register group (*):</td>
                            <td>
                                <select id="opRegGroup" class="form-control readOnly" required="required">
                                </select>

                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="text-align: center; padding-top: 10px">
                                <button type="button" class="btn btn-default" onclick="Create()">Add</button>
                                <button type="button" class="btn btn-default" onclick="Update($('#StudentList tbody tr.highlight').first().data('uniqueid'))">Edit</button>
                                <button type="button" class="btn btn-default" onclick="Delete($('#StudentList tbody tr.highlight').first().data('uniqueid'))">Delete</button>
                                <button type="button" class="btn btn-default" onclick="ClearFields()">New</button>
                            </td>
                        </tr>

                    </table>
                </form>

            </div>
            <div class="col-md-2"></div>

        </div>
    </div>

   

    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js" type="text/javascript"></script>
    <%--   <script src="../../Scripts/jquery.multiselect.min.js"></script>
    <script src="../../Scripts/jquery.multiselect.filter.min.js"></script>--%>
    <script src="../../Scripts/bootstrap-table.min.js"></script>
    <script src="../../Scripts/Controller/StudentRegister.js" type="text/javascript"></script>
</asp:Content>


