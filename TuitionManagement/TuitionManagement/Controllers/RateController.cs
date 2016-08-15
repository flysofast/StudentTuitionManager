using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TuitionManagement.Models;

namespace TuitionManagement.Controllers
{
    public class RateController : Controller
    {
        //
        // GET: /Rate/


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
            ViewData["data"] = db.Rate.Where(b => b.RateId == id).FirstOrDefault();
            return View();
        }

        public ActionResult Delete(int RateId)
        {
            return View();
        }

        public ActionResult Search()
        {
            ViewData["data"] = db.Rate.ToList();
            return View();
        }

        public JsonResult Create_Api(Rate rate)
        {
            try
            {
                db.Rate.Add(rate);
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

        public JsonResult Update_Api(Rate rate)
        {
            Rate rateEdit = db.Rate.Where(b => b.RateId == rate.RateId).FirstOrDefault();
            rateEdit.USDRate = rate.USDRate;
            rateEdit.VNDRate = rate.VNDRate;
            rateEdit.RateDate = rate.RateDate;

            if (db.SaveChanges() == 1)
            {
                return Json(1, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(0, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult Deactivate_Api(Rate rate)
        {
            Rate rateEdit = db.Rate.Where(b => b.RateId == rate.RateId).FirstOrDefault();
            db.Rate.Attach(rateEdit);
            db.Rate.Remove(rateEdit);

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
