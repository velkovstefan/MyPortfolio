// import {
//   MorphingDialog,
//   MorphingDialogTrigger,
//   MorphingDialogContent,
//   MorphingDialogTitle,
//   MorphingDialogImage,
//   MorphingDialogSubtitle,
//   MorphingDialogClose,
//   MorphingDialogDescription,
//   MorphingDialogContainer,
// } from '../../motion-primitives/morphing-dialog';

import {
  Box,
} from "@mui/material";

import "./ChatModal.css"

const CLIP = `polygon(
  0px 8px, 4px 8px, 4px 4px, 8px 4px,
  8px 0px, calc(100% - 8px) 0px,
  calc(100% - 8px) 4px, calc(100% - 4px) 4px,
  calc(100% - 4px) 8px, 100% 8px,
  100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px),
  calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px),
  calc(100% - 8px) 100%, 8px 100%,
  8px calc(100% - 4px), 4px calc(100% - 4px),
  4px calc(100% - 8px), 0px calc(100% - 8px)
)`;

export function ChatModal() {
  return (
    <Box className="font-kode z-5" sx={{ maxWidth: 800, mx: "auto", mb:4, py: 4, px: 2 }}>

      <div className="window-container" style={{ clipPath: CLIP }}>
        <div className="title-bar">
          <div className="dot" style={{ backgroundColor: '#ff5f56' }}></div>
          <div className="dot" style={{ backgroundColor: '#ffbd2e' }}></div>
          <div className="dot" style={{ backgroundColor: '#27c93f' }}></div>
        </div>
        
        <div className="content-area">
          <pre 
            
            // onClick={scramble}
          >
            user@chat-bot:~$ Type Something...
          </pre>
        </div>
      </div>
    </Box>
    // <MorphingDialog
    //   transition={{
    //     type: 'spring',
    //     bounce: 0.05,
    //     duration: 0.25,
    //   }}    >
    //    <MorphingDialogTrigger
    //     style={{ borderRadius: '12px' }}
    //     className='flex w-full flex-col overflow-hidden border border-zinc-50/10 bg-zinc-900'
    //     >

    //     {/* <div className='flex grow flex-row items-end justify-between px-1 py-1'></div> */}
    //       <div className='h-[200px]'>
          
    //             <MorphingDialogTitle className=''>
    //                 <div className="terminal-window">
    //                   <div className="title-bar">
    //                     <div className="dot" style={{ background: '#ff5f56' }} />
    //                     <div className="dot" style={{ background: '#ffbd2e' }} />
    //                     <div className="dot" style={{ background: '#27c93f' }} />
    //                   </div>
    //                   <div className="content-box">
    //                       user@chat-bot:~$ Type Something...
    //                   </div>
    //                 </div>
    //             </MorphingDialogTitle>     
    //       </div>
      
        
    //   </MorphingDialogTrigger>
    //   <MorphingDialogContainer>
    //     <MorphingDialogContent
    //       style={{
    //         borderRadius: '24px',
    //       }}
    //       className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10  dark:border-zinc-50/10 bg-zinc-900 sm:w-[500px]'
    //     >
    
    //     {/* <Terminal name="Chat Bot" colorMode={ColorMode.Dark} >
    //         <TerminalOutput>
    //           <TerminalInput/>
    //         </TerminalOutput>
    //     </Terminal> */}
               
            
            
            
          
    //       <MorphingDialogClose className='text-zinc-50' />
    //     </MorphingDialogContent>
    //   </MorphingDialogContainer>
    // </MorphingDialog>
  );
}
