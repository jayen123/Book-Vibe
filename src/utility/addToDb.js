const getReadList = () => {
  const storedReadList = localStorage.getItem("read-list");
  if (storedReadList) {
    return JSON.parse(storedReadList);
  }
  return [];
};

const getWishlist = () => {
  const storedWishlist = localStorage.getItem("wishlist");
  if (storedWishlist) {
    return JSON.parse(storedWishlist);
  }
  return [];
};

const addWishlist = (id) => {
  const storedWishlist = getWishlist();
  if (storedWishlist.includes(id)) {
    console.log("Book already in wishlist");
    return;
  }
  storedWishlist.push(id);
  const storedWishlistStr = JSON.stringify(storedWishlist);
  localStorage.setItem("wishlist", storedWishlistStr);
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

export { addReadList, addWishlist, getReadList, getWishlist };
