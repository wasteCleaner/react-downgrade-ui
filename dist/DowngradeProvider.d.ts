import * as React from 'react';
export declare const DowngradeUIContext: React.Context<boolean>;
export declare const useDowngradeUI: () => boolean;
declare type DowngradeUIProviderProps = {
    children: React.ReactNode;
    percentage?: number;
};
export declare const DowngradeUIProvider: ({ children, percentage }: DowngradeUIProviderProps) => JSX.Element;
export {};
