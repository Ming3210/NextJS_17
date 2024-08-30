"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import React from "react";
import Breadcrumbs from "../../page";

// Giả sử bạn có một danh sách bài viết ở đây để demo

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

export default function PostPage() {
  const params: any = useParams();
  console.log(params);

  // Find the post based on ID from the URL search parameter
  const post = posts.find((post) => post.id === parseInt(params.id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <Breadcrumbs></Breadcrumbs>

      <p>This is the content of the post with id: {post.id}</p>
    </div>
  );
}
