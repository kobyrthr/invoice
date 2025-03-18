import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Typography } from '@/components/ui/typography';
import React from 'react';

const InvoiceDelete = ({ invoiceId, onDelete, children }) => {
  const dialogTrigger = React.useRef(null);

  return (
    <Dialog>
      <DialogTrigger asChild ref={dialogTrigger}>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[480px] p-12 dark:bg-color-03">
        <DialogTitle>
          <Typography type="heading-m" className="leading-[-0.5px]">
            Confirm Deletion
          </Typography>
        </DialogTitle>

        <DialogDescription>
          <Typography
            asChild
            type="body"
            className="text-color-06 dark:text-color-05"
          >
            <span className="">
              Are you sure you want to delete invoice #{invoiceId}? This action
              cannot be undone.
            </span>
          </Typography>
        </DialogDescription>

        <div className="flex justify-end gap-2 mt-3">
          <Button
            variant="default"
            className="dark:bg-color-04"
            onClick={() => {
              dialogTrigger.current.click();
            }}
          >
            Cancel
          </Button>
          <Button variant="destructive" className="" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InvoiceDelete;
