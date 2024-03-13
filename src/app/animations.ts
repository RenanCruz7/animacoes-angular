import { animate, group, keyframes, query, state, style, transition, trigger } from '@angular/animations';

export const highlightedStateTrigger = trigger("highlistedState", [
  state('default', style({
    border: '2px solid #B2B6FF',
  })),
  state('highlighted', style({
    border: '4px solid #B2B6FF',
    filter: 'brightness(92%)'
  })),
  transition('default => highlighted', [
    animate('200ms ease-out', style({
      transform: 'scale(1.02)'
    })),
    animate(200)
  ])
])

export const shownStateTrigger = trigger('shownState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(300, style({
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate(300, style({
      opacity: 0
    }))
  ])
])

export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate('400ms ease-in', style({
      transform: 'scale(0.4)'
    }))
  ])
])

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({ opacity: 0, width: 0 }),
    animate('400ms ease-out', keyframes([
      style({ offset: 0, opacity: 0, width: 0 }),
      style({ offset: 0.8, opacity: 0.5, width: '*', backgroundColor: 'lightgreen' }),
      style({ offset: 1, opacity: 1, width: '*', backgroundColor: 'lightblue' })
    ]))
  ]),
  transition(':leave', [
    animate('200ms cubic-bezier(.13,.9,.8,.1)', style({ opacity: 0, width: 0 }))
  ])
])

export const formButtonTrigger = trigger('formButton', [
  transition('invalid => valid', [
    query('#botao-salvar', [
      group([
        animate(100, style({
          transform: 'scale(1.1)'
        })),
        animate(200, style({
          backgroundColor: '#63B77C'
        }))
      ]),
      animate(200, style({
        transform: 'scale(1)'
      }))
    ]),
  ]),
  query('#botao-salvar', [
    transition('valid => invalid', [
      group([
        animate(100, style({
          transform: 'scale(1.1)'
        })),
        animate(200, style({
          backgroundColor: '#6C757D'
        }))
      ]),
      animate(200, style({
        transform: 'scale(1)'
      }))
    ])
  ])
])

