# COMMENTS BY DEVELOPER

## MOVIES FILTERING

Filtering using Higer order javiscript function. Initially I chose to have the
movies filter as the user types in the search input field. I chose in the end to
make the search icon clickable and only show the filtered results when it is
clicked. This made the logic simpler, but I actually find it annoying when
results pop up while typing. This might be purely my one preference and there
might be some who would disagree. I am happy and confident with the decision.

Please note that I added a loader spinner and lazy load animations. I mocked
this out with setTimeout() purely for demonstration purposes.

## Styles

I wanted to use Emotion styles and see how it works. I usually either use Sass
or Styled Components. For simple, efficient, and uncomplicated styling, Emotion
is a great CSS-to-JS library. I still believe Styled Components is the better
option for more complex styling options.

## GALLLERY SORTING

Sorting was fairly straightforward. I created a helper function to make the code
cleaner and call it inside useeffect so that it renders properly.

## PAGINATION

This was probably where I spent most of my time. I usually use an external
library like AntD or MUI, but I wanted to create a Pagination component from
scratch. I believe its always a good idea to learn how these things are built
before using libraries. It helps me appreciate what other's have built to
improve our experience as developers and I believe its good to know how the
things work under the hood too.
