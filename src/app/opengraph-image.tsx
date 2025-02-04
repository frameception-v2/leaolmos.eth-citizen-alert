import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = PROJECT_TITLE;
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-[#1a365d]">
        <div tw="flex flex-col items-center p-8 border-4 border-white rounded-lg">
          <h1 tw="text-6xl text-center text-white font-bold mb-4">{PROJECT_TITLE}</h1>
          <h3 tw="text-3xl text-center text-gray-200">{PROJECT_DESCRIPTION}</h3>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
