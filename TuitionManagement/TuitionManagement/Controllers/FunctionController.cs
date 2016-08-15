using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TuitionManagement.Models;

namespace TuitionManagement.Controllers
{
    public class FunctionController : Controller
    {
        //
        // GET: /Function/

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
            ViewData["data"] = db.Function.Where(b => b.FunctionId == id).FirstOrDefault();
            return View();
        }

        public ActionResult Delete(int FunctionId)
        {
            return View();
        }

        public ActionResult Search()
        {
            ViewData["data"] = db.Function.ToList();
            return View();
        }

        public JsonResult Create_Api(Function function)
        {
            try
            {
                db.Function.Add(function);
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

        public JsonResult Update_Api(Function function)
        {
            Function functionEdit = db.Function.Where(b => b.FunctionId == function.FunctionId).FirstOrDefault();
            functionEdit.FunctionName = function.FunctionName;
            functionEdit.Description = function.Description;

            if (db.SaveChanges() == 1)
            {
                return Json(1, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(0, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult Deactivate_Api(Function function)
        {
            Function functionEdit = db.Function.Where(b => b.FunctionId == function.FunctionId).FirstOrDefault();
            db.Function.Attach(functionEdit);
            db.Function.Remove(functionEdit);

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
