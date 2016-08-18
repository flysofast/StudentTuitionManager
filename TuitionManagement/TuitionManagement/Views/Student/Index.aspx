<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content" ContentPlaceHolderID="Header" runat="server">
    <link href="../../Content/student.css" rel="stylesheet" />
    <link href="http://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel="stylesheet">
    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js" type="text/javascript"></script>
    <script src="../../Scripts/Controller/Student.js" type="text/javascript"></script>
    
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Student management

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Title" runat="server">
    Student management
    
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">


    <div class="container">
        <form class="form-inline" role="form">
            <div class="form-group">
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

                </div>
            </div>
        </form>

        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <table id="StudentList" class="table table-hover table-responsive table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Student Code</th>
                            <th>Student name</th>
                            <th>Date of birth</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>

            <div class="col-md-1"></div>

        </div>

        <div class="row">

            <div class="col-md-2"></div>
            <div class="col-md-8">
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
                            <input type="text" id="tbStudentName" class="form-control" />

                        </td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td>
                            <label class="radio-inline">
                                <input type="radio" name="rdbGender" value="male" checked>Male</label>
                            <label class="radio-inline">
                                <input type="radio" name="rdbGender" value="female">Female</label>
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
                            <input type="text" id="tbEmail" class="form-control" />

                        </td>
                    </tr>
                    <tr>
                        <td>Class type (*):</td>
                        <td>
                            <select class="form-control">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>

                        </td>
                    </tr>
                    <tr>
                        <td>Paid count (*):</td>
                        <td>
                            <select class="form-control">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>

                        </td>
                    </tr>
                    <tr>
                        <td>Register group (*):</td>
                        <td>
                            <select class="form-control">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>

                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align: center; padding-top: 10px">
                            <button type="button" class="btn btn-default" onclick="">Add</button>
                            <button type="button" class="btn btn-default" onclick="">Edit</button>
                            <button type="button" class="btn btn-default" onclick="">Delete</button>
                            <button type="button" class="btn btn-default" onclick="">New</button>
                        </td>
                    </tr>

                </table>




            </div>
            <div class="col-md-2"></div>

        </div>

    </div>

</asp:Content>


