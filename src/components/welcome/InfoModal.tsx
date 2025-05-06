
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export interface InfoSection {
  title: string;
  description: string;
  triggerPosition: number;
}

interface InfoModalProps {
  infoSection: InfoSection;
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ infoSection, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{infoSection.title}</DialogTitle>
          <DialogDescription>
            {infoSection.description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end">
          <Button onClick={onClose}>
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
