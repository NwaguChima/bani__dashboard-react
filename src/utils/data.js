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
      new: false,
    },
    {
      name: "Compliance",
      icon: complianceIcon,
      new: false,
    },
    {
      name: "Overview",
      icon: overviewIcon,
      new: false,
    },
  ],
  business: [
    {
      name: "Products",
      icon: productsIcon,
      new: false,
    },
    {
      name: "Customers",
      icon: customersIcon,
      new: false,
    },
    {
      name: "Orders",
      icon: ordersIcon,
      new: false,
    },
  ],
  payments: [
    {
      name: "Wallets",
      icon: walletsIcon,
      new: false,
    },
    {
      name: "Transactions",
      icon: transactionsIcon,
      new: false,
    },
    {
      name: "Virtual Accounts",
      icon: virtualAccountsIcon,
      new: true,
    },
  ],
  footer: [
    {
      name: "Live Mode",
      icon: liveModeIcon,
      new: false,
    },
    {
      name: "Settings",
      icon: settingsIcon,
      new: false,
    },
    {
      name: "Audit Logs",
      icon: auditLogsIcon,
      new: false,
    },
  ],
};
