import Carousel from '@/components/carousel';
import Layout from '@/components/layout';
import Footer from "@/components/mobile/footer";
import MoviesList from '@/components/moviesList';
import { moviesList } from '@/utils/constants';
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const Page = () => {
  return (
    <>
      <Carousel />
      <MoviesList
        header='Recommended Movies'
        list={moviesList}
        className='!my-8'
        ctaLabel={'See All'}
        cta={'/movies'}
      />
      <MoviesList
        header='Upcoming Movies'
        list={moviesList}
        ctaLabel={'See All'}
        cta={'/movies'}
      />
    </>
  );
};

Page.getLayout = function getLayout(page: any) {
  
  return (
    <>
      <Layout showHeader={true}>{page}</Layout>
      <Footer/>
    </>
  );
};

export default Page;
