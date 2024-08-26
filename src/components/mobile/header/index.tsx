import Layout from "@/components/layout";
import React from 'react'

const Page = () => {
  return (
    <div>Page</div>
  )
}

Page.getLayout = function getLayout(page:any) {
    return <Layout>{page}</Layout>;
  };
  
  export default Page;