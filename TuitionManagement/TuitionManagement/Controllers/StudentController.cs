using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TuitionManagement.Models;

namespace TuitionManagement.Controllers
{
    public class StudentController : Controller
    {
        //
        // GET: /Student/
        FeeManagementEntities db = new FeeManagementEntities();
        public ActionResult Index()
        {

            return View();
        }

        public JsonResult CreateAPI(Student item)
        {
            return null;
        }

        public JsonResult LoadTableDataAPI()
        {
            return Json(db.Student.Select(p => new { p.StudentId, p.StudentCode, p.StudentName, p.Birthday }).ToList(), JsonRequestBehavior.AllowGet);
        }

        //public JsonResult GetClassesInfo()
        //{
        //    var result=db.
        //}

        public JsonResult FindStudentByIDAPI(int id)
        {
            var result = db.vwInvoice.Where(p => p.StudentId == id).Select(p => new
            {
                p.StudentId,
                p.StudentName,
                p.StudentCode,
                p.Gender,
                p.Birthday,
                p.Address,
                p.Email,
                p.Phone,
                //Classes = p.Class.Select(q => new { q.ClassId, q.ClassName }),
                //Invoices = p.Invoice.Select(q => new { q.InvoiceId, q.RegisterInGroup })

            }).First();

            if (result == null)
            {
                return Json(0, JsonRequestBehavior.AllowGet);

            }
            else
            {
                return Json(result, JsonRequestBehavior.AllowGet);

            }
        }
    }
}
