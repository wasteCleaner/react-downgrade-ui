import * as React from 'react';

export const DowngradeUIContext = React.createContext(false);

export const useDowngradeUI = () => React.useContext(DowngradeUIContext);

type DowngradeUIProviderProps = {
    children: React.ReactNode;
    percentage?: number;
};

export const DowngradeUIProvider = ({ children, percentage = 50 }: DowngradeUIProviderProps) => {
    const [delay, setDelay] = React.useState<number>(0);

    React.useEffect(() => {
        let timer: number | null = 'abc';
        const checkDelay = () => {
            const startTime = Number(new Date());
            timer = setTimeout(() => {
                setDelay(Number(new Date()) - startTime - 1000);
                checkDelay();
            }, 1000);
        };

        checkDelay();
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, []);

    return (
        <DowngradeUIContext.Provider value={(delay / 1000 * 100) > percentage}>
            {children}
        </DowngradeUIContext.Provider>
    );
};
