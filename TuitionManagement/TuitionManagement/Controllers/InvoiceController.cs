using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TuitionManagement.Models;

namespace TuitionManagement.Controllers
{
    public class InvoiceController : Controller
    {
        //
        // GET: /Invoice/

        FeeManagementEntities db = new FeeManagementEntities();
        public ActionResult Index()
        {
            ViewData["StudentActived"] = db.Invoice.Where(b => b.IsActivated == true).FirstOrDefault();
            ViewData["StudentUnactived"] = db.Invoice.Where(b => b.IsActivated == false).FirstOrDefault();
            return View();
        }

        public ActionResult Create()
        {
            return View();
        }

        public ActionResult Edit(int id = 0)
        {
            ViewData["data"] = db.Invoice.Where(b => b.InvoiceId == id).FirstOrDefault();
            return View();
        }

        public ActionResult Delete(int InvoiceId)
        {
            return View();
        }

        public ActionResult Search()
        {
            ViewData["data"] = db.Invoice.Where(b => b.IsActivated == false).ToList();
            return View();
        }

        public JsonResult Create_Api(Invoice invoice)
        {
            try
            {
                db.Invoice.Add(invoice);
                if (db.SaveChanges() == 1)
                {
                    return Json(1, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(0, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception e)
            {
                return Json(e.Message, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult Update_Api(Invoice invoice)
        {
            Invoice invoiceEdit = db.Invoice.Where(b => b.InvoiceId == invoice.InvoiceId).FirstOrDefault();
            return Json(invoice, JsonRequestBehavior.AllowGet);
            //invoiceEdit.InvoiceId = invoice.InvoiceId;
            //invoiceEdit.StudentId = invoice.StudentId;
            invoiceEdit.Student = invoice.Student;
            //invoiceEdit.ClassID = invoice.ClassID;
            //invoiceEdit.ClassTypeID = invoice.ClassTypeID;
            //invoiceEdit.FeeLevelId = invoice.FeeLevelId;
            invoiceEdit.RegisterInGroup = invoice.RegisterInGroup;
            //invoiceEdit.ActivatedDate = invoice.ActivatedDate;
            invoiceEdit.Notes = invoice.Notes;

            if (db.SaveChanges() == 1)
            {
                return Json(1, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(0, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult Deactivate_Api(Invoice invoice)
        {
            Invoice invoiceEdit = db.Invoice.Where(b => b.InvoiceId == invoice.InvoiceId).FirstOrDefault();
            invoiceEdit.IsActivated = false;

            if (db.SaveChanges() == 1)
            {
                return Json(1, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(0, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult selectAllByStatus(bool status)
        {
            var a = db.Invoice
               .Join(db.Student,
               a1 => a1.StudentId,
               b => b.StudentId,
               (a1, b) => new { a1, b }
               )
               .Join(db.Class,
               a2 => a2.a1.ClassID,
               c => c.ClassId,
               (a2, c) => new { a2, c }
               )
               .Join(db.Object,
               a3 => a3.a2.a1.ClassTypeID,
               d => d.ObjectId,
               (a3, d) => new { a3, d }
               )
               .Join(db.FeeLevel,
               a4 => a4.a3.a2.a1.FeeLevelId,
               e => e.FeeLevelId,
               (a4, e) => new
               {
                   FeeLevelId = e.FeeLevelId,
                   PaidTime = e.PaidTime,
                   TotalMoney = e.TotalMoney,
                   Period = e.Period,
                   ObjectId = a4.d.ObjectId,
                   ObjectName = a4.d.ObjectName,
                   Class = a4.d.Class,
                   Notes = a4.d.Notes,
                   ClassId = a4.a3.c.ClassId,
                   ClassName = a4.a3.c.ClassName,
                   DateStart = a4.a3.c.DateStart,
                   DateEnd = a4.a3.c.DateEnd,
                   Shift = a4.a3.c.Shift,
                   IsEnded = a4.a3.c.IsEnded,
                   StudentId = a4.a3.a2.b.StudentId,
                   StudentCode = a4.a3.a2.b.StudentCode,
                   StudentName = a4.a3.a2.b.StudentName,
                   Birthday = a4.a3.a2.b.Birthday,
                   Address = a4.a3.a2.b.Address,
                   Phone = a4.a3.a2.b.Phone,
                   Email = a4.a3.a2.b.Email,
                   Gender = a4.a3.a2.b.Gender,
                   InvoiceId = a4.a3.a2.a1.InvoiceId,
                   RegisterInGroup = a4.a3.a2.a1.RegisterInGroup,
                   IsActivated = a4.a3.a2.a1.IsActivated,
                   ActivatedDate = a4.a3.a2.a1.ActivatedDate
               }
               ).Where(ad => ad.IsActivated == status);
            JsonSerializerSettings jsSettings = new JsonSerializerSettings();
            var converted = JsonConvert.SerializeObject(a, jsSettings);
            return Json(converted, JsonRequestBehavior.AllowGet);
        }

        public JsonResult SelectClassType()
        {
            var result = db.Object.Select(p => new
            {
                p.ObjectId,
                p.ObjectName,
                p.Notes,
                p.Class,
            }).Where(a => a.Class == "class_type").ToList();


            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ActiveStudent(int id)
        {
            Invoice invoiceEdit = db.Invoice.Where(b => b.InvoiceId == id).FirstOrDefault();
            invoiceEdit.IsActivated = true;

            if (db.SaveChanges() == 1)
            {
                return Json(1, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(0, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult DeleteInvoice(int id)
        {
            Invoice invoiceEdit = db.Invoice.Where(b => b.InvoiceId == id).FirstOrDefault();
            db.Invoice.Attach(invoiceEdit);
            db.Invoice.Remove(invoiceEdit);
            if (db.SaveChanges() == 1)
            {
                return Json(1, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(0, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult selectById(int id)
        {
            var a = db.Invoice
               .Join(db.Student,
               a1 => a1.StudentId,
               b => b.StudentId,
               (a1, b) => new { a1, b }
               )
               .Join(db.Class,
               a2 => a2.a1.ClassID,
               c => c.ClassId,
               (a2, c) => new { a2, c }
               )
               .Join(db.Object,
               a3 => a3.a2.a1.ClassTypeID,
               d => d.ObjectId,
               (a3, d) => new { a3, d }
               )
               .Join(db.FeeLevel,
               a4 => a4.a3.a2.a1.FeeLevelId,
               e => e.FeeLevelId,
               (a4, e) => new
               {
                   FeeLevelId = e.FeeLevelId,
                   PaidTime = e.PaidTime,
                   TotalMoney = e.TotalMoney,
                   Period = e.Period,
                   ObjectId = a4.d.ObjectId,
                   ObjectName = a4.d.ObjectName,
                   Class = a4.d.Class,
                   Notes = a4.d.Notes,
                   ClassId = a4.a3.c.ClassId,
                   ClassName = a4.a3.c.ClassName,
                   DateStart = a4.a3.c.DateStart,
                   DateEnd = a4.a3.c.DateEnd,
                   Shift = a4.a3.c.Shift,
                   IsEnded = a4.a3.c.IsEnded,
                   StudentId = a4.a3.a2.b.StudentId,
                   StudentCode = a4.a3.a2.b.StudentCode,
                   StudentName = a4.a3.a2.b.StudentName,
                   Birthday = a4.a3.a2.b.Birthday,
                   Address = a4.a3.a2.b.Address,
                   Phone = a4.a3.a2.b.Phone,
                   Email = a4.a3.a2.b.Email,
                   Gender = a4.a3.a2.b.Gender,
                   InvoiceId = a4.a3.a2.a1.InvoiceId,
                   RegisterInGroup = a4.a3.a2.a1.RegisterInGroup,
                   ActivatedDate = a4.a3.a2.a1.ActivatedDate
               }
               ).Where(x => x.InvoiceId == id);
            JsonSerializerSettings jsSettings = new JsonSerializerSettings();
            var converted = JsonConvert.SerializeObject(a, jsSettings);
            return Json(converted, JsonRequestBehavior.AllowGet);
        }

        

    }
}
