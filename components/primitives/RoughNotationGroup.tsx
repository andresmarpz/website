import {
    createContext,
    PropsWithChildren,
    useEffect,
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
    const [state] = useState<RoughAnnotation[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (!mounted) setMounted(true);

        if (mounted) {
            let timeout = 0;
            state.forEach((annotation) => {
                setTimeout(() => {
                    annotation.show();
                }, timeout);
                timeout += annotation.animationDuration ?? 800;
            });
        }

		return () => {
			state.forEach(annotation => annotation.remove())
		}
    }, [mounted, state]);

    return (
        <NotationContext.Provider value={{ annotations: state }}>
            {children}
        </NotationContext.Provider>
    );
};

export default RoughNotationGroup;
