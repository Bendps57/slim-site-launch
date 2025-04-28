
// Importing necessary functions from store libraries or other utilities
import { create } from 'zustand';

// Create a simple store to control the LeadCaptureDialog visibility
interface PopupStore {
  isLeadDialogOpen: boolean;
  openLeadDialog: () => void;
  closeLeadDialog: () => void;
}

export const usePopupStore = create<PopupStore>((set) => ({
  isLeadDialogOpen: false,
  openLeadDialog: () => set({ isLeadDialogOpen: true }),
  closeLeadDialog: () => set({ isLeadDialogOpen: false }),
}));

// The old function redirecting to an external URL
export const openContactPopup = () => {
  // Instead of opening a new window, we now use our store to show the LeadCaptureDialog
  const { openLeadDialog } = usePopupStore.getState();
  openLeadDialog();
  return true;
};
