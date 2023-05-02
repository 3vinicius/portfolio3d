# Resume
- create project react in diretório ``npm create vite@latest ./ -- --template react``
- Install Tailwind CSS ``npm install -D tailwindcss postcss autoprefixer``
- ``npx tailwindcss init -p`` 
- Install dependeces in project, obs: usign react-parallax-tilt for create version react ``npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-parallax-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom``
- ``--legacy-peer-deps`` is used add dependeces in old version
- install ThreeJs ``npm install --legacy-peer-deps three``
- use [logo.com](log.com) for create you logo
- use mindjour IA from create yours imgs
- using styles bottom should control show and hidden components in mediaQuery
```
@media (min-width: 640px)
.sm\:flex {
    display: flex;
}

.hidden {
    display: none;
}

```

- Is mobile ? this objeto should identify: ``window.matchMedia('(max-width: 500px)')``