import classNames from "classnames";
import { useCallback } from "react"

type Props = {
    title: string
    className?: string
}
export function Tag({ title, className }:  Readonly<Props> ) {
    const radamColors = useCallback(() => {
        const hue = Math.floor(Math.random() * 360);
        const lightness =  `hsl(${ hue }, 100%, 95%)`;
        const darkness =  `hsl(${ hue }, 100%, 20%)`;
        return { lightness, darkness };
    }, []);
    return (
        <p 
            style={{ 
                backgroundColor: radamColors().lightness,
                color: radamColors().darkness 
            }}
            className={classNames(
                " rounded-full text-center w-fit px-6 py-1",
                className
            )}>
            {title}
        s</p>
    )
}   