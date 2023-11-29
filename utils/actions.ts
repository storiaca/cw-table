"use server";
import { revalidatePath } from "next/cache";
import db from "./db";

export const newRole = async (formData) => {
  const roles = await db.roles.create({
    data: {
      roleName: formData.get("roleName"),
      description: formData.get("description"),
    },
  });

  revalidatePath("/roles");
};
