import Utils from './utils';

const flashStoreKey = "flash.messages";

class Flash {
  constructor(message, type) {
    if (type === undefined) {
      type = "alert";
    }

    let utils = new Utils();
    let messages = utils.store(flashStoreKey) || [];

    utils.store(flashStoreKey, messages.push(message));
  }
}

Flash.messages = () => {
  return utils.store(flashStoreKey) || [];
};

export default Flash;
