import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
