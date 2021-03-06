//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TuitionManagement.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Receipt
    {
        public int ReceiptID { get; set; }
        public int InvoiceID { get; set; }
        public int FeeLevelId { get; set; }
        public Nullable<int> FeeObjectId { get; set; }
        public int RateId { get; set; }
        public double Money { get; set; }
        public System.DateTime FeeDate { get; set; }
        public string Notes { get; set; }
    
        public virtual FeeLevel FeeLevel { get; set; }
        public virtual Invoice Invoice { get; set; }
        public virtual Rate Rate { get; set; }
    }
}
