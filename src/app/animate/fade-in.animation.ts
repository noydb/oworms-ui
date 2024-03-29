import { animate, group, query, style, transition, trigger } from '@angular/animations';

export const fadeAnimation = trigger('routerTransition', [
    transition('* <=> *', [
        group([

            query(
                ':leave',
                [
                    style({ opacity: 1, position: 'fixed', width: '100vw' }),
                    animate('.6s ease-in', style({ opacity: 0 }))
                ],
                { optional: true }
            ),

            query(
                ':enter',
                [
                    style({ opacity: '0' }),
                    animate('2s ease-in', style({ opacity: 1 }))
                ],
                { optional: true }
            )

        ])
    ])
]);
