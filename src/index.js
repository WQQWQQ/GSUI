import 'babel-polyfill';
import './utils/iview-shim';
import promise from 'es6-promise';
promise.polyfill();

import GsTable from './components/gs-table';
import GsMenu from './components/gs-menu';
import GsTabs from './components/gs-tabs';
import GsModal from './components/gs-modal';
import GsInput from './components/gs-input';
import GsPage from './components/gs-page';
import GsSelect from './components/gs-select';
import GsButton from './components/gs-button';
import GsCheckbox from './components/gs-checkbox';
import GsCalendar from './components/gs-calendar';

const components = {
    GsTable,
    GsTabs,
    GsMenu,
    GsModal,
    GsPage,
    GsInput,
    GsButton,
    GsCheckbox,
    GsCalendar,
    GsSelect
};

const install = function(Vue, opts = {}) {
    if (install.installed) return;
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });
    Vue.prototype.$GsModal = GsModal;
    Vue.prototype.$GsTable = GsTable;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: process.env.VERSION,
    install,
    ...components
};

export default API;
