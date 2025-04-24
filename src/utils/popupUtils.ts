
import { openLeadCaptureDialog } from '@/components/LeadCaptureDialog';

export const openContactPopup = () => {
  // Instead of opening a new window/tab, directly open the lead capture dialog
  openLeadCaptureDialog();
  return true;
};
