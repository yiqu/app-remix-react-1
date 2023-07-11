import type { DialogProps} from "@mui/material";
import { Button, Dialog, DialogTitle, IconButton, Stack } from "@mui/material";

export interface DialogLayoutProps {
  open: boolean;
  title: React.ReactNode;
  maxWidth?: DialogProps['maxWidth'];
  onClose: (payload?: any) => void;
  children: React.ReactNode
}

function DialogLayout({ open, title, maxWidth="lg", onClose, children }: DialogLayoutProps) {

  const handleClose = () => {
    onClose();
  };


  return (
    <Dialog
      fullWidth={ true }
      maxWidth={ maxWidth }
      open={ open }
      onClose={ handleClose }
    >
      <DialogTitle sx={ {backgroundColor: "background.default", color: 'text.primary'} }>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          { title}
          <Button aria-label="close" onClick={ handleClose }> Close </Button> 
        </Stack>
        
      </DialogTitle>
       
      { children }
    </Dialog>
  );
}


export default DialogLayout;