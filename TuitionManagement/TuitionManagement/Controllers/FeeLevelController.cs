using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TuitionManagement.Models;
namespace TuitionManagement.Controllers
{
    public class FeeLevelController : Controller
    {
        //
        // GET: /FeeLevel/

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
            ViewData["data"] = db.FeeLevel.Where(b => b.FeeLevelId == id).FirstOrDefault();
            return View();
        }

        public ActionResult Delete(int FeeLevelId)
        {
            return View();
        }

        public ActionResult Search()
        {
            ViewData["data"] = db.FeeLevel.ToList();
            return View();
        }

        public JsonResult Select_Api_By_ObjID(int objID)
        {
            var result = db.FeeLevel.Where(p => p.ObjectID == objID).Select(p => new
            {
                p.FeeLevelId,
                p.PaidTime,
                p.TotalMoney,
                p.Period,
                p.ObjectID

            }).ToList();
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Create_Api(FeeLevel feelevel)
        {
            try
            {
                db.FeeLevel.Add(feelevel);
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

        public JsonResult Update_Api(FeeLevel feelevel)
        {
            FeeLevel feelevelEdit = db.FeeLevel.Where(b => b.FeeLevelId == feelevel.FeeLevelId).FirstOrDefault();
            feelevelEdit.FeeLevelId = feelevel.FeeLevelId;
            feelevelEdit.PaidTime = feelevel.PaidTime;
            feelevelEdit.TotalMoney = feelevel.TotalMoney;
            feelevelEdit.Period = feelevel.Period;
            feelevelEdit.ObjectID = feelevel.ObjectID;

            if (db.SaveChanges() == 1)
            {
                return Json(1, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(0, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult Deactivate_Api(int id)
        {
            FeeLevel feelevelEdit = db.FeeLevel.Where(b => b.FeeLevelId == id).FirstOrDefault();
            db.FeeLevel.Attach(feelevelEdit);
            db.FeeLevel.Remove(feelevelEdit);

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
