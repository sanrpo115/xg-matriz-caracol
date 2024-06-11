import { AppRoutes } from "./presentation/routes/routes";
import { Server } from "./presentation/server";

(() => {
  main();
})();

function main() {
  new Server({ port: 3100, routes: AppRoutes.routes}).start();
}