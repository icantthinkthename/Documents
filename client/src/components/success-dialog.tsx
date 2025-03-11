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
          {/* Thumbs up icon from asset */}
          <div className="mb-5 w-24 h-24">
            <img 
              src="/thumb-up.png" 
              alt="Thumbs Up" 
              className="w-full h-full"
            />
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