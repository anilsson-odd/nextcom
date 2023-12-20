'use client';
import { useEffect } from 'react';
import { useTag } from '@/context/tag';

export default function TagList() {
  const { tags, fetchTags, setUpdatingTag, setParentCategory } = useTag();

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <>
      {tags?.map((t) => (
        <button
          className='btn'
          onClick={() => {
            setParentCategory('');
            setUpdatingTag(t);
          }}
          key={t._id}
        >
          {t.name}
        </button>
      ))}
    </>
  );
}
