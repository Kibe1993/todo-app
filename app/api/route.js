import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(request) {
  const todos = await TodoModel.find({});
  return NextResponse.json({ todos: todos });
}

export async function POST(request) {
  const { title, description, date } = await request.json();

  await TodoModel.create({
    title,
    description,
    date,
  });

  return NextResponse.json({ msg: "Todo Created" });
}
export async function DELETE(request) {
  const mongoId = await request.nextUrl.searchParams.get("mongoId");
  await TodoModel.findByIdAndDelete(mongoId);

  return NextResponse.json({ msg: "Todo Created" });
}
export async function PUT(request) {
  const mongoId = request.nextUrl.searchParams.get("mongoId");

  await TodoModel.findByIdAndUpdate(mongoId, {
    $set: {
      isCompleted: true,
    },
  });

  return NextResponse.json({ msg: "Todo updated" });
}
