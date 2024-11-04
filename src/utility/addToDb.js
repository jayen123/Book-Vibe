import { toast } from "react-toastify";

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
    toast.warning("Book already in wishlist");
    return;
  }
  storedWishlist.push(id);
  const storedWishlistStr = JSON.stringify(storedWishlist);
  localStorage.setItem("wishlist", storedWishlistStr);
  toast.success("Book in wishlist");
};

const addReadList = (id) => {
  const storedReadList = getReadList();
  if (storedReadList.includes(id)) {
    toast.warning("Book already in read list");
    return;
  }
  storedReadList.push(id);
  const storedReadListStr = JSON.stringify(storedReadList);
  localStorage.setItem("read-list", storedReadListStr);
  toast.success("Book in read list");
};

export { addReadList, addWishlist, getReadList, getWishlist };
