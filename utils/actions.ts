"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import db from "./db";

export const newRole = async (formData) => {
  const roles = await db.roles.create({
    data: {
      roleName: formData.get("roleName"),
      description: formData.get("description"),
    },
  });
  if (roles) {
    setTimeout(() => {
      redirect("/roles");
    }, 2000);
  }
  revalidatePath("/roles");
};

export const newUser = async (formData) => {
  const users = await db.users.create({
    data: {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      roleName: formData.get("roleName"),
    },
  });

  // if (users) {
  //   setTimeout(() => {
  //     redirect("/users");
  //   }, 2000);
  // }
  if (users) {
    redirect("/users");
  }
  revalidatePath("/users");
};
