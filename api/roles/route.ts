import { NextResponse } from "next/server";
import db from "@/utils/db";

export const GET = async (request: Request) => {
  const roles = await db.roles.findMany({});
  return NextResponse.json({ data: roles });
};
