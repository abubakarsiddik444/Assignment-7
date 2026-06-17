const paths = {
  home: 'M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3V10.5Z',
  timeline: 'M12 8v5l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  stats: 'M4 19V5M4 19h16M8 16v-5M13 16V8M18 16v-9',
  plus: 'M12 5v14M5 12h14',
  mail: 'M4 6h16v12H4V6Zm0 0 8 7 8-7',
  calendar: 'M7 3v4M17 3v4M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z',
  tag: 'M20 12 12 20 4 12V4h8l8 8ZM8 8h.01',
  clock: 'M12 8v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  archive: 'M4 7h16M6 7v13h12V7M9 11h6M5 4h14v3H5V4Z',
  trash: 'M5 7h14M10 11v6M14 11v6M8 7l1-3h6l1 3M7 7v13h10V7',
  call: 'M6 4h4l2 5-3 2c1.3 2.8 3.2 4.7 6 6l2-3 5 2v4c0 1-1 2-2 2C10 22 2 14 2 6c0-1 1-2 2-2h2Z',
  text: 'M4 5h16v11H8l-4 4V5Z',
  video: 'M4 7h11v10H4V7Zm11 4 5-3v8l-5-3',
  search: 'M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15ZM16 16l5 5',
}

export default function Icon({ name, className = '' }) {
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  )
}
