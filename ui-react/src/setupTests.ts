// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const MOCK_ELECTRON = {
    ipcRenderer: {
        invoke: () => {},
        send: () => {}
    }
};

// @ts-ignore
window.require = (name: string) => {
    if (name === 'electron') {
        return MOCK_ELECTRON;
    } else {
        throw new Error(`No mock for module ${name}`);
    }
};