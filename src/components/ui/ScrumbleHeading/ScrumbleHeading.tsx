import React from 'react'
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { TextScramble } from '../../../../components/motion-primitives/text-scramble';

const ScrumbleHeading = ({text}:{text:string}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref}>
            <TextScramble className='text-sm uppercase glowTitle' as='h2' duration={1} trigger={isInView}>
                {text}
            </TextScramble>
        </div>
    )
}

export default ScrumbleHeading