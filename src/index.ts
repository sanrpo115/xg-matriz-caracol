import { Server } from "./presentation/server";

(() => {
  main();
});



function main() {
  new Server(3100).start();
}