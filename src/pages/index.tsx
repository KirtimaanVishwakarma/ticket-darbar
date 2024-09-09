import Carousel from '@/components/carousel';
import Layout from '@/components/layout';
import MoviesList from '@/components/moviesList';
import { moviesList } from '@/utils/constants';

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
  return <Layout showHeader={true}>{page}</Layout>;
};

export default Page;
