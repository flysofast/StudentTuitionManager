using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TuitionManagement.Models;

namespace TuitionManagement.Controllers
{
    public class FeeObjectController : Controller
    {
        //
        // GET: /FeeObject/

        FeeManagementEntities db = new FeeManagementEntities();
        public ActionResult Index()
        {
            ViewData["data"] = db.Object.ToList();
            return View();
        }

        public JsonResult Select_By_Class_Api(string Class)
        {
            var result = db.Object.Select(p => new
            {
                p.ObjectId,
                p.ObjectName,
                p.Notes,
                p.Class,
            }).Where(b => b.Class == Class);


            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Create_Api(TuitionManagement.Models.Object object_obj)
        {
            try
            {
                db.Object.Add(object_obj);
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

        public JsonResult Update_Api(TuitionManagement.Models.Object object_obj)
        {
            TuitionManagement.Models.Object object_objEdit = db.Object.Where(b => b.ObjectId == object_obj.ObjectId).FirstOrDefault();
            object_objEdit.ObjectName = object_obj.ObjectName;
            object_objEdit.Class = object_obj.Class;
            object_objEdit.Notes = object_obj.Notes;

            if (db.SaveChanges() == 1)
            {
                return Json(1, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(0, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult Deactivate_Api(TuitionManagement.Models.Object object_obj)
        {
            TuitionManagement.Models.Object object_objEdit = db.Object.Where(b => b.ObjectId == object_obj.ObjectId).FirstOrDefault();
            db.Object.Attach(object_objEdit);
            db.Object.Remove(object_objEdit);
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
