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
      route: "/welcome",
    },
    {
      name: "Compliance",
      icon: complianceIcon,
      isNew: false,
      route: "/compliance",
    },
    {
      name: "Overview",
      icon: overviewIcon,
      isNew: false,
      route: "/overview",
    },
  ],
  business: [
    {
      name: "Products",
      icon: productsIcon,
      isNew: false,
      route: "/products",
    },
    {
      name: "Customers",
      icon: customersIcon,
      isNew: false,
      route: "/customers",
    },
    {
      name: "Orders",
      icon: ordersIcon,
      isNew: false,
      route: "/orders",
    },
  ],
  payments: [
    {
      name: "Wallets",
      icon: walletsIcon,
      isNew: false,
      route: "/wallets",
    },
    {
      name: "Transactions",
      icon: transactionsIcon,
      isNew: false,
      route: "/transactions",
    },
    {
      name: "Virtual Accounts",
      icon: virtualAccountsIcon,
      isNew: true,
      route: "/virtual-accounts",
    },
  ],
  settings: [
    {
      name: "Live Mode",
      icon: liveModeIcon,
      isNew: false,
      route: "/live-mode",
    },
    {
      name: "Settings",
      icon: settingsIcon,
      isNew: false,
      route: "/settings",
    },
    {
      name: "Audit Logs",
      icon: auditLogsIcon,
      isNew: false,
      route: "/audit-logs",
    },
  ],
};
