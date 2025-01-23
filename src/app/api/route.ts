import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {

    const listMembers = [
        { studentId: "66024xxx", name: "TestAAACS" },
        { studentId: "66024xxx", name: "TestCCC" },
        { studentId: "66024xxx", name: "TestBBB" }
    ];

    return NextResponse.json({ message: "GET Group Member Success", data: listMembers });

}