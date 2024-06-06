import classNames from "classnames";
import { forwardRef, useCallback } from "react"

type Props = {
    placeholder: string
}
export const Input =  forwardRef<HTMLInputElement, Props>(
    ({ placeholder, ...rest }:  Readonly<Props>, ref) => {
        return (
            <input 
                    ref={ref}
                    type="text"
                    placeholder={placeholder}
                    className="outline-none shadow-lg border border-gray-100 rounded-lg w-full p-3 mt-3 my-1"
                    {...rest}
                />
        );
    }
);