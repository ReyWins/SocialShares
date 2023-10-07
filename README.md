# How To Use Social Media Share Links in an Astro Component! 🚀

This is a simple demonstration on how we utilize the [{Astro.url}](https://docs.astro.build/en/reference/api-reference/#astrourl) function to grab our current URL path. This use case scenario is extremely helpful and easy to use for those who want to touch up their existing blog posts or websites with a few simple steps. 

Since the JavaScript function returns the current page URL from the Request object, it gives us the data we need in order to convert it into a shareable URL. We're using a custom Component file called "SocialShare.astro". This will give us the proper html clode that imports and utilize the JavaScript. 

The goal of this is to share my beginners knowledge with all new Astronauts 🧑‍🚀 and those who are more seasoned!

Feel free to adjust and add any features you seem fit! 

I plan on updating this more over time.

Enjoy!
--------------------------------------------------------------------
# 💫 Latest Version: 2.0 

## What's new:

- Added new Social Media links: Pinterest, WhatsApp, and Email
- Updated links to show new change on Demo Site
- Updated the JS Code
--------------------------------------------------------------------
# Previous Versions:

## Version 1.5 Beta
## What's new:

- We've added Reddit to the Social Shares links. This feature is simple and effective when we want our users to share on Reddit platform.
- We're experimenting with the mobile versions of the code. We're trying to make the social media share links more accessible via mobile platforms and to launch the actual application. However, come to find out due to security reasons this isn't plausible unless we are using APIs. More to come later on that regard.
- Made minor code adjustments.

--------------------------------------------------------------------

➡️ View live demo: [Click Here](https://socialshares.netlify.app)

➡️ Follow Our Blog: [Reywins.com](https://reywins.com)

➡️ Follow us on Twitter: [Click Here](https://twitter.com/reywins_social)

> Example of our Social Share buttons:

![Example](https://reywins.com/images/example.png)

![Example](https://reywins.com/images/example2.png)


# X (Twitter) Output Example in Browser
>https://twitter.com/intent/tweet?url=https%3A%2F%2Fsocialshares.netlify.app%2F

## 🚀 Recommended Installation Paths

Below is the correct suggested path that you should use this for this Astro Component file as well as the JavaScript file. 
Note, you can place the *share.js file in any other path that works best for you. Just rememeber to import it correctly.

```
/
├── src/
│   ├── components/
│   │   └── SocialShare.astro
│   ├── js/
│   │   └── share.js
/
```

## Share.js Script:
```
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

  
```
> The javascript includes the correct URL share syntax that is used by various Social Media companies. You can simply add different types of social media links as long as you have the correct URL path and syntax. Simply add another switch statement to the existing file as your add more social media links.

## SocialShare.astro Component
```
---
import { getShareUrl } from '../share.js'
import Icon from 'astro-icon';
---

<ul class="share">
  <center>
    <li>
    <a href={getShareUrl('facebook', Astro.url)} target="_blank" rel="noopener">
      <Icon name="facebook" width="35" height="35px" />
    </a>
  </li>  
  <li>
    <a href={getShareUrl('reddit', Astro.url, 'Check out this blog post!')} target="_blank" rel="noopener">
      <Icon name="reddit" width="35" height="35px" />
    </a>
  </li>
  <li>
    <a href={getShareUrl('twitter', Astro.url, 'Check out this blog post!')} target="_blank" rel="noopener">
      <Icon name="twitter" width="35" height="35px" />
    </a>
  </li>
  <li>
    <a href={getShareUrl('linkedin', Astro.url, 'Check out this blog post!')} target="_blank" rel="noopener">
      <Icon name="linkedin" width="35" height="35px" />
    </a>
  </li>
  <li>
    <a href={getShareUrl('pinterest', Astro.url, 'Check out this blog post!')} target="_blank" rel="noopener">
      <Icon name="pinterest" width="35" height="35px" />
    </a>
  </li>
  <li>
    <a href={getShareUrl('whatsapp', Astro.url, 'Check out this blog post!')} target="_blank" rel="noopener">
      <Icon name="whatsapp" width="35" height="35px" />
    </a>
    <li>
      <a href={getShareUrl('email', Astro.url, 'Check out this blog post!')} target="_blank" rel="noopener">
        <Icon name="email" width="35" height="35px" />
      </a>
    </li>
  </center>
</ul>

```
> Import the *share.js* file and simply create an Unordered List tag to the amount of social media links you would like to use. You can customize this file based upon existing CSS styling.
> For our example, we've used Astro Icon to add a simple yet effective way to show off the social media links.
> Notice that we are using [Astro.url](https://docs.astro.build/en/reference/api-reference/#astrourl) to return the URL path of your current website.
> This is where the magic 🪄 happens. 


## ☯ Current Features Pros vs Cons

Of course there are some limitations ... hopefully this addresses some!

| Pros                                                      | Cons                                             |
| :---------------------------------------------------------| :----------------------------------------------- |
| Strictly static to your existing site.                    | Does not work well within .MD/.MDX Formats       |
| More secure since it doesn't rely on 3rd party functions. | Does not provide with your realtime clicks       |
| Extremely Customizable!                                   | Doesn't provide page title within shareable link.      |

## 🪲 Known Bugs 
- Reddit mobile version will not display share link properly. The desktop version still works.
Investigating as of Oct 2023.

## 🚧 Upcoming Works
- Will add the title of the blog post to share links.
- To see how we can start using APIs.

## ⚙️ Revisions
Oct 2023 - 2.0: Added new Social Media links.

Jul 2023 - 1.5: Released beta version and made minor changes.

Jun 2023 - 1.0: Touched up Readme documentation.
