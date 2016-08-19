using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
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
        public JsonResult CreateAPI(StudentRegistration item)
        {

            try
            {
                Student student = item.Student;
                db.Student.Add(student);
                db.SaveChanges();

                Invoice invoice = new Invoice();
                invoice.StudentId = student.StudentId;
                invoice.RegisterInGroup = item.GroupRegister;
                invoice.FeeLevelId = item.FeeLevelID;
                invoice.IsActivated = false;

                db.Invoice.Add(invoice);
                db.SaveChanges();

                return Json(new { invoiceID=invoice.InvoiceId}, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json( ex.Message , JsonRequestBehavior.AllowGet); ;

            }

        }

        public JsonResult LoadTableDataAPI()
        {
            return Json(db.Student.Select(p => new { p.StudentId, p.StudentCode, p.StudentName, p.Birthday }).ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetClassesInfoAPI()
        {
            var result = db.Object.Select(p => new
            {
                ClassTypeID = p.ObjectId,
                ClassType = p.ObjectName,
                p.Class,
                PaidTimes = p.FeeLevel.Select(fl => new
                {
                    fl.FeeLevelId,
                    fl.PaidTime
                }),

            }).Where(p => p.Class.Equals("class_type")).ToList();

            if (result == null)
            {
                return Json(0, JsonRequestBehavior.AllowGet);

            }
            else
            {
                return Json(result, JsonRequestBehavior.AllowGet);

            }

        }


        public JsonResult FindStudentByIDAPI(int id)
        {
            var result = db.Student.Where(p => p.StudentId == id).Select(p => new
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

            }).FirstOrDefault();

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

    public class StudentRegistration
    {
        [Display(Name = "Student")]
        public Student Student { set; get; }

        [Display(Name = "ClassTypeID")]
        public int ClassTypeID { set; get; }

        [Display(Name = "FeeLevelID")]
        public int FeeLevelID { set; get; }

        [Display(Name = "GroupRegister")]
        public int GroupRegister { set; get; }

    }
}
