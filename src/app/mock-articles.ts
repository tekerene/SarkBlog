import { Article } from './article';

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: "My first article",
        content: '',
        description: "This Is My First Article It's great. Please read is. :)",
        key: 'My-first-article',
        date : new Date(),
        imageUrl: 'http://angular.io/assets/images/logos/angular/angular.png'
    },
    {
        id: 2,
        title: 'My second article',
        content: '',
        description: " It's Also a great Article. Please read is. :)",
        key: 'My-second-article',
        date: new Date(),
        imageUrl: 'http://angular.io/assets/images/logos/angular/angular_solidBlack.png'
    }
];
