import { NextResponse } from "next/server";
import { auth } from "@/lib/auth/auth";

export async function GET() {
  try {
    const session = await auth();
    if (session) {
      return NextResponse.json({ user: session.user });
    } else {
      return NextResponse.json({ user: null }, { status: 401 });
    }
  } catch (error) {
    console.error("Error in fetching session:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
