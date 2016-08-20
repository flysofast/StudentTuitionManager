<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Template.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Class speciacation
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="Title" runat="server">
    Class speciacation
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Header" runat="server">
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
        </div>
        <div id="Unclassified" class="tab-pane fade">
            <h3>Menu 1</h3>
            <p>Some content in menu 1.</p>
        </div>

    </div>

    <script src="../../Scripts/Controller/StudentClassification.js"></script>
</asp:Content>


