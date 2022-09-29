import Box from '@/ui/Box';
import { keyframes, styled } from '@/stitches.config';
import Image from 'next/image';
import { useState } from 'react';

interface Image {
    src: string;
    width: number;
    height: number;
    base64: string;
}

const blur = keyframes({
    '0%': {
        filter: 'blur(40px)',
        opacity: 0
    },
    '100%': {
        filter: 'blur(0px)',
        opacity: 1
    }
});

const StyledImage = styled(Image, {
    transition: '250ms ease-in-out',
    transitionProperty: 'filter transform opacity',
    variants: {
        blur: {
            true: {
                animation: `${blur} 250ms ease-in-out`
            }
        }
    },
    defaultVariants: {
        blur: false
    }
});

const BlurImage = ({
    src,
    width,
    height,
    base64,
    shouldBlur,
    setDidBlur
}: Image & { shouldBlur: boolean; setDidBlur: (didBlur: boolean) => void }) => {
    const [loading, setLoading] = useState(true);

    return (
        <Box
            css={{
                position: 'relative',
                width: width,
                height: height,
                borderRadius: 10,
                overflow: 'hidden'
            }}>
            <StyledImage
                // /*
				// 	transforms src url from '/assets/previews/https:@@nextjs.org@.png'
				// 	to 'nextjs.org'. alt then becomes a little more accessible.
				// */
                // alt={`Visual preview of the website with url ${src
                //     .substring(25)
                //     .slice(0, -5)
                //     .replaceAll('@', '/')}`}
                src={src}
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                blurDataURL={base64}
                priority={true}
                blur={!shouldBlur && loading}
                onLoadingComplete={() => {
                    setLoading(false);
                    setDidBlur(true);
                }}
            />
        </Box>
    );
};

export default BlurImage;
