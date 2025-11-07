import React from 'react';
export var GraphinContext = React.createContext({
    graph: null,
    isReady: false,
});
export var useGraphin = function () {
    var context = React.useContext(GraphinContext);
    if (context === undefined || Object.keys(context).length === 0) {
        throw new Error('useGraphin must be used within a GraphinProvider.');
    }
    return context;
};
