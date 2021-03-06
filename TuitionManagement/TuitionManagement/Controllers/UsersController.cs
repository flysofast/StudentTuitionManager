﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TuitionManagement.Models;

namespace TuitionManagement.Controllers
{
    public class UsersController : Controller
    {
        //
        // GET: /Users/
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
            ViewData["data"] = db.FeeAccount.Where(b => b.AccountId == id).FirstOrDefault();
            return View();
        }

        public ActionResult Delete(int AccountId)
        {
            return View();
        }

        public ActionResult Search()
        {
            ViewData["data"] = db.FeeAccount.Where(b => b.IsDelete == false).ToList();
            return View();
        }

        public JsonResult Create_Api(FeeAccount account)
        {
            try { 
                db.FeeAccount.Add(account);
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

        public JsonResult Update_Api(FeeAccount account)
        {
            FeeAccount accountEdit = db.FeeAccount.Where(b => b.AccountId == account.AccountId).FirstOrDefault();
            accountEdit.Username = account.Username;
            accountEdit.Password = account.Password;
            accountEdit.IsDelete = account.IsDelete;
            accountEdit.RoleId = account.RoleId;

            if (db.SaveChanges() == 1)
            {
                return Json(1, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(0, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult Deactivate_Api(FeeAccount account)
        {
            FeeAccount accountEdit = db.FeeAccount.Where(b => b.AccountId == account.AccountId).FirstOrDefault();
            accountEdit.IsDelete = true;

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
