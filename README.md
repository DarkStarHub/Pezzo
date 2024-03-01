https://darkstarhub.github.io/Pezzo/

# How I worked on this project
Creating an engaging landing page for a pizza site was a delight, with the standout feature being the custom carousel, implemented through my JavaScript code. The circular carousel, functioning like a wheel of divs rotating around a central div, posed a unique challenge in managing touch and click events to ensure seamless interaction. I aimed for visitors to effortlessly swipe or navigate the carousel using left and right buttons, implementing actions to align the wheel if not centered on a slice post-swipe. Tracking wheel rotation, start and end positions, and identifying the "live" slice were key aspects in achieving this, all contributing to a dynamic user experience.

Dealing with responsive design posed its own set of challenges, particularly concerning the carousel, especially regarding the change between landscape and portrait orientations. To tackle this, I addressed the issue by dynamically resizing the entire carousel to align with the dimensions of the screen.

Adding an extra layer of fun, I incorporated a custom cursor using a blend of JavaScript for mouseover events and CSS classes.

The remainder of the page animations were triggered by Intersection Observers, enhancing the overall visual appeal.

In envisioning the expansion of this concept into a fully functional site, I would opt for migrating everything into a React environment. Leveraging React Router and capitalizing on the performant nature of React Single Page Applications (SPAs) would undoubtedly enhance the site's functionality and user experience.
