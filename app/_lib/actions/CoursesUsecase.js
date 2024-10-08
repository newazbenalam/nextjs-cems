"use server";

// CRUD for Courses

import db from '@/app/_lib/db.js';

export const GetCourses = async () => {
  try {

    const courses = await db.Courses.findMany(
      {
        include: {
          category: true,
          instructor: true
        }
      }
    );
    return courses;

  } catch (error) {
    console.error("GetCourses", error);
    return [];
  }
}

export const GetSingleCourse = async (id) => {
  try {

    const courses = await db.Courses.findUnique({
      where: {
        id: id
      },
      include: {
        category: true,
        instructor: true
      }
    });
    return courses;

  } catch (error) {
    console.error("GetCourses", error);
    return [];
  }
}

export const CreateCourse = async (data) => {
  try {

    const course = await db.Courses.create({
      data: data
    });
    return course;

  } catch (error) {
    console.error("CreateCourse", error);
    return [];
  }
}

export const UpdateCourse = async (id, data) => {
  try {

    const course = await db.Courses.update({
      where: {
        id: id
      },
      data: data
    });
    return course;

  } catch (error) {
    console.error("UpdateCourse", error);
    return [];
  }
}


export const deleteCourse = async (id) => {
  try {

    const course = await db.Courses.delete({
      where: {
        id: id
      }
    });
    return course;

  } catch (error) {
    console.error("DeleteCourse", error);
    return [];
  }
}


