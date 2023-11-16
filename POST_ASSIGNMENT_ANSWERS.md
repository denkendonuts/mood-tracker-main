# Post Assignment Questions

### Describe the major design/build decisions and why you made them.
A lot of the decisions I made were in the interest of staying within the time frame 
- I converted the codebase to TypeScript to ensure type safety and provide better developer tooling like TS inferences. 
- I used Tailwind and Framer Motion for styling and animation as those are the ones I am the most well versed with. I added the design system colors and font combos (with line height and kerning to be able to replicate the design as closely as possible) to tailwind.
- I used one main context provider as the state management needs were simple.
- I used non fixed values for the styling of the Mood views so that the designs scale well across different desktop viewports.
-  I had the mood query clear on hard refresh so mood views wouldn't accidentally be loaded when the app state reset on refresh.
- I used the pleasant mood view without the text as the default state rather than having the Mood Picker open as it looked much better. 
- I integrated parts of the ARIA specification to ensure users utilizing assistive technologies can navigate the site with ease.

### How long did the assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Framework", "Coding", "Debugging").

The whole assignment took me about 8 hours totally
- Whiteboarding animations + app structure (30 mins)
- Reviewing documentation (45 mins)
- Coding (4 hours)
- Debugging (1 hour)
- Refining Animations (45 Mins)
- Refactoring and Code Review (1 hour)

### If you could go back and give yourself advice at the beginning of the project, what would it be?
- Not everything needs to be made from scratch! Weigh the pros and cons of building a feature and use some external libraries.  

### Do you feel that this assignment allowed you to showcase your abilities effectively?
I belive that I was allowd to showcase my front end development skills pretty effectively. I wish I had a bit more time to adapt the design for mobile view. 

### Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?
I have a lot of experience developing apps that interface with backends and complex state management (eg GraphQL, React Query, Redux, Deeplinking(inter platform integrations), etc), and felt that I was not able to demonstrate my skills in that area. 