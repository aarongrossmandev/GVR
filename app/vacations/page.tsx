import ClientOnly from "@/providers/ClientOnly";
import Categories from "../components/navbar/Categories";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import getListings, { IListingsParams } from "../actions/getListings";
import ListingCard from "../components/listings/ListingCard";
import getCurrentUser from "../actions/getCurrentUser";

interface HomeProps {
  searchParams: IListingsParams;
}

const VacationsPage = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    {
      return (
        <ClientOnly>
          <EmptyState showReset />
        </ClientOnly>
      );
    }
  }
  return (
    <ClientOnly>
      <Container>
        <section className="pt-40 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listings.map((listing) => {
            return (
              <ListingCard
                key={listing.id}
                currentUser={currentUser}
                data={listing}
              />
            );
          })}
        </section>
      </Container>
    </ClientOnly>
  );
};

export default VacationsPage;
