"use client";
import { FC } from "react";
import Modal from "./Modal";
import useRentModal from "@/app/hooks/useRentModal";
import { useState, useMemo } from "react";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import CountrySelect from "../inputs/CountrySelect";
import dynamic from "next/dynamic";
import Counter from "../inputs/Counter";
import AmenitiesInput from "../inputs/AmenitiesInput";
import StandoutAmenitiesInput from "../inputs/StandoutAmenitiesInput";
import CoverImageUpload from "../inputs/CoverImageUpload";
import ImagesUpload from "../inputs/ImagesUpload";
import Input from "../inputs/Input";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { amenitiesItems } from "@/app/constants/amenitiesItems";
import { standoutAmenitiesItems } from "@/app/constants/standoutAmenitiesItems copy";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  AMENITIES = 3,
  STANDOUTAMENITIES = 4,
  COVERIMAGE = 5,
  // IMAGES = 6,
  DESCRIPTION = 6,
  PRICE = 7,
}

const RentModal: FC = ({}) => {
  const router = useRouter();
  const rentModal = useRentModal();

  const [step, setStep] = useState(STEPS.CATEGORY);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bedCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      // multipleImageSrc: [],
      amenities: [],
      standoutAmenities: [],
      price: 1,
      title: "",
      description: "",
    },
  });

  const category = watch("category");
  const location = watch("location");
  const guestCount = watch("guestCount");
  const roomCount = watch("roomCount");
  const bedCount = watch("bedCount");
  const bathroomCount = watch("bathroomCount");
  const amenities = watch("amenities");
  const standoutAmenities = watch("standoutAmenities");
  const imageSrc = watch("imageSrc");
  // const multipleImageSrc = watch("multipleImageSrc");

  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        ssr: false,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location]
  );

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.PRICE) {
      return onNext();
    }

    setIsLoading(true);
    axios
      .post("/api/listings", data)
      .then(() => {
        toast.success("Congragulations your listing has been created!");
        router.refresh();
        reset();
        setStep(STEPS.CATEGORY);
        rentModal.onClose();
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }
    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }
    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-track-emerald-900 scrollbar-thumb-emerald-300">
        {categories.map((item: any) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Where is your place located?"
          subtitle="Help guests find you!"
        />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue("location", value)}
        />
        <Map center={location?.latlng} />
      </div>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Share some of the basics about your place" />
        <Counter
          title="Guests"
          subtitle="How many guests do you allow?"
          value={guestCount}
          onChange={(value) => setCustomValue("guestCount", value)}
        />
        <hr />
        <Counter
          title="Rooms"
          subtitle="How many rooms do you have?"
          value={roomCount}
          onChange={(value) => setCustomValue("roomCount", value)}
        />
        <hr />
        <Counter
          title="Beds"
          subtitle="How many beds do you have?"
          value={bedCount}
          onChange={(value) => setCustomValue("bedCount", value)}
        />
        <hr />
        <Counter
          title="Bathrooms"
          subtitle="How many bathrooms are there?"
          value={bathroomCount}
          onChange={(value) => setCustomValue("bathroomCount", value)}
        />
      </div>
    );
  }

  if (step === STEPS.AMENITIES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Amenities"
          subtitle="What basic amenities does your place have?"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-track-emerald-900 scrollbar-thumb-emerald-300">
          {amenitiesItems.map((item: any) => (
            <div key={item.label} className="col-span-1 text-center">
              <AmenitiesInput
                value={amenities}
                onClick={(amenities) =>
                  setCustomValue("amenities", [amenities])
                }
                label={item.label}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (step === STEPS.STANDOUTAMENITIES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Standout Amenities"
          subtitle="What amenities do you have that standout?"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-track-emerald-900 scrollbar-thumb-emerald-300">
          {standoutAmenitiesItems.map((item: any) => (
            <div key={item.label} className="col-span-1 text-center">
              <StandoutAmenitiesInput
                onClick={(standoutAmenities) =>
                  setCustomValue("standoutAmenities", standoutAmenities)
                }
                value={standoutAmenities}
                label={item.label}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (step === STEPS.COVERIMAGE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add a cover photo of your place"
          subtitle="Show a good first impression of your place"
        />
        <CoverImageUpload
          value={imageSrc}
          onChange={(value) => setCustomValue("imageSrc", value)}
        />
      </div>
    );
  }

  // if (step === STEPS.IMAGES) {
  //   bodyContent = (
  //     <div className="flex flex-col gap-4">
  //       <Heading
  //         title="Additional Images"
  //         subtitle="add more images to show off your place"
  //       />
  //       <div className="grid grid-cols-1 md:grid-cols-2 col-span-1">
  //         <ImagesUpload
  //           value={multipleImageSrc}
  //           onChange={(value) => setCustomValue("multipleImageSrc", value)}
  //         />
  //       </div>
  //     </div>
  //   );
  // }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="How would you describe your place"
          subtitle="Include as many details as you would like"
        />
        <Input
          id="title"
          label="Title"
          disabled={isLoading}
          register={register}
          errors={errors}
          type="text"
          required
        />
        <hr />
        <Input
          id="description"
          label="Description"
          disabled={isLoading}
          register={register}
          errors={errors}
          type="text"
          required
        />
      </div>
    );
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Set your price"
          subtitle="How much do you charge per night?"
        />
        <Input
          id="price"
          label="Price"
          formatPrice
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  return (
    <Modal
      title="Host your home!"
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      body={bodyContent}
    />
  );
};

export default RentModal;
