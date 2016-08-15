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

            invoiceEdit.InvoiceId = invoice.InvoiceId;
            invoiceEdit.StudentId = invoice.StudentId;
            invoiceEdit.ClassID = invoice.ClassID;
            invoiceEdit.ClassTypeID = invoice.ClassTypeID;
            invoiceEdit.FeeLevelId = invoice.FeeLevelId;
            invoiceEdit.RegisterInGroup = invoice.RegisterInGroup;
            invoiceEdit.ActivatedDate = invoice.ActivatedDate;
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

    }
}
