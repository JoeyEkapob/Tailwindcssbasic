import { defineConfig } from "vite";

export default defineConfig({
    root:"./src",
    build:{
        outDir:"../dist",
        emptyOutDir:true,
        rollupOptions:{
            input:'./src/index.html'
        }
    },
    server:{
        port:3001,
        open:true,
    }
})