import Cookies from "js-cookie";
const url = import.meta.env.VITE_API_URL;

export const getUserId = () => {
  return Cookies.get("userId");
};

export const getUsername = () => {
  return Cookies.get("username");
};

export const submitLogin = async (username, password) => {
  const payload = { username, password };

  const req = await fetch(`${url}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await req.json();
  if (!data.error) {
    Cookies.set("username", username);
  }
  return data;
}; // login to url/auth/login

export const submitSignUp = async (
  first_name,
  last_name,
  username,
  password,
  passwordVerify,
) => {
  if (!first_name) return { error: "Enter your first name" };
  if (!last_name) return { error: "Enter your last name" };
  if (!username) return { error: "Enter a username" };
  if (!password) return { error: "Enter a password" };
  if (!passwordVerify) return { error: "Verify your password!" };
  if (password !== passwordVerify) return { error: "Passwords do not match" };

  const payload = { first_name, last_name, username, password };

  const req = await fetch(`${url}/auth/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await req.json();
  if (!data.error) {
    Cookies.set("username", username);
  }

  return data;
}; // signup to url/auth/signup

export const editItem = async (itemId, item_name, description, quantity) => {
  if (!itemId) return { error: "Item ID is REQUIRED" };

  if (!item_name && !description && !quantity) {
    return { error: "Edit at least 1 field" };
  }

  const payload = { itemId, item_name, description, quantity };

  const req = await fetch(`${url}/items/${itemId}`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await req.json();
  return data;
}; // send PATCH to url/items/:itemId

export const deleteItem = async (itemId) => {
  if (!itemId) return { error: "Item ID is REQUIRED" };

  const payload = { itemId };

  const req = await fetch(`${url}/items/${itemId}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await req.json();

  return data;
}; // send DELETE to url/items/:itemId

export const submitNewItem = async (
  user_id,
  item_name,
  description,
  quantity,
) => {
  if (!user_id) {
    return { error: "User ID is REQUIRED" };
  }

  if (
    (!item_name && !description && !quantity) ||
    (item_name === "" || description === "")
  ) {
    return { error: "All fields required" };
  }

  const payload = { user_id, item_name, description, quantity };
  const res = await fetch(`${url}/items/new`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  return data.data;
}; // send POST to url/items/new
