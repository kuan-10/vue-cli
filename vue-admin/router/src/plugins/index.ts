import { App } from "vue";
import { setupTailwindCss } from "./tailwindcss";
export function setupPlugins(app:App){
  setupTailwindCss()
}