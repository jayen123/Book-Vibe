const getReadList = () => {
  const storedReadList = localStorage.getItem("read-list");
  if (storedReadList) {
    return JSON.parse(storedReadList);
  }
  return [];
};

const addReadList = (id) => {
  const storedReadList = getReadList();
  if (storedReadList.includes(id)) {
    console.log("Book already in read list");
    return;
  }
  storedReadList.push(id);
  const storedReadListStr = JSON.stringify(storedReadList);
  localStorage.setItem("read-list", storedReadListStr);
};

export { addReadList };
