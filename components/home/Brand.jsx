import React from 'react'
import InfiniteScroll from '@/components/common/InfiniteScroll'
import images from '@/configs/img.config';

export default function Brand() {
    // Generate brands array dynamically from the images.brand object
    const brands = Object.keys(images.brand).map((key) => ({
        id: key,
        logo: images.brand[key],
    }));

  return (
    <div className='border-t-2 border-secondary'>
        <InfiniteScroll
            items={brands}
            direction="left"
            speed="slow"
        />
    </div>
  )
}
