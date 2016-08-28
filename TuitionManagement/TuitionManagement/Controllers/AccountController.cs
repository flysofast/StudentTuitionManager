using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TuitionManagement.Models;

namespace TuitionManagement.Controllers
{
    public class AccountController : Controller
    {
        //
        // GET: /Account/
        FeeManagementEntities db = new FeeManagementEntities();
        public ActionResult Login()
        {
            if (Session["Username"] == null)
            {
                return View();

            }
            else
            {
                return Redirect("/");
            }
        }
        [HttpPost]
        public ActionResult Login(string username, string password)
        {
            string encryptedPassword = password.MD5();
            var user = db.FeeAccount.FirstOrDefault(p => p.Username.Equals(username) && p.Password.Equals(encryptedPassword));
            if (user != null)
            {
                Session["Username"] = user.Username;
                Session["RoleID"] = user.RoleId;
                return Redirect("/");
            }
            else
            {
                Session["Username"] = null;
                Session["RoleID"] = -1;

                ViewData["Message"] = "Wrong username or password";
                return View();
            }
        }

    }
}
