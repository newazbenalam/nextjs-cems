"use server";

import db from '@/app/_lib/db.js';

export const GetUsers = async () => {
  try {

    const users = await db.Users.findMany();
    return users;

  } catch (error) {
    console.error("GetUsers", error);
    return [];
  }
}

export const GetUser = async (id) => {
  try {

    const user = await db.Users.findUnique({
      where: { id: parseInt(id) }
    });
    return user;

  } catch (error) {
    console.error("GetUser", error);
    return {};
  }
}

export const CreateUser = async (data) => {
  try {
    const user = await db.Users.create({
      data: data
    });
    return user;
  } catch (error) {
    console.error("CreateUser Error:", error.message || error);

    // Check for a unique constraint violation error
    if (error.code === 'P2002' && error.meta && error.meta.target === 'Users_email_key') {
      return { error: "This email is already in use. Please try another one." };
    }

    // Return a generic error message if it's a different error
    return { error: error.message || "An error occurred while creating the user" };
  }
}



export const UpdateUser = async (id, data) => {
  try {

    const user = await db.Users.update({
      where: { id: parseInt(id) },
      data: data
    });
    return user;

  } catch (error) {
    console.error("UpdateUser", error);
    return {};
  }
}

export const DeleteUser = async (id) => {
  try {

    const user = await db.Users.delete({
      where: { id: parseInt(id) }
    });
    return user;

  } catch (error) {
    console.error("DeleteUser", error);
    return {};
  }
}

export const findUserBasic = async (email, pass) => {
// handle the error if the user is not found
  try {
    const user = await db.Users.findFirst({
      where: {
        email: email,
        password: pass
      }
    });
    return user;
  } catch (error) {
    console.error("findUserBasic", error);
    return error;
  }
}
