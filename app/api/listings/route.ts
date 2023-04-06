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
    // multipleImageSrc,
    amenities,
    standoutAmenities,
    price,
    title,
    description,
  } = body;

  // Object.keys(body).forEach((value: any) => {
  //   if (!body[value]) {
  //     NextResponse.error();
  //   }
  // });

  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      category,
      imageSrc,
      // multipleImageSrc,
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
