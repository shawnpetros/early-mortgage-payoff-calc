export const validateFields = (obj) => {
  let arr = Object.keys(obj);
  let len = arr.length;

  while (len--) {
    if (isNaN(parseInt(obj[arr[len]], 10)) || parseInt(obj[arr[len]], 10) === '') {
      console.log(`${arr[len]} has value ${obj[arr[len]]}, which is invalid`);
      return false;
    }
  }

  return true;
};
