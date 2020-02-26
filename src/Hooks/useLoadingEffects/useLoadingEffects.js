import { useEffect, useLayoutEffect, useRef } from "react";
import "./useLoadingEffects.css";

const useLoadingEffect = type => {
	const element = useRef(null);

	useLayoutEffect(() => {
		element.current.classList.add("transition");
		element.current.classList.add(type);
	}, [element, type]);

	useEffect(() => {
		element.current.classList.remove(type);
	}, [element, type]);

	return element;
};

export default useLoadingEffect;
