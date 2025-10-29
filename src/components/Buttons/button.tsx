import React, { type FC } from 'react';
import classNames from 'classnames';

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm',
    Default = 'default',
}

export enum ButtonType {
    Filled = 'filled',
    Link = 'link',
    Border = 'border',
    Flat = 'flat',
    Line = 'line',
    Gradient = 'gradient',
    Relief = 'relief',
}

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children?: React.ReactNode;
    color?: string;
    textColor?: string;
    href?: string;
}

export const SyButton: FC<BaseButtonProps> = ({
    className,
    disabled = false,
    size = ButtonSize.Default,
    btnType = ButtonType.Filled,
    children,
    color,
    textColor,
    href,
}) => {
    const classes = classNames('btn', {
        [`btn-${size}`]: size,
        [`btn-${btnType}`]: btnType,
        [`btn-color-${color}`]: color,
        disabled: btnType == ButtonType.Link && disabled,
    });
    if (btnType == ButtonType.Link && href) {
        return (
            <a className={classes} href={href}>
                {children}
            </a>
        );
    }
    return (
        <>
            <button
                className={classes}
                disabled={disabled}
                style={{ color: textColor, backgroundColor: color, borderColor: color }}
            >
                {children}
            </button>
        </>
    );
};
