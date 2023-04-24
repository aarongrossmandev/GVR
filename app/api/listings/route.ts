import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    category,
    location,
    guestCount,
    roomCount,
    bedCount,
    bathroomCount,
    imageSrc,
    multipleImagesOne,
    multipleImagesTwo,
    multipleImagesThree,
    multipleImagesFour,
    amenities,
    standoutAmenities,
    price,
    title,
    description,
  } = body;

  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      category,
      imageSrc,
      multipleImagesOne,
      multipleImagesTwo,
      multipleImagesThree,
      multipleImagesFour,
      amenities,
      standoutAmenities,
      bedCount,
      bathroomCount,
      roomCount,
      guestCount,
      locationValue: location.value,
      price: parseInt(price, 10),
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
