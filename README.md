## Questions to Designer

- Is there meant to be shadows on the Cards? They're very minor.
- Images are not coming from API, are they meant to be downloaded locally?
- Restaurant Card sizes are pretty odd, are they meant to be %/view based?
  - Changed the cards to have 16:10 AR instead & scale since it makes more sense & looks much better
  - Filter size is also pretty off, 239px (?)
- Fonts from download page are huge, are there woff2 variants able to download from somewhere?
- All InfoCard sizes are equal except for price-range, is that really necessary?

## Questions to Backend

- Why is open status not specified with the restaurant data?
- No defined opening time as of yet? Hard-coding 12pm for now
