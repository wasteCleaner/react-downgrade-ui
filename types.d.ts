import * as React from "react";


declare type useDowngradeUI = () => () => boolean;

type DowngradeUIProviderProps = {
    children: React.ReactNode;
    percentage?: number;
};

declare type DowngradeUIProvider = React.FC<DowngradeUIProviderProps>;
