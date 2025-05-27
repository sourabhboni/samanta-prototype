// src/config/navigation.js
import { ROLES } from './roles'; // Assuming ROLES are defined like ROLES.HR_MANAGER etc.

import DashboardIcon from '@mui/icons-material/Dashboard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import LogoutIcon from '@mui/icons-material/Logout'; // Example for a common link

export const roleNavigations = {
  HR_MANAGER: [
    {
      labelKey: 'nav.dashboard',
      path: '/dashboard',
      icon: DashboardIcon,
    },
    {
      labelKey: 'nav.postJob',
      path: '/hr/post-job',
      icon: PostAddIcon,
    },
    {
      labelKey: 'nav.approveLeave',
      path: '/hr/approve-leave',
      icon: CheckCircleOutlineIcon,
    },
    {
      labelKey: 'nav.checkPayroll',
      path: '/hr/check-payroll',
      icon: AccountBalanceWalletIcon,
    },
    {
      labelKey: 'nav.userProfile',
      path: '/profile',
      icon: AssignmentIndIcon,
    }, // Common
  ],
  EMPLOYEE: [
    {
      labelKey: 'nav.dashboard',
      path: '/dashboard',
      icon: DashboardIcon,
    },
    {
      labelKey: 'nav.requestLeave',
      path: '/employee/request-leave',
      icon: EventNoteIcon,
    },
    {
      labelKey: 'nav.viewPayslip',
      path: '/employee/view-payslip',
      icon: AccountBalanceWalletIcon,
    },
    {
      labelKey: 'nav.userProfile',
      path: '/profile',
      icon: AssignmentIndIcon,
    }, // Common
  ],
  RECRUITER: [
    {
      labelKey: 'nav.dashboard',
      path: '/dashboard',
      icon: DashboardIcon,
    },
    {
      labelKey: 'nav.scheduleInterview',
      path: '/recruiter/schedule-interview',
      icon: EventNoteIcon,
    },
    {
      labelKey: 'nav.reviewApplications',
      path: '/recruiter/review-applications',
      icon: RateReviewIcon,
    },
    {
      labelKey: 'nav.userProfile',
      path: '/profile',
      icon: AssignmentIndIcon,
    }, // Common
  ],
  ADMIN: [
    {
      labelKey: 'nav.dashboard',
      path: '/dashboard',
      icon: DashboardIcon,
    },
    {
      labelKey: 'nav.systemAudit',
      path: '/admin/system-audit',
      icon: FactCheckIcon,
    },
    {
      labelKey: 'nav.exportLogs',
      path: '/admin/export-logs',
      icon: LogoutIcon,
    }, // Placeholder icon
    {
      labelKey: 'nav.manageAdminUsers',
      path: '/admin/manage-users',
      icon: PersonAddAlt1Icon,
    },
    {
      labelKey: 'nav.userProfile',
      path: '/profile',
      icon: AssignmentIndIcon,
    }, // Common
  ],
};
