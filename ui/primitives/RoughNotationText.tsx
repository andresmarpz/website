import { PropsWithChildren, useContext, useEffect, useRef, useState } from "react";
import { annotate } from "rough-notation";
import { RoughAnnotation, RoughAnnotationConfig } from "rough-notation/lib/model";
import { NotationContext } from "./RoughNotationGroup";

// @refresh reset
const RoughNotationText: React.FC<{
	config?: RoughAnnotationConfig
} & PropsWithChildren> = ({ children, config = {
	type: 'highlight',
	multiline: true,
	padding: 8
} }) => {
	const [mounted, setMounted] = useState(false)
	const context = useContext(NotationContext);
	const element = useRef<HTMLSpanElement>(null);
	const annotationRef = useRef<RoughAnnotation>();

	useEffect(() => {
		if(!mounted) setMounted(true);

		if(mounted && element.current){
			annotationRef.current = annotate(element.current, {
				multiline: config.multiline ?? true,
				...config
			});
			context.annotations.push(annotationRef.current);
		}
	}, [mounted, config, context])

	return <span ref={element}>{' '}{children}</span>
}

export default RoughNotationText