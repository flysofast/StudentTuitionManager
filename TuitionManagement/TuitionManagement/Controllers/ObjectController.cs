using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TuitionManagement.Models;

namespace TuitionManagement.Controllers
{
    public class ObjectController : Controller
    {
        //
        // GET: /Object/

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
            ViewData["data"] = db.Object.Where(b => b.ObjectId == id).FirstOrDefault();
            return View();
        }

        public ActionResult Delete(int ObjectId)
        {
            return View();
        }

        public ActionResult Search()
        {
            ViewData["data"] = db.Object.ToList();
            return View();
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
