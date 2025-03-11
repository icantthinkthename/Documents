import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";

interface SuccessDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function SuccessDialog({ open, onClose }: SuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-lg p-6 max-w-sm mx-auto">
        <div className="flex flex-col items-center text-center">
          <img 
            src="/great-job.png" 
            alt="Success" 
            className="w-32 h-32 mb-4" 
          />
          <h2 className="text-xl font-semibold text-primary mb-2">Great Job!</h2>
          <p className="text-gray-600 mb-6">Your document would be reviewed by the admin</p>
        </div>
        <DialogFooter>
          <Button 
            onClick={onClose}
            className="w-full bg-primary text-white hover:bg-primary/90"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}