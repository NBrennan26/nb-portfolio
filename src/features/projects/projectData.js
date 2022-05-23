import blog from "../../images/blog-website-sample.png";
import cocktail from "../../images/cocktail-website-sample.png";
import games from "../../images/games-website-sample.png";

export const projects = [
  {
    title: "Blog",
    id: 0,
    description:
      "Full Stack Blog - Express, Mongoose, React, Redux, User authorization and authentication",
    link: "https://nbrennanblog.herokuapp.com/",
    github: "https://github.com/NBrennan26/blog-api",
    photo: blog,
  },
  {
    title: "Cocktail Assistant",
    id: 2,
    description:
      "React App hosted on Firebase - Select the ingredients you have and see what cocktails you can make",
    link: "https://cocktailbuilder-112fc.web.app/",
    github: "https://github.com/NBrennan26/cocktail-builder",
    photo: cocktail,
  },
  {
    title: "Games",
    id: 3,
    description: "A compilation of a few games I've made in the past year",
    link: "https://games-nb.web.app/",
    github: "https://github.com/NBrennan26/games",
    photo: games,
  },
];
