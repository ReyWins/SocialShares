# How To Use Social Media Share Links in an Astro Component! 🚀

This is a simple demonstration on how we utilize the [{Astro.url}](https://docs.astro.build/en/reference/api-reference/#astrourl) function to grab our current URL path. This use case scenario is extremely helpful and easy to use for those who want to touch up their existing blog posts or websites with a few simple steps. 

Since the JavaScript function returns the current page URL from the Request object, it gives us the data we need in order to convert it into a shareable URL. We're using a custom Component file called "SocialShare.astro". This will give us the proper html clode that imports and utilize the JavaScript. 

The goal of this is to share my beginners knowledge with all new Astronauts 🧑‍🚀 and those who are more seasoned!

Feel free to adjust and add any features you seem fit! 

I plan on updating this more over time.

Enjoy!
--------------------------------------------------------------------

➡️ View live demo: [Click Here](https://socialshares.netlify.app)

➡️ Follow Our Blog: [Reywins.com](https://reywins.com)

➡️ Follow us on Twitter: [Click Here](https://twitter.com/reywins_social)

> Example of our Social Share buttons:

![Example](https://github.com/ReyWins/SocialShares/blob/master/src/images/SharePost.png)


# Twitter Output Example in Browser
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
  
```
> The javascript includes the correct URL share syntax that is used by various Social Media companies. You can simply add different types of social media links as long as you have the correct URL path and syntax. Simply add another switch statement to the existing file as your add more social media links.

## SocialShare.astro Component
```
---
import { getShareUrl } from '../share.js';
import Icon from 'astro-icon';
---
<center>
<div class="share">
<ul>
    <li><a href={getShareUrl('facebook', Astro.url)} target="_blank" rel="noopener"><Icon name=facebook width="35px" /></a></li>  
        <li><a href={getShareUrl('twitter', Astro.url)} target="_blank" rel="noopener"><Icon name=twitter width="35px" /></a></li>
            <li><a href={getShareUrl('linkedin', Astro.url)} target="_blank" rel="noopener"><Icon name=linkedin width="35px" /></a></li>
</ul>
</div>
</center>

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
| Extremely Customizable!                                   | Doesn't provide text within shareable link.      |


## 🚧 Upcoming Works
- Will add custom text to each shareable link.
- Provide more information on other social media shareable links (with correct syntax).

## ⚙️ Revisions
June 2023 - 1.0: Touched up Readme documentation.
