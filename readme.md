# react-downgrade-ui
Is a library which help you to downgrade your application when client has performance issue.

## Possible reasons of performance issues
* powerless or old device (for example iphone 4)
* other background processes on client's machine
* the huge amount of animation, calculations and re-renderings in your application

## What should we do after detecting the issue?
* we can turn off animation or, at least decrese the amount of animations
* turn off background video, or switch video quality to cheaper
* increase gaps between updating data on graphs, tables, etc.

## How to use the library?
To install the library please run:
 
 ```npm i react-downgrade-ui -S```
 
Then you will be able to use:
* useDowngradeUI - is a function which returns boolean (if true - client has a performance issue)
* DowngradeUIProvider - is a provider which you need to wrap your application to have access to `useDowngradeUI`

## Example of usage
```jsx
import * as React from 'react';
import { DowngradeUIProvider, useDowngradeUI } from 'react-downgrade-ui';

const TestComponent = () => {
    const shouldDowngrade = useDowngradeUI();
    console.log(shouldDowngrade);
    return <h1>Hello world</h1>;
}

export const App = () => {
    return (
        <DowngradeUIProvider percentage={50}>
            <TestComponent />
        </DowngradeUIProvider>
    );
}
```

## The idea
How the library detects that client has a performance issue?

The idea is to measure how event loop is loaded now. If the queue is overloaded - application works incorrect,
 with lags and the client will be dissatisfied using our application.
 
How to detect that queue is overloaded?
It is easy. If we save current time, then run setTimeout for 1000 ms and compare
difference between current time and time we saved before. The difference in normal case should be around 1000,
but if it is more 1500 (+50%) it seems like queue is overloaded.

And this detecting is exactly what this library do for you.