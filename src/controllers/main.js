import userController from './user';

const init = function init(vue, firebase) {
  userController.init(vue, firebase);
};

export default {
  init,
};
