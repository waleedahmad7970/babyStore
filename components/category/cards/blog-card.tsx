"use client";
import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  date: string;
  comments: number;
  title: string;
  description: string;
  authorName: string;
  authorImage: string;
};

export default function BabySwingCard({
  image,
  date,
  comments,
  title,
  description,
  authorName,
  authorImage,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full object-cover"
      />

      <div className="bg-black p-6 text-white">
        <div className="mb-4 flex items-center gap-4 text-sm opacity-70">
          <div className="flex items-center gap-1">
            calender
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            mess
            <span>{comments} COMMENTS</span>
          </div>
        </div>

        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-gray-300">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={authorImage}
              alt={authorName}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm text-white">{authorName}</span>
          </div>

          <button className="rounded-md bg-green-500 px-4 py-2 text-sm text-white hover:bg-green-600">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
