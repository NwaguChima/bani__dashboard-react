import welcomeIcon from "../assets/icons/welcomeIcon.svg";
import complianceIcon from "../assets/icons/complianceIcon.svg";
import overviewIcon from "../assets/icons/overviewIcon.svg";
import productsIcon from "../assets/icons/productsIcon.svg";
import customersIcon from "../assets/icons/customersIcon.svg";
import ordersIcon from "../assets/icons/ordersIcon.svg";
import walletsIcon from "../assets/icons/walletsIcon.svg";
import transactionsIcon from "../assets/icons/transactionsIcon.svg";
import virtualAccountsIcon from "../assets/icons/virtualAccountsIcon.svg";
import liveModeIcon from "../assets/icons/liveModeIcon.svg";
import settingsIcon from "../assets/icons/settingsIcon.svg";
import auditLogsIcon from "../assets/icons/auditLogsIcon.svg";

export const sidebarData = {
  general: [
    {
      name: "Welcome",
      icon: welcomeIcon,
      isNew: false,
    },
    {
      name: "Compliance",
      icon: complianceIcon,
      isNew: false,
    },
    {
      name: "Overview",
      icon: overviewIcon,
      isNew: false,
    },
  ],
  business: [
    {
      name: "Products",
      icon: productsIcon,
      isNew: false,
    },
    {
      name: "Customers",
      icon: customersIcon,
      isNew: false,
    },
    {
      name: "Orders",
      icon: ordersIcon,
      isNew: false,
    },
  ],
  payments: [
    {
      name: "Wallets",
      icon: walletsIcon,
      isNew: false,
    },
    {
      name: "Transactions",
      icon: transactionsIcon,
      isNew: false,
    },
    {
      name: "Virtual Accounts",
      icon: virtualAccountsIcon,
      isNew: true,
    },
  ],
  footer: [
    {
      name: "Live Mode",
      icon: liveModeIcon,
      isNew: false,
    },
    {
      name: "Settings",
      icon: settingsIcon,
      isNew: false,
    },
    {
      name: "Audit Logs",
      icon: auditLogsIcon,
      isNew: false,
    },
  ],
};
