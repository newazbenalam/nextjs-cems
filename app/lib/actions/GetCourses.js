"use server";

import db from '@/app/lib/db.js';

export const GetCourses = async () => {
  try {

    const courses = await db.Courses.findMany();
    return courses;

  } catch (error) {
    console.error("GetCourses", error);
    return [];
  }
}
