export function getShareUrl(platform, url, description) {
  let shareUrl = '';

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    typeof window !== 'undefined' && window.navigator.userAgent
  );

  switch (platform) {
    case 'facebook':
      if (isMobile) {
        shareUrl = `fb://facewebmodal/f?href=${encodeURIComponent(url)}`;
      } else {
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      }
      break;
    case 'reddit':
      if (isMobile) {
        shareUrl = `https://reddit.app.link/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(description)}`;
      } else {
        shareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(description)}`
      }
      break;
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(description)}`;
      break;
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(description)}`;
      break;
    case 'pinterest':
      shareUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(description)}`;
      break;
    case 'whatsapp':
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(description)}%20${encodeURIComponent(url)}`;
      break;
    case 'email':
      shareUrl = `mailto:?subject=${encodeURIComponent(description)}&body=${encodeURIComponent(url)}`;
      break;
    default:
      console.error(`Invalid platform: ${platform}`);
      break;
  }

  return shareUrl;
}
