import Layout from '@/components/layout';
import MobileHeader from '@/components/mobile/header';
import React, { useLayoutEffect, useState } from 'react';
import MediaPlayer from '@/components/mediaPlayer';
import { useRouter } from 'next/router';
import { videosLinks } from '@/utils/constants';

const MultiMedia = ({
  params,
  setId,
}: {
  params: string | number;
  setId: React.Dispatch<React.SetStateAction<any>>;
}) => {
  useLayoutEffect(() => {
    setId(params);
  }, []);
  return <MediaPlayer videosLinks={videosLinks} />;
};

MultiMedia.getLayout = function getLayout(page: any) {
  const [id, setId] = useState();

  return (
    <Layout>
      <MobileHeader href={`/movies/12`}>
        <header className='text-base font-semibold'>Trailers</header>
      </MobileHeader>

      {React.cloneElement(page, { setId })}
    </Layout>
  );
};

export default MultiMedia;

export async function getServerSideProps(context: any) {
  const { query } = context;

  return {
    props: {
      params: query?.id,
    },
  };
}
