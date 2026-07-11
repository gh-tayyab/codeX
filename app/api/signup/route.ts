import { NextResponse } from "next/server";
import { sql } from "@/app/lib/db";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { phone } = body;

    if (!phone) {

      return NextResponse.json({
        success: false,
      });

    }

    await sql`

      INSERT INTO users(phone)

      VALUES(${phone})

    `;

    return NextResponse.json({

      success: true,

    });

  } catch (error) {

    console.log(error);

    return NextResponse.json({

      success: false,

    });

  }

}