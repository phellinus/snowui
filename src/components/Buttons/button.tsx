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

export type LineOrigin = 'left' | 'right';
export type LinePosition = 'top' | 'bottom';

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children?: React.ReactNode;
    color?: string;
    textColor?: string;
    href?: string;
    lineOrigin?: LineOrigin;
    linePosition?: LinePosition;
}

const presetColors: Record<string, string> = {
    primary: '#1F74FF',
    success: '#48C939',
    info: '#17a2b8',
    warning: '#FFBA00',
    danger: '#FF4857',
    light: '#f8f9fa',
    dark: '#1E1E1E',
};

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
export const SyButton: FC<ButtonProps> = ({
    className,
    disabled = false,
    size = ButtonSize.Default,
    btnType = ButtonType.Filled,
    children,
    color = 'primary',
    textColor,
    href,
    lineOrigin,
    linePosition,
    ...restProps
}) => {
    // 判断颜色是预设名还是自定义色值
    const baseColor = presetColors[color] || color;

    // 基于类型定义不同的变量
    const styleVars: React.CSSProperties = {
        '--btn-bg': btnType === ButtonType.Border ? '#fff' : baseColor,
        '--btn-border': baseColor,
        '--btn-text': textColor || (btnType === ButtonType.Border || btnType === ButtonType.Line ? baseColor : '#fff'),
        '--btn-hover-bg': btnType === ButtonType.Border ? baseColor : baseColor,
        '--btn-hover-text': btnType === ButtonType.Border || btnType === ButtonType.Line ? '#fff' : '#fff',
    } as React.CSSProperties;
    const classes = classNames('btn', className, {
        [`btn-${size}`]: size,
        [`btn-${btnType}`]: btnType,
        disabled: btnType == ButtonType.Link && disabled,
        [`line-origin-${lineOrigin}`]: lineOrigin,
        [`line-position-${linePosition}`]: linePosition,
    });
    if (btnType == ButtonType.Link && href) {
        return (
            <a className={classes} href={href} style={styleVars} {...restProps}>
                {children}
            </a>
        );
    }
    return (
        <>
            <button className={classes} disabled={disabled} style={styleVars} {...restProps}>
                {children}
            </button>
        </>
    );
};
