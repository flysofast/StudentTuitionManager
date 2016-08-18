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
            return Json(db.Student.Select(p => new { p.StudentId, p.StudentName, p.Birthday }).ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult FindStudentByIDAPI(int ID)
        {
            var result = db.Student.Where(p => p.StudentId == ID).Select(p => new 
            {
                p.StudentId,
                p.StudentName,
                p.StudentCode,
                p.Gender,
                p.Birthday,
                p.Address,
                p.Email,
                p.Phone,
                Classes = p.Class.Select(q => new { q.ClassId, q.ClassName }),
                Invoices = p.Invoice.Select(q => new { q.InvoiceId })
                
            }).First() ;

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
