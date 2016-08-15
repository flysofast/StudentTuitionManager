using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TuitionManagement.Models;

namespace TuitionManagement.Controllers
{
    public class ReceiptController : Controller
    {
        //
        // GET: /Receipt/


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
            ViewData["data"] = db.Receipt.Where(b => b.ReceiptID == id).FirstOrDefault();
            return View();
        }

        public ActionResult Delete(int ReceiptID)
        {
            return View();
        }

        public ActionResult Search()
        {
            ViewData["data"] = db.Receipt.ToList();
            return View();
        }

        public JsonResult Create_Api(Receipt receipt)
        {
            try
            {
                db.Receipt.Add(receipt);
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

        public JsonResult Update_Api(Receipt receipt)
        {
            Receipt receiptEdit = db.Receipt.Where(b => b.ReceiptID == receipt.ReceiptID).FirstOrDefault();
            receiptEdit.InvoiceID = receipt.InvoiceID;
            receiptEdit.FeeLevelId = receipt.FeeLevelId;
            receiptEdit.FeeObjectId = receipt.FeeObjectId;
            receiptEdit.RateId = receipt.RateId;
            receiptEdit.Money = receipt.Money;
            receiptEdit.FeeDate = receipt.FeeDate;
            receiptEdit.Notes = receipt.Notes;

            if (db.SaveChanges() == 1)
            {
                return Json(1, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(0, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult Deactivate_Api(Receipt receipt)
        {
            Receipt receiptEdit = db.Receipt.Where(b => b.ReceiptID == receipt.ReceiptID).FirstOrDefault();
            db.Receipt.Attach(receipt);
            db.Receipt.Remove(receipt);


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
