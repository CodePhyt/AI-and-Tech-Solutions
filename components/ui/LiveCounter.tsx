'use client';

import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LiveCounterProps {
    target: number;
    duration?: number; // in seconds
    prefix?: string;
    suffix?: string;
    className?: string;
}

export default function LiveCounter({
    target,
    duration = 2,
    prefix = '',
    suffix = '',
    className = '',
}: LiveCounterProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(0);

    // duration is accepted as a prop for API compatibility
    void duration;

    useEffect(() => {
        count.set(target);

        const unsubscribe = rounded.on('change', (latest) => {
            setDisplayValue(latest);
        });

        return () => {
            unsubscribe();
        };
    }, [target, count, rounded]);

    return (
        <span className={className}>
            {prefix}{displayValue.toLocaleString()}{suffix}
        </span>
    );
}

// Animated counter with spring physics
interface SpringCounterProps {
    value: number;
    format?: (value: number) => string;
}

export function SpringCounter({ value, format = (v) => v.toString() }: SpringCounterProps) {
    const spring = useSpring(0, { stiffness: 100, damping: 30 });
    const [displayValue, setDisplayValue] = useState('0');

    useEffect(() => {
        spring.set(value);

        const unsubscribe = spring.on('change', (latest) => {
            setDisplayValue(format(Math.round(latest)));
        });

        return () => unsubscribe();
    }, [value, spring, format]);

    return <span>{displayValue}</span>;
}
