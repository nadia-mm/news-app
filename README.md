# NEWS APP

## Getting Started

```bash
git clone https://github.com/nadia-mm/news-app.git
npm install
npm run dev
# or
git clone https://github.com/nadia-mm/news-app.git
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## The Task

Create the frontend of a small dynamic news website. The website should contain these components and views:

News Overview: This view shows a small aggregation of all available news articles. The news articles should be loaded via Ajax or similar from a JSON source. For this task, a complex data store can simply be substituted by a static json file with a couple of news articles containing mock content. In a real world application, this json file would of course be replaced by the api of a cms or a complex data service.
The list should contain some form of pagination and not require any page reloads during navigation.

News Detail: If the user clicks on a news article on the overview, the detailed view of the selected news article is shown. This view shows all content and attributes of that article. This view is also a dynamic component of your frontend and should ideally also not require a page load of the web browser.

Design / Layout: Design and layout is not important, it should however be responsive and adapt to desktop or mobile screen sizes respectively and show some form of effects or transitions during user interaction. Again, the goal of this task is not to provide a nice looking interface but to show that you can work with dynamic webpages and know what a responsive approach is.
If you need inspiration or guidelines on how such a site could look, you can use www.gq-magazin.de as a rough guideline.

Navigation: the website should contain a navigation bar with two levels. The second level is only shown if a user clicks on the first level. It is enough for this task if you use a dummy menu without any real use.

Please try to focus on the following technologies:

- React
- AJAX + JSON ( all articles can reside in a static json file )
- CSS3 / Responsive Design
- HTML5 and semantic tags
- OpenGraph and SEO relevant tags

![](https://github.com/nadia-mm/news-app/blob/main/demo/lighthouse-tech-menu.jpg)