import { MenuItem } from '../model/menu-item.interface';

export class Config {
    public static readonly MENU_ITEMS: MenuItem[] = [
        { name: 'All Words', path: '/worms' },
        { name: 'Add Word', path: '/worm/new' },
        { name: 'Random Word', path: '/worm/random' },
        { name: 'Search for Word', path: '/worm/search' },
        { name: 'Statistics', path: '/stats' },
        { name: 'Oxford Dict. API', path: '/worm/search/oxford' },
    ];
}
