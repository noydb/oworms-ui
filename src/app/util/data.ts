import { MenuItem } from '../model/menu-item.interface';
import { AppRoutes } from './app.routes';

export const AB_PARA_1 = 'A convenient way to store and find words. I was previously using a simple spreadsheet but as it grew, adding words proved to be inefficient and frankly annoying.';
export const AB_PARA_2 = 'Being able to store and find words my way. Sure, one can find any word in existence on the internet, but I wanted a much more cleaner and singular way to view words. If I google a word and it happens to also be the name of a company, the company will appear first (thanks SEO) and not the word. I know in oworms that a company is not going to appear if I search for a word…';
export const AB_PARA_3 = 'Practicing my coding. I’ve been able to build my own Spring Boot API with no restrictions. Writing code in one’s free time can be a totally different experience to that of writing code during work hours. Yes my style of coding could be described as cowboy but I still adhere to one-man standards. I also adore the freedom that comes with writing personal projects. No unit testing, e2e testing, linting, etc. I think one gets straight to the “fun” part of the development cycle - one does not need a domain design, flow diagrams, use cases, etc. This app has bolstered my skill level in a few different technologies. ';
export const AB_PARA_4 = 'Finding new words and improving my knowledge of existing ones. The Oxford dictionary possesses roughly 250 000' +
    ' words. Most adult native speakers are estimated to have a vocabulary range of roughly 20 000 - 35 000 words. So over a lifetime' +
    ' one will utilise about 10% of the English language. This figure could trend even lower if new words are added to the dictionary.' +
    ' By having a wide and well-grounded vocabulary, one is able to use words far more appropriately and effectively. This is not only' +
    ' in reference to unknown/obscure/esoteric words. I use many words without truly knowing what the definition is. I understand that' +
    ' it is not necessary to know the exact definition of a word in order to use it. We just know what we mean (and what others mean)' +
    ' when we use certain words. But I believe one\'s expression, language, and communication is bolstered by knowing a bit more' +
    ' precisely what you (and others) mean.'

export const MENU_ITEMS: MenuItem[] = [
    { name: 'home', path: AppRoutes.ALL },
    { name: 'about', path: AppRoutes.ABOUT },
    { name: 'statistics', path: AppRoutes.STATS }
    // { name: 'filter', path: AppRoutes.LIST, filter: true } TODO: test.
];
