## Welcome!

Quick walkthrough of what the project contains as of yet:

- Homepage with all data
- Slug pages based on category when pressing the Category Cards
- a /testing page where you can find a miniature design system (I would not launch with this but I left it in if you wanna take a look)

I also left some questions that popped up during my work I would've asked to designers/backend below

NOTE: Since there were no specs for individual restaurant pages I left those links empty, if I would create them I'd do something similar to what I did with the Category Slugs.

## Questions to Designer

- Is there meant to be shadows on the Cards? They're very minor.
- Images are not coming from API, are they meant to be downloaded locally?
- Restaurant Card sizes are pretty odd, are they meant to be %/view based?
  - Changed the cards to have 16:10 AR instead & scale since it makes more sense & looks much better
  - Filter size is also pretty off, 239px (?)
- Fonts from download page are huge, are there woff2 variants able to download from somewhere?
- All InfoCard sizes are equal except for price-range, is that really necessary?
- LineHeights are pretty strange, eg on Display it's barely covering half
- There are quite a few different spacing sizes, I count 21 different "px" variants
  - This is quite a lot to account for by using xxxs -> xxxl which accounts for 10
  - Some spacings are only used only a few times like 32px & 48px or 88px, could these be altered to eg. 40px/32px or 80px where there are more cases?
  - Some of these odd-ones out I've decided to hard-code, while defining sizes for the ones used more commonly
  - Two cases of 17px in design that I made 16px

## Questions to Backend

- Why is open status not specified with the restaurant data?
- No defined opening time as of yet? Hard-coding 12pm for now
