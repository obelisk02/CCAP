import { Server } from "./presentation/server";





(() =>{
    main();
})

async function main() {
    // todo: await bd

    // todo: inicio de servidor
    new Server({
        port: 3000
    }).start()
}