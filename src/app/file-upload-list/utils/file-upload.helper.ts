import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export function formatFileSize(bytes: number, decimalPoint: number = 2): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1000;
  const dm = decimalPoint || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export const ListAnimation = trigger('listAnimation', [
  transition('* => *', [
    query(':leave', [
      stagger(100, [
        animate('0.5s', style({ opacity: 0 }))
      ])
    ], {optional: true}),
    query(':enter', [
      style({ opacity: 0 }),
      stagger(100, [
        animate('0.5s', style({ opacity: 1 }))
      ])
    ], {optional: true})
  ])
])
