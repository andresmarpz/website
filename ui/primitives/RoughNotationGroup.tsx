import useStore from '@/lib/store';
import {
    createContext,
    PropsWithChildren,
    useEffect,
    useRef,
    useState
} from 'react';
import { RoughAnnotation } from 'rough-notation/lib/model';

interface Context {
    annotations: RoughAnnotation[];
}
export const NotationContext = createContext<Context>({
    annotations: []
});

// @refresh reset
const RoughNotationGroup: React.FC<PropsWithChildren> = ({ children }) => {
	const setAlreadyAnimated = useStore(state => state.setAlreadyAnimated);
	// we want to keep this as a const, not a state, so that it doesn't trigger a re-render
	// it's only useful to know if we should animate the annotations on mount or not (page transitions)
	const alreadyAnimated = useRef(useStore.getState().alreadyAnimated);
    const [state] = useState<RoughAnnotation[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
		if (!mounted) setMounted(true);

		let timer: NodeJS.Timeout | undefined = undefined;
        if (mounted && state) {
			let timeout = 0;
			state.forEach(annotation => {
				timeout += annotation.animationDuration ?? 800;
				
				// show animation if it's the first time we're rendering the page
				// if coming back from another page, don't animate and show the annotations immediately
				if(alreadyAnimated.current)
					annotation.animate = false;
				
				alreadyAnimated.current ? annotation.show() : setTimeout(() => annotation.show(), timeout);
			})

			if(!alreadyAnimated.current)
				timer = setTimeout(() => {
					setAlreadyAnimated(true);
				}, timeout)
        }

		return () => {
			clearTimeout(timer);
		}
    }, [mounted, state, setAlreadyAnimated]);

    return (
        <NotationContext.Provider value={{ annotations: state }}>
            {children}
        </NotationContext.Provider>
    );
};

export default RoughNotationGroup;
