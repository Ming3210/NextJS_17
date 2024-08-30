import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import Breadcrumbs from "../page";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Danh sách bài viết ¯\\_( ͡❛ ͜ʖ ͡❛)_/¯",
  description: "¯_( ͡❛ ͜ʖ ͡❛)_/¯",
};

const posts = [
  {
    id: 1,
    title: "Zxc vbnm1 234567890q wertyuiop fghjkl",
    thumbnailUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8kvHovDS1QVGcElQcLKBNYVuNlNT92gfGfSBfru4WcsVhmg1g",
  },
  {
    id: 2,
    title: "Zxc vbnm1 234567890q wertyuiop fghjkl",
    thumbnailUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8kvHovDS1QVGcElQcLKBNYVuNlNT92gfGfSBfru4WcsVhmg1g",
  },
  {
    id: 3,
    title: "Zxc vbnm1 234567890q wertyuiop fghjkl",
    thumbnailUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8kvHovDS1QVGcElQcLKBNYVuNlNT92gfGfSBfru4WcsVhmg1g",
  },
  {
    id: 4,
    title: "Zxc vbnm1 234567890q wertyuiop fghjkl",
    thumbnailUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8kvHovDS1QVGcElQcLKBNYVuNlNT92gfGfSBfru4WcsVhmg1g",
  },
  {
    id: 5,
    title: "Zxc vbnm1 234567890q wertyuiop fghjkl",
    thumbnailUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8kvHovDS1QVGcElQcLKBNYVuNlNT92gfGfSBfru4WcsVhmg1g",
  },
  {
    id: 6,
    title: "Zxc vbnm1 234567890q wertyuiop fghjkl",
    thumbnailUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8kvHovDS1QVGcElQcLKBNYVuNlNT92gfGfSBfru4WcsVhmg1g",
  },
];

export default function page() {
  return (
    <div>
      <Breadcrumbs></Breadcrumbs>
      <h1>Posts page</h1>
      <div className="flex w-[500px] justify-between flex-wrap">
        {posts.map((post) => (
          <div className="mb-4" key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <Image
                width={150}
                height={150}
                src={post.thumbnailUrl}
                alt={post.title}
              />
              <p className="w-[150px] h-[100px] font-bold p-2 border-2">
                {post.title}
              </p>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
