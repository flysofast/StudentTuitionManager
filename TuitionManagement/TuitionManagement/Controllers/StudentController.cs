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

        /// <summary>
        /// Create new item
        /// </summary>
        /// <param name="item"></param>
        /// <returns>InvoiceID or error message</returns>
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

                return Json(new { invoiceID = invoice.InvoiceId }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(ex.Message, JsonRequestBehavior.AllowGet); ;

            }

        }
        /// <summary>
        /// Update student infomation
        /// </summary>
        /// <param name="item"></param>
        /// <returns></returns>
        public JsonResult UpdateAPI(Student item)
        {
            try
            {
                var obj = db.Student.Find(item.StudentId);
                if (obj != null)
                {
                    obj.StudentName = item.StudentName;
                    obj.StudentCode = item.StudentCode;
                    obj.Address = item.Address;
                    obj.Phone = item.Phone;
                    obj.Birthday = item.Birthday;
                    obj.Email = item.Email;
                    obj.Gender = item.Gender;
                    db.SaveChanges();
                }

                return Json(1, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(ex.Message, JsonRequestBehavior.AllowGet); ;

            }

        }


        /// <summary>
        /// Load table data from database
        /// </summary>
        /// <returns></returns>
        public JsonResult LoadTableDataAPI()
        {
            return Json(db.Student.Select(p => new { p.StudentId, p.StudentCode, p.StudentName, p.Birthday }).ToList(), JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// Get classtype info
        /// </summary>
        /// <returns>classtype related info</returns>
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

        public JsonResult DeleteAPI(int id)
        {
            try
            {
                var invoices = db.Invoice.Where(p => p.StudentId == id);
                foreach (var invoice in invoices)
                {
                    var subinvoices = db.SubInvoice.Where(p => p.InvoiceId == invoice.InvoiceId);
                    foreach (var subinvoice in subinvoices)
                    {
                        db.SubInvoice.Remove(subinvoice);
                    }
                    var receipts = db.Receipt.Where(p => p.InvoiceID == invoice.InvoiceId);
                    foreach (var receipt in receipts)
                    {
                        db.Receipt.Remove(receipt);
                    }

                    db.SaveChanges();

                    db.Invoice.Remove(invoice);
                }

                db.SaveChanges();

                var student = db.Student.Find(id);
                if (student != null)
                {
                    db.Student.Remove(student);
                    db.SaveChanges();

                }
                return Json(1, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(ex.Message, JsonRequestBehavior.AllowGet); ;

            }


        }

        /// <summary>
        /// Find student by ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
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
