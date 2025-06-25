import imagemin from 'imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import path from 'path';


(async () => {
  const files = await imagemin(['src/assets/images/*.{jpg,png}'], {
    destination: 'src/assets/optimized-images',
    plugins: [
      mozjpeg({ quality: 70 }),
      pngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

  console.log('✅ Optimized images:', files.map(f => f.destinationPath));
})();
