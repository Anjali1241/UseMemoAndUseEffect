# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

-useMemo
-will exceute along with UI
-if we write api in this memo then UI will not load and user will see blank page
-will return value that we can show in UI
-cache value and if any dependencies changes then it will update cache value and return it
https://www.youtube.com/watch?v=JvdxYsF66K4

useEffect
-will exceute after UI rendered
-api calling will be written in this hook because its render after UI
-Do not return anything but if want to return anything from that then have to take help of extra variable