using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TuitionManagement.Models;

namespace TuitionManagement.Controllers
{
    public class ClassTypeController : Controller
    {
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
            ViewData["data"] = db.Class.Where(b => b.ClassId == id).FirstOrDefault();
            return View();
        }

        public ActionResult Delete(int ClassId)
        {
            return View();
        }

        public ActionResult Search()
        {
            ViewData["data"] = db.Class.Where(b => b.IsEnded == false).ToList();
            return View();
        }

        public JsonResult Create_Api(Class class_obj)
        {
            try
            {
                db.Class.Add(class_obj);
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

        public JsonResult Update_Api(Class class_obj)
        {
            Class class_objEdit = db.Class.Where(b => b.ClassId == class_obj.ClassId).FirstOrDefault();
            class_objEdit.ClassName = class_obj.ClassName;
            class_objEdit.DateStart = class_obj.DateStart;
            class_objEdit.DateEnd = class_obj.DateEnd;
            class_objEdit.ClassTypeId = class_obj.ClassTypeId;
            class_objEdit.Shift = class_obj.Shift;

            if (db.SaveChanges() == 1)
            {
                return Json(1, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(0, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult Deactivate_Api(Class class_obj)
        {
            Class class_objEdit = db.Class.Where(b => b.ClassId == class_obj.ClassId).FirstOrDefault();
            class_objEdit.IsEnded = true;

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
