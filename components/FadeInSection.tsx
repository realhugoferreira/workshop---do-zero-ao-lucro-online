import React, { useState, useRef, useEffect, ReactNode } from 'react';

// Custom Hook: useInView para detetar quando um elemento está visível
const useInView = (options?: IntersectionObserverInit) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Ativa a animação apenas uma vez quando o elemento entra no ecrã
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.unobserve(entry.target); // Para de observar após a animação
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return [ref, isInView] as const;
};

// Componente Wrapper para a animação
interface FadeInSectionProps {
    children: ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
    const [ref, isInView] = useInView({
        threshold: 0.1, // Ativar quando 10% do elemento estiver visível
    });

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out transform ${
                isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
            }`}
        >
            {children}
        </div>
    );
};

export default FadeInSection;