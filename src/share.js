export function getShareUrl(platform, url) {
    let shareUrl = '';
  
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}`;
        break;
      default:
        console.error(`Invalid platform: ${platform}`);
        break;
    }
  
    return shareUrl;
  }
  