import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-icon-home',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>  `
})
export class IconHomeComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-chart-bar',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
</svg> `
})
export class IconChartBarComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-users',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>  `
})
export class IconUsersComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-building',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
</svg>  `
})
export class IconBuildingComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-list',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
         stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-600">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16" />
    </svg>  `
})
export class IconListComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-file-text',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>  `
})
export class IconFileTextComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-chart-line',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
</svg>  `
})
export class IconChartLineComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-calendar',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>  `
})
export class IconCalendarComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-message',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>  `
})
export class IconMessageComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-settings',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>  `
})
export class IconSettingsComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-help',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>  `
})
export class IconHelpComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-logout',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
</svg>  `
})
export class IconLogoutComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-logout',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
    `
})
export class PlusIconComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-search',
  template: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor" class="w-5 h-5 text-gray-500">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
      </svg>
    `
})
export class IconMagnifyingGlassComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-bell',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>

    `
})
export class IconBellComponent { }


@Component({
  standalone: true,
  selector: 'app-icon-user',
  template: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor" class="w-6 h-6 text-white">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 21a8.25 8.25 0 0115 0H4.5z" />
      </svg>
    `
})
export class IconUserCircleComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-trending-up',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>

    `
})
export class IconTrendingUpComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-trending-down',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
</svg>

    `
})
export class IconTrendingDownComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-dollar-sign',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>  `
})
export class IconDollarSignComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-arrow-right',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>  `
})
export class IconArrowRightComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-arrow-left',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>`
})
export class IconArrowLeftComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-shield',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none"
     viewBox="0 0 24 24" stroke-width="1.5"
     stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M12 3L3.75 7.5v4.875c0 5.04 3.307 9.564 8.25 10.875 4.943-1.311 8.25-5.835 8.25-10.875V7.5L12 3z" />
</svg>`
})
export class IconShieldComponent {}

@Component({
  standalone: true,
  selector: 'app-icon-check-circle',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none"
     viewBox="0 0 24 24" stroke-width="1.5"
     stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M9 12l2 2l4 -4M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18z" />
</svg>`
})
export class IconCheckCircleComponent {}

@Component({
  standalone: true,
  selector: 'app-icon-star',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
     viewBox="0 0 24 24" stroke-width="1.5"
     stroke="currentColor" class="size-6 text-yellow-400">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M12 17.27l5.18 3.73-1.64-5.64L20.54 9.5l-5.72-.5L12 3 9.18 9 3.46 9.5l4.9 5.86-1.64 5.64z" />
</svg>`
})
export class IconStarComponent {}

@Component({
  standalone: true,
  selector: 'app-icon-play',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none"
     viewBox="0 0 24 24" stroke-width="1.5"
     stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M5.25 5.25v13.5L18.75 12 5.25 5.25z" />
</svg>`
})
export class IconPlayComponent {}

@Component({
  standalone: true,
  selector: 'app-icon-bar-chart',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none"
     viewBox="0 0 24 24" stroke-width="1.5"
     stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M3 3v18h18M9 17V9M13 17V5M17 17v-6" />
</svg>`
})
export class IconBarChartComponent {}

@Component({
  standalone: true,
  selector: 'app-icon-globe',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none"
     viewBox="0 0 24 24" stroke-width="1.5"
     stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zM12 3c2.5 2.5 4 6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-6-4-9s1.5-6.5 4-9z" />
</svg>`
})
export class IconGlobeComponent {}

@Component({
  standalone: true,
  selector: 'app-icon-smartphone',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none"
     viewBox="0 0 24 24" stroke-width="1.5"
     stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
</svg>`
})
export class IconSmartphoneComponent {}

@Component({
  standalone: true,
  selector: 'app-icon-zap',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none"
     viewBox="0 0 24 24" stroke-width="1.5"
     stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z" />
</svg>`
})
export class IconZapComponent {}

@Component({
  standalone: true,
  selector: 'app-icon-heart',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.014-4.5-4.5-4.5A4.504 4.504 0 0 0 12 6.75a4.504 4.504 0 0 0-4.5-3A4.5 4.5 0 0 0 3 8.25c0 5.25 9 10.5 9 10.5s9-5.25 9-10.5z" />
</svg>
  `
})
export class IconHeartComponent { }

@Component({
  standalone: true,
  selector: 'app-icon-plus',
  template: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
  `
})
export class IconPlusComponent { }
