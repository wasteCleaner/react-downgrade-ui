Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var DowngradeUIContext = React.createContext(false);
var useDowngradeUI = function () { return React.useContext(DowngradeUIContext); };
var DowngradeUIProvider = function (_a) {
    var children = _a.children, _b = _a.percentage, percentage = _b === void 0 ? 50 : _b;
    var _c = React.useState(0), delay = _c[0], setDelay = _c[1];
    React.useEffect(function () {
        var timer = null;
        var checkDelay = function () {
            var startTime = Number(new Date());
            timer = setTimeout(function () {
                console.log(Number(new Date()) - startTime - 1000);
                setDelay(Number(new Date()) - startTime - 1000);
                checkDelay();
            }, 1000);
        };
        checkDelay();
        return function () {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, []);
    return (React.createElement(DowngradeUIContext.Provider, { value: (delay / 1000 * 100) > percentage }, children));
};

exports.DowngradeUIContext = DowngradeUIContext;
exports.DowngradeUIProvider = DowngradeUIProvider;
exports.useDowngradeUI = useDowngradeUI;
//# sourceMappingURL=index.js.map
