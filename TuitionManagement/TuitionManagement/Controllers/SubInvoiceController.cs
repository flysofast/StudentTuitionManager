using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TuitionManagement.Models;

namespace TuitionManagement.Controllers
{
    public class SubInvoiceController : Controller
    {
        //
        // GET: /SubInvoice/

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
            ViewData["data"] = db.SubInvoice.Where(b => b.SubInvoiceId == id).FirstOrDefault();
            return View();
        }

        public ActionResult Delete(int SubInvoiceId)
        {
            return View();
        }

        public ActionResult Search()
        {
            ViewData["data"] = db.SubInvoice.ToList();
            return View();
        }

        public JsonResult Create_Api(SubInvoice subinvoice)
        {
            try
            {
                db.SubInvoice.Add(subinvoice);
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

        public JsonResult Update_Api(SubInvoice subinvoice)
        {
            SubInvoice subinvoiceEdit = db.SubInvoice.Where(b => b.SubInvoiceId == subinvoice.SubInvoiceId).FirstOrDefault();
            subinvoiceEdit.InvoiceId = subinvoice.InvoiceId;
            subinvoiceEdit.Money = subinvoice.Money;
            subinvoiceEdit.FeeDate = subinvoice.FeeDate;
            subinvoiceEdit.IsPaid = subinvoice.IsPaid;
            subinvoiceEdit.Notes = subinvoice.Notes;

            if (db.SaveChanges() == 1)
            {
                return Json(1, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(0, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult Deactivate_Api(SubInvoice subinvoice)
        {
            SubInvoice subinvoiceEdit = db.SubInvoice.Where(b => b.SubInvoiceId == subinvoice.SubInvoiceId).FirstOrDefault();
            db.SubInvoice.Attach(subinvoiceEdit);
            db.SubInvoice.Remove(subinvoiceEdit);

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
