import GsModal from './confirm';

let modalInstance;

 // 确认提示
const info = 'info';
// 错误提示
const error = 'error';
// 正确提示
const success = 'success';
// 警告提示
const warn = 'warn';
// 子组件展示
const childComponent = 'childComponent';


function getModalInstance (render = undefined) {
  modalInstance = modalInstance || GsModal.newInstance({
    render: render
  });

  return modalInstance;
}

function confirm (options) {

  const render = ('render' in options) ? options.render : undefined;
  let instance  = getModalInstance(render);

  options.onRemove = function () {
    modalInstance = null;
  };

  instance.show(options);
}

GsModal.info = function (props = {}) {
  props.modalType = info;
  return confirm(props);
};

GsModal.success = function (props = {}) {
  props.modalType = success;
  return confirm(props);
};

GsModal.warn = function (props = {}) {
  props.modalType = warn;
  return confirm(props);
};

GsModal.error = function (props = {}) {
  props.modalType = error;
  return confirm(props);
};

GsModal.childComponent = function (props = {}) {
  props.modalType = childComponent;
  return confirm(props);
};

GsModal.remove = function () {
  if (!modalInstance) {   // at loading status, remove after Cancel
    return false;
  }

  const instance = getModalInstance();

  instance.remove();
};

export default GsModal;
