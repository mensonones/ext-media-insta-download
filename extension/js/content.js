
// download images

/* {
  let images = document.querySelectorAll('img');

  console.log('IMAGES: ', images);

  let download = async (url) => {
    const filename = url.match(/([^\\/]+\.[^\\/]+)\?/)[1];
    const blob = await fetch(url).then(res => res.blob());
    const blobUrl = window.URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename;
    a.click();
  
    window.URL.revokeObjectURL(blobUrl);
  }

  for (let i = 0; i <= images.length; i++) {
    if (images[i].alt === "" && images[i].src) {
      download(images[i].src);
    }
  }
}; */

// download video

{
  let video = document.getElementsByTagName('video')[0];
  let sources = video.getElementsByTagName('source');

  let download = async (url) => {
    const filename = url.match(/([^\\/]+\.[^\\/]+)\?/)[1];
    const blob = await fetch(url).then(res => res.blob());
    const blobUrl = window.URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename;
    a.click();
  
    window.URL.revokeObjectURL(blobUrl);
  }

  for (let i = 0; i < sources.length; i++) {
    if (sources[i].src) {
      download(sources[i].src);
    }
  }
}
