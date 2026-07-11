import { NextResponse } from "next/server";
import { sql } from "@/app/lib/db";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { phone, otp } = body;

    if (!phone || !otp) {

      return NextResponse.json({
        success: false,
      });

    }

    await sql`

      UPDATE users

      SET otp=${otp}

      WHERE phone=${phone}

    `;

    return NextResponse.json({

      success: true,

    });

  } catch (err) {

    console.log(err);

    return NextResponse.json({

      success: false,

    });

  }

}