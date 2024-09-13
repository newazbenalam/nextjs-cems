"use server";

// CRUD for Services

import db from '@/app/_lib/db.js';

export const GetServices = async () => {
  try {

    const courses = await db.Services.findMany(
      {
        include: {
          images: true,
        }
      }
    );
    return courses;

  } catch (error) {
    console.error("GetServices", error);
    return [];
  }
}

export const GetSingleService = async (id) => {
  try {

    const courses = await db.Services.findUnique({
      where: {
        id: id
      },
      include: {
        images: true,
      }
    });
    return courses;

  } catch (error) {
    console.error("GetServices", error);
    return [];
  }
}

export const CreateService = async (data) => {
  try {

    const course = await db.Services.create({
      data: data
    });
    return course;

  } catch (error) {
    console.error("CreateService", error);
    return [];
  }
}


export const UpdateService = async (id, data) => {
  try {

    const course = await db.Services.update({
      where: {
        id: id
      },
      data: data
    });
    return course;

  } catch (error) {
    console.error("UpdateService", error);
    return [];
  }
}


export const DeleteService = async (id) => {
  try {

    const course = await db.Services.delete({
      where: {
        id: id
      }
    });
    return course;

  } catch (error) {
    console.error("DeleteService", error);
    return [];
  }
}