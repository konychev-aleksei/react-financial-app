export const getUserData = (username) => {
  return new Promise((resolve, reject) => {
    try {
      const data = window.localStorage.getItem(username);
      if (!data) {
        window.localStorage.setItem(username, JSON.stringify([]));
        resolve([]);
      }

      resolve(JSON.parse(data));
    } catch (e) {
      reject(e);
    }
  });
};

export const removeRecord = (username, id) => {
  return new Promise((resolve, reject) => {
    try {
      const data = JSON.parse(window.localStorage.getItem(username));
      const newData = data.filter((item) => item.id !== id);
      window.localStorage.setItem(username, JSON.stringify(newData));
      resolve(newData);
    } catch (e) {
      reject(e);
    }
  });
};

export const addRecord = (username, item) => {
  return new Promise((resolve, reject) => {
    try {
      const data = JSON.parse(window.localStorage.getItem(username));
      const getId = () => (data.length > 0 ? data[0].id : 0);

      data.unshift({
        ...item,
        id: getId() + 1,
      });

      window.localStorage.setItem(username, JSON.stringify(data));
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};
