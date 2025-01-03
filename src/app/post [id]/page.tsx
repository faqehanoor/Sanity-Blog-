import React from 'react';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  const { postid } = router.query; // Accessing the postid from the URL

  return (
    <div>
      <h1>Post ID: {postid}</h1>
      {/* You can now use the postid to fetch post data or display it */}
    </div>
  );
};

export default Page;
