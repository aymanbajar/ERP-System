// Dark Mode Toggle

const themeSwitch = document.getElementById("theme-switch");
const darkIcon = document.getElementById("dark-icon");
const lightIcon = document.getElementById("light-icon");
const modeText = document.getElementById("mode-text");

// عند تحميل الصفحة، ضبط الوضع الحالي
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  darkIcon.style.display = "none";
  lightIcon.style.display = "inline";
  modeText.textContent = "Light Mode";
} else {
  document.documentElement.classList.remove("dark");
  darkIcon.style.display = "inline";
  lightIcon.style.display = "none";
  modeText.textContent = "Dark Mode";
}

// عند الضغط على الزر
themeSwitch.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  // تبديل الأيقونات
  if (darkIcon.style.display === "none") {
    darkIcon.style.display = "inline";
    lightIcon.style.display = "none";
    modeText.textContent = "Dark Mode";
  } else {
    darkIcon.style.display = "none";
    lightIcon.style.display = "inline";
    modeText.textContent = "Light Mode";
  }

  // حفظ الوضع
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
});

//  End the Dark Mode Toggle

// Start  asidebar for displaying
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.getElementById("sidebar");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

// End  asidebar for displaying


const dashboardBtn = document.querySelector("a[data-target='dashboard']");
const invoiceBtn = document.querySelector("a[data-target='invoice']");
const paymentBtn = document.querySelector("a[data-target='payment']");
const accountingBtn = document.querySelector("a[data-target='accounting']");
const inventoryBtn = document.querySelector("a[data-target='inventory']");
const taxBtn = document.querySelector("a[data-target='tax']");
const payrollBtn = document.querySelector("a[data-target='payroll']");
const settingsBtn = document.querySelector("a[data-target='settings']");

const dashboard = document.getElementById('dashboard')
const quickInvoice = document.getElementById("quickInvoice");
const payment = document.getElementById("payment");
const accounting = document.getElementById("accounting");
const inventory = document.getElementById("inventory");
const tax = document.getElementById("tax");
const payroll = document.getElementById("payroll");
const settings = document.getElementById("settings");

 function hideAllContentSections() {
   dashboard.classList.add("hidden");
   quickInvoice.classList.add("hidden");
   payment.classList.add("hidden");
   accounting.classList.add("hidden");
   inventory.classList.add("hidden");
   tax.classList.add("hidden");
   payroll.classList.add("hidden");
   settings.classList.add("hidden");
 }

 // أحداث الضغط
 dashboardBtn.addEventListener("click", () => {
   hideAllContentSections();
   dashboard.classList.remove("hidden");
 });
 invoiceBtn.addEventListener("click", () => {
   hideAllContentSections();
   quickInvoice.classList.remove("hidden");
 });
 paymentBtn.addEventListener("click", () => {
   hideAllContentSections();
   payment.classList.remove("hidden");
 });
 accountingBtn.addEventListener("click", () => {
   hideAllContentSections();
   accounting.classList.remove("hidden");
 });
 inventoryBtn.addEventListener("click", () => {
   hideAllContentSections();
   inventory.classList.remove("hidden");
 });
  taxBtn.addEventListener("click", () => {
   hideAllContentSections();
   tax.classList.remove("hidden");
 });
 payrollBtn.addEventListener("click", () => {
   hideAllContentSections();
   payroll.classList.remove("hidden");
 });
 settingsBtn.addEventListener("click", () => {
   hideAllContentSections();
   settings.classList.remove("hidden");
 });




// جلب جميع الأزرار
const buttons = document.querySelectorAll("#actionButtons > button");

// إضافة مستمع الضغط
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // إزالة الخلفية البيضاء من جميع الأزرار
    buttons.forEach((btn) => btn.classList.remove("bg-white"));

    // إضافة الخلفية للزر المضغوط
    button.classList.add("bg-white");
  });
});

// تأكد أن أول زر يكون مفعّل عند التحميل
buttons[0].classList.add("bg-white");


    
  // quick invoice section
    const createBillBtn = document.getElementById("createBill");
    const recentBillsBtn = document.getElementById("recentBills");
    const managementBtn = document.getElementById("management");

    // أقسام
    const createBillSection = document.getElementById("createBillSection");
    const recentBillsSection = document.getElementById("recentBillsSection");
    const managementSection = document.getElementById("managementSection");

    // دالة لإخفاء الكل
    function hideAllSections() {
      createBillSection.classList.add("hidden");
      recentBillsSection.classList.add("hidden");
      managementSection.classList.add("hidden");
    }

    // أحداث الضغط
    createBillBtn.addEventListener("click", () => {
      hideAllSections();
      createBillSection.classList.remove("hidden");
    });

    recentBillsBtn.addEventListener("click", () => {
      hideAllSections();
      recentBillsSection.classList.remove("hidden");
    });

    managementBtn.addEventListener("click", () => {
      hideAllSections();
      managementSection.classList.remove("hidden");
    });

    

    
    
  // quick invoice section
    const ledgerBtn = document.getElementById("ledger");
    const GSTInvoicesBtn = document.getElementById("GSTInvoices");
    const financialReportsBtn= document.getElementById("financialReports");
    const chartofAccountsBtn = document.getElementById("chartofAccounts");

    // أقسام
    const ledgerSection = document.getElementById("ledgerSection");
    const GSTInvoicesSection = document.getElementById("GSTInvoicesSection");
    const financialReportsSection = document.getElementById("financialReportsSection");
    const chartofAccountsSection = document.getElementById("chartofAccountsSection");

    // دالة لإخفاء الكل
    function hideAllSectionsAccounting() {
      ledgerSection.classList.add("hidden");
      GSTInvoicesSection.classList.add("hidden");
      financialReportsSection.classList.add("hidden");
      chartofAccountsSection.classList.add("hidden");
    }

    // أحداث الضغط
    ledgerBtn.addEventListener("click", () => {
      hideAllSectionsAccounting();
      ledgerSection.classList.remove("hidden");
    });

    GSTInvoicesBtn.addEventListener("click", () => {
      hideAllSectionsAccounting();
      GSTInvoicesSection.classList.remove("hidden");
    });

    financialReportsBtn.addEventListener("click", () => {
      hideAllSectionsAccounting();
      financialReportsSection.classList.remove("hidden");
    });

    chartofAccountsBtn.addEventListener("click", () => {
      hideAllSectionsAccounting();
      chartofAccountsSection.classList.remove("hidden");
    });

    
      // Inventory section
    const productsBtn = document.getElementById("products");
    const ordersBtn = document.getElementById("orders");
    const suppliersBtn = document.getElementById("suppliers");

    // أقسام
    const productsSection = document.getElementById("productsSection");
    const ordersSection = document.getElementById("ordersSection");
    const suppliersSection = document.getElementById("suppliersSection");

    // دالة لإخفاء الكل
    function hideAllSectionsInventory() {
      productsSection.classList.add("hidden");
      ordersSection.classList.add("hidden");
      suppliersSection.classList.add("hidden");
    }

    // أحداث الضغط
    productsBtn.addEventListener("click", () => {
      hideAllSectionsInventory();
      productsSection.classList.remove("hidden");
    });

    ordersBtn.addEventListener("click", () => {
      hideAllSectionsInventory();
      ordersSection.classList.remove("hidden");
    });

    suppliersBtn.addEventListener("click", () => {
      hideAllSectionsInventory();
      suppliersSection.classList.remove("hidden");
    });

    //  Payroll Management
    const employessBtn = document.getElementById("employess");
    const payrollRunBtn = document.getElementById("payrollRun");
    const statutoryReportsBtn = document.getElementById("statutoryReports");
    const payrollHistoryBtn = document.getElementById("payrollHistory");

        const employessSection = document.getElementById("employessSection");
        const payrollRunSection = document.getElementById("payrollRunSection");
        const statutoryReportsSection = document.getElementById( "statutoryReportsSection");
        const payrollHistorySection = document.getElementById("payrollHistorySection");

            // دالة لإخفاء الكل
    function hideAllSectionsPayrollManagement() {
      employessSection.classList.add("hidden");
      payrollRunSection.classList.add("hidden");
      statutoryReportsSection.classList.add("hidden");
      payrollHistorySection.classList.add("hidden");
    }

    // أحداث الضغط
    employessBtn.addEventListener("click", () => {
      hideAllSectionsPayrollManagement();
      employessSection.classList.remove("hidden");
    });

    payrollRunBtn.addEventListener("click", () => {
      hideAllSectionsPayrollManagement();
      payrollRunSection.classList.remove("hidden");
    });

    statutoryReportsBtn.addEventListener("click", () => {
      hideAllSectionsPayrollManagement();
      statutoryReportsSection.classList.remove("hidden");
    });
    payrollHistoryBtn.addEventListener("click", () => {
      hideAllSectionsPayrollManagement();
      payrollHistorySection.classList.remove("hidden");
    });

    //   start Tax Compliance 

        const GSTReturnsBtn = document.getElementById("GSTReturns");
        const TDSReturnsBtn = document.getElementById("TDSReturns");
        const TaxSummaryBtn = document.getElementById("TaxSummary");

        const GSTReturnSection = document.getElementById("GSTReturnSection");
        const TDSReturnssection = document.getElementById("TDSReturnssection");
        const taxSummarySection = document.getElementById("taxSummarySection");
 

        // دالة لإخفاء الكل
        function hideAllSectionsTaxCompliance() {
          GSTReturnSection.classList.add("hidden");
          TDSReturnssection.classList.add("hidden");
          taxSummarySection.classList.add("hidden");
          payrollHistorySection.classList.add("hidden");
        }

        // أحداث الضغط
        GSTReturnsBtn.addEventListener("click", () => {
          hideAllSectionsTaxCompliance();
          GSTReturnSection.classList.remove("hidden");
        });

        TDSReturnsBtn.addEventListener("click", () => {
          hideAllSectionsTaxCompliance();
          TDSReturnssection.classList.remove("hidden");
        });

        TaxSummaryBtn.addEventListener("click", () => {
          hideAllSectionsTaxCompliance();
          taxSummarySection.classList.remove("hidden");
        });
        