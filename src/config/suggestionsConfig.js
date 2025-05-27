// src/config/suggestionsConfig.js
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import InfoIcon from '@mui/icons-material/Info'; // Example for another icon
// Import other MUI Icons as needed

export const suggestionCategories = {
  // Suggestions based on Role ID
  EMPLOYEE: [
    {
      id: 'emp_s1',
      textKey: 'suggestions.employee.completeProfile',
      icon: LightbulbIcon,
    },
    {
      id: 'emp_s2',
      textKey: 'suggestions.employee.checkPolicies',
      icon: InfoIcon,
    },
  ],
  HR_MANAGER: [
    {
      id: 'hr_s1',
      textKey: 'suggestions.hr.newHireProcess',
      icon: LightbulbIcon,
    },
    {
      id: 'hr_s2',
      textKey: 'suggestions.hr.performanceReviewCycle',
      icon: InfoIcon,
    },
  ],
  RECRUITER: [
    {
      id: 'rec_s1',
      textKey: 'suggestions.recruiter.candidatePool',
      icon: LightbulbIcon,
    },
  ],
  ADMIN: [
    {
      id: 'adm_s1',
      textKey: 'suggestions.admin.systemBackup',
      icon: LightbulbIcon,
    },
  ],
  // Suggestions for specific pages/contexts
  PAGE_REQUEST_LEAVE: [
    {
      id: 'prl_s1',
      textKey: 'suggestions.requestLeave.provideDates',
      icon: LightbulbIcon,
    },
    {
      id: 'prl_s2',
      textKey: 'suggestions.requestLeave.checkBalance',
      icon: InfoIcon,
    },
  ],
  PAGE_POST_JOB: [
    {
      id: 'ppj_s1',
      textKey: 'suggestions.postJob.clearDescription',
      icon: LightbulbIcon,
    },
  ],
  GENERAL: [
    // Fallback or general tips
    {
      id: 'gen_s1',
      textKey: 'suggestions.general.askSamanta',
      icon: LightbulbIcon,
    },
  ],
};
