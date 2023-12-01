"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import db from "./db";

export const newRole = async (formData: FormData) => {
  const roles = await db.roles.create({
    data: {
      roleName: formData.get("roleName") as string,
      description: formData.get("description") as string,
    },
  });

  if (roles) {
    redirect("/roles");
  }
  revalidatePath("/roles");
};

export const newUser = async (formData: FormData) => {
  const users = await db.users.create({
    data: {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      roleName: formData.get("roleName") as string,
    },
  });

  if (users) {
    redirect("/users");
  }
  revalidatePath("/users");
};

export const updateRole = async (
  id: string,
  name: string,
  description: string
) => {
  const roles = await db.roles.update({
    where: {
      id: id,
    },
    data: {
      roleName: name,
      description: description,
    },
  });
  if (roles) {
    redirect("/roles");
  }
  revalidatePath("/roles");
};

export const updateUser = async (
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  roleName: string
) => {
  const roles = await db.users.update({
    where: {
      id: id,
    },
    data: {
      firstName,
      lastName,
      email,
      roleName,
    },
  });
  if (roles) {
    redirect("/users");
  }
  revalidatePath("/users");
};
