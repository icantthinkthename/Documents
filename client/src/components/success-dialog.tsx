import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface SuccessDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function SuccessDialog({ open, onClose }: SuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-lg p-6 max-w-sm mx-auto border-0 shadow-lg">
        <DialogTitle className="sr-only">Document Submission Success</DialogTitle>
        <DialogDescription className="sr-only">
          Your document submission was successful
        </DialogDescription>
        
        <div className="flex flex-col items-center text-center">
          {/* Custom thumbs up icon */}
          <div className="mb-5 w-24 h-24">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary">
              <path d="M7.24 11L10.3 7.32C10.7185 6.82131 10.9519 6.19493 10.9621 5.54229C10.9722 4.88966 10.7586 4.25713 10.35 3.75L9.75 3L10.62 2.47C11.1091 2.19779 11.6646 2.05233 12.2308 2.04956C12.797 2.04679 13.354 2.1868 13.8459 2.45598C14.3378 2.72515 14.7483 3.11476 15.0386 3.58677C15.329 4.05879 15.4894 4.59583 15.5 5.15V8.82C15.5 9.58 15.75 10.31 16.22 10.89L17.51 12.51C17.5256 12.5303 17.539 12.5525 17.55 12.576C17.9465 13.3717 18.014 14.2755 17.741 15.12L17.74 15.13C17.512 15.8584 17.0444 16.4929 16.4121 16.9244C15.7798 17.3559 15.0185 17.5623 14.25 17.51H12.75L10.94 18.34C10.8893 18.3642 10.8451 18.3993 10.8105 18.4426C10.7759 18.4859 10.7518 18.5362 10.74 18.59L10.24 20.73C10.15 21.14 9.77995 21.43 9.35995 21.43H5.09995C4.91215 21.4294 4.73121 21.3636 4.58919 21.2428C4.44717 21.122 4.35261 20.9535 4.32095 20.77L3.5 16.5C3.47147 16.3393 3.49577 16.1748 3.56995 16.03C3.99995 15.06 4.71995 13.44 5.05995 12.5C5.39995 11.57 6.38 11 7.24 11Z" stroke="#112D4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#112D4E"/>
            </svg>
          </div>
          
          <h2 className="text-xl font-semibold text-primary mb-2">Great Job!</h2>
          <p className="text-gray-700 mb-6">Your document would be reviewed by the admin</p>
        </div>
        
        <DialogFooter className="mt-2">
          <Button 
            onClick={onClose}
            className="w-full bg-primary text-white hover:bg-primary/90 rounded-md py-3"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}