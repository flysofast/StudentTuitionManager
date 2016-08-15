using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TuitionManagement.Models;

namespace TuitionManagement.Controllers
{
    public class RoleController : Controller
    {
        //
        // GET: /Role/

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
            ViewData["data"] = db.Role.Where(b => b.RoleId == id).FirstOrDefault();
            return View();
        }

        public ActionResult Delete(int RoleId)
        {
            return View();
        }

        public ActionResult Search()
        {
            ViewData["data"] = db.Role.Where(b => b.IsDelete == false).ToList();
            return View();
        }

        public JsonResult Create_Api(Role role)
        {
            try
            {
                db.Role.Add(role);
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

        public JsonResult Update_Api(Role role)
        {
            Role roleEdit = db.Role.Where(b => b.RoleId == role.RoleId).FirstOrDefault();
            roleEdit.RoleName = role.RoleName;

            if (db.SaveChanges() == 1)
            {
                return Json(1, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(0, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult Deactivate_Api(Role role)
        {
            Role roleEdit = db.Role.Where(b => b.RoleId == role.RoleId).FirstOrDefault();
            roleEdit.IsDelete = true;

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
